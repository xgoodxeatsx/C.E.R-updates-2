// ============================================================================
// C.E.R. — Home World Portal System
// server_scripts/cer_home_portal.js
//
// Implements: Design Doc "C.E.R. — Home World Portal System", Sections 2-4.
// Status: working skeleton against an ILLUSTRATIVE 3-world registry.
//   - Update STARTER_WORLDS below once the real starter worlds are locked.
//   - Section 3d (Outbreak leak logic) is a clearly-marked stub — it depends
//     on the World Affinity data structure, which isn't implemented yet
//     elsewhere in the pack. Do not enable it until that exists.
//
// Requires: a block placed in the world to act as the portal trigger.
// This script assumes that block has the ID given in PORTAL_BLOCK_ID below,
// and that a matching block exists (vanilla or custom) at both the home
// world spawn area and inside each starter world's spawn area.
// ============================================================================

// ---------------------------------------------------------------------------
// SECTION 2 — Static starter-world registry
// Illustrative 3-world set. Add/remove rows here as the real Six Worlds list
// (Part 15, still Candidate) gets locked. Nothing else in this file needs to
// change when this table changes.
// ---------------------------------------------------------------------------
const STARTER_WORLDS = {
  cer_world_fire: {
    dimension: "cer:starter_fire",
    spawn: [0, 100, 0],
    displayName: "Ember Reach"
  },
  cer_world_water: {
    dimension: "cer:starter_water",
    spawn: [0, 100, 0],
    displayName: "Tidefall Basin"
  },
  cer_world_grass: {
    dimension: "cer:starter_grass",
    spawn: [0, 100, 0],
    displayName: "Verdant Hollow"
  }
};

const HOME_WORLD = {
  dimension: "minecraft:overworld",
  spawn: [0, 100, 0],
  displayName: "The Observatory"
};

// The block used as the portal trigger. Swap for a custom block ID once one
// exists — a vanilla block works fine for early testing (e.g. an amethyst
// block or a specific stair placed in a distinctive spot).
const PORTAL_BLOCK_ID = "minecraft:amethyst_block";

// Persistent-data keys (Section 2 of the design doc)
const KEY_CHOSEN = "cer_starter_world";
const KEY_HAS_CHOSEN = "cer_has_chosen_starter";

// ---------------------------------------------------------------------------
// SECTION 3a/3b/3c — Portal interaction: choose-or-teleport flow
// ---------------------------------------------------------------------------
PlayerEvents.rightClickBlock(event => {
  const block = event.block;
  if (!block || block.id !== PORTAL_BLOCK_ID) return;

  const player = event.player;
  if (!player) return;

  const hasChosen = player.persistentData.getBoolean(KEY_HAS_CHOSEN);

  if (!hasChosen) {
    // First interaction ever for this player — open the selection interface.
    openStarterSelectionBook(player);
    event.cancel(); // prevent normal block interaction (e.g. placing a block)
    return;
  }

  // Already chosen — toggle between home world and their specific starter world.
  const chosenId = player.persistentData.getString(KEY_CHOSEN);
  const chosenWorld = STARTER_WORLDS[chosenId];

  if (!chosenWorld) {
    // Data got corrupted or references a world that no longer exists in the
    // registry (e.g. removed during a mod-list refinement pass). Fail safe:
    // send them home and log a warning rather than crashing the interaction.
    console.warn(`[CER] Player ${player.username} has an invalid stored starter world: ${chosenId}`);
    teleportPlayerTo(player, HOME_WORLD);
    event.cancel();
    return;
  }

  const currentDim = player.level.dimension.toString();
  if (currentDim === HOME_WORLD.dimension) {
    teleportPlayerTo(player, chosenWorld);
  } else {
    teleportPlayerTo(player, HOME_WORLD);
  }
  event.cancel();
});

// ---------------------------------------------------------------------------
// SECTION 4, Option A — Clickable book selection interface
// ---------------------------------------------------------------------------
function openStarterSelectionBook(player) {
  // Build one clickable line per registered starter world. Each line runs
  // /cer_choose_starter <world_id> via a run_command click event, caught by
  // the command registered in Section "Choice command" below.
  const pageLines = Object.keys(STARTER_WORLDS).map(worldId => {
    const world = STARTER_WORLDS[worldId];
    return Text.of(`[ ${world.displayName} ]`)
      .yellow()
      .bold()
      .onClickRunCommand(`/cer_choose_starter ${worldId}`)
      .onHoverShowText(Text.of(`Choose ${world.displayName} as your starter world.\nThis choice is permanent.`));
  });

  // Give the player a written book (server-side NBT) with the clickable page.
  // NOTE: exact book-giving API can vary slightly by KubeJS/NeoForge version —
  // this is the standard pattern; verify against the pack's actual KubeJS
  // version once other mods are locked in, per the design doc's "undecided" list.
  const book = Item.of("minecraft:written_book");
  book.setNbt({
    title: "The Choice of Worlds",
    author: "The Observatory",
    pages: [pageLines.map(l => l.toString()).join("\n\n")]
  });

  player.tell("A choice awaits you. Open the book you've been given.");
  player.give(book);
}

// ---------------------------------------------------------------------------
// Choice command — catches the click from the book and finalizes the choice
// ---------------------------------------------------------------------------
ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("cer_choose_starter")
      .then(
        Commands.argument("world_id", Arguments.STRING.create(event))
          .executes(ctx => {
            const player = ctx.source.player;
            if (!player) return 0;

            const worldId = Arguments.STRING.getResult(ctx, "world_id");
            const world = STARTER_WORLDS[worldId];

            if (!world) {
              player.tell("§cThat world doesn't exist. (Invalid starter world ID — check STARTER_WORLDS registry.)");
              return 0;
            }

            // Record the choice permanently (Section 2).
            player.persistentData.putString(KEY_CHOSEN, worldId);
            player.persistentData.putBoolean(KEY_HAS_CHOSEN, true);

            player.tell(`§aYou have chosen ${world.displayName}. This choice is permanent.`);
            teleportPlayerTo(player, world);

            return 1;
          })
      )
  );
});

// ---------------------------------------------------------------------------
// Shared teleport helper
// ---------------------------------------------------------------------------
function teleportPlayerTo(player, worldEntry) {
  const [x, y, z] = worldEntry.spawn;
  player.teleportTo(worldEntry.dimension, x, y, z);
  player.tell(`§7Arriving: ${worldEntry.displayName}`);
}

// ============================================================================
// SECTION 3d — Outbreak leak logic (STUB — DO NOT ENABLE YET)
//
// Left deliberately unimplemented. Per the design doc, this depends on the
// World Affinity data structure and the Final Spawn Weight formula (Part 1)
// / Twisted-to-official population table (Part 3), none of which exist as
// real code yet. Wiring this up before that exists will just throw errors.
//
// When ready, the real version of this function should:
//   1. Run on a periodic server tick/schedule, not a player interaction.
//   2. For each player who has chosen a starter world, look up that world's
//      current World Affinity level (wherever that ends up being stored).
//   3. Compute a leak chance using the same spawn-weight formula already
//      locked in Part 1 — do not invent a separate Outbreak-specific number.
//   4. On success, determine Twisted-vs-official population mix using the
//      Part 3 population table for that Affinity level.
//   5. Spawn the resulting Pokémon near the player's portal on the HOME
//      WORLD side, sourced from STARTER_WORLDS[chosenId] specifically, so
//      it reads as "leaking through that player's own linked world."
// ---------------------------------------------------------------------------
function computeOutbreakLeak(player) {
  throw new Error("[CER] computeOutbreakLeak() is a stub — see Section 3d comment block. Do not call until World Affinity data exists.");
}
