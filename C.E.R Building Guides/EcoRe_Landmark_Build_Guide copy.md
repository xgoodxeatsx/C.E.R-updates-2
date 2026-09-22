# Cobblemon: Ecological Resonance — Landmark Build Guide

Covers the four centerpiece structures from the menu art: the World Tree, the waterfall oasis beneath it, the ritual circle with crumbling pillars, and the floating islands. Written for survival-adjacent building with WorldEdit available (creative or a build server) — vanilla-only notes are included where it matters.

A note before you start: don't aim to replicate the painting block-for-block. Minecraft's lighting and atmosphere work completely differently from painted concept art, so a 1:1 recreation will never look like the image no matter how precisely you build it. Aim instead for "unmistakably the same scene, interpreted in blocks" — silhouette, proportion, and color read far more than detail does at screenshot distance.

---

## 0. Scale & Layout Planning

Before placing a single block, decide your footprint. A full scene at "epic fantasy key art" scale is genuinely large:

| Element | Suggested footprint |
|---|---|
| World Tree (trunk + canopy) | ~180–220 blocks tall, ~40–60 block canopy spread |
| Oasis pool beneath the tree | ~50–70 block diameter |
| Ritual circle | ~45–55 block diameter |
| Floating islands | 3–5 islands, ~15–30 blocks each, at varying heights above the main scene |
| Full scene footprint (edge to edge) | ~250–350 blocks |

If that's more than you want to commit to, the trick professional build teams use for key art is **forced perspective**: build only what the camera actually sees, smaller and closer to the lens than it "should" be. You don't need to build the tree at true epic scale if you're going to screenshot it from 100 blocks away — build it at 100–120 blocks tall instead and get closer with the camera. Nobody but you will ever know.

**Recommended build order:** terrain/void carving for the floating islands first (while you have open sky to work in) → ritual circle foundation → World Tree trunk → oasis pool and waterfalls → tree canopy → floating islands' surface detail → final lighting/detail pass on everything.

---

## 1. The Ritual Circle (Restoration Observatory)

This is the most buildable piece — it's clean geometry, not organic shapes, so it's the one place I can hand you literal commands instead of just guidance. It also happens to double as the **Restoration Observatory** already documented in your Master Archive (Part 1, Section 4) — the circular ruin with 18 sockets representing the 18 Affinities. Building this makes it simultaneously key art and an actual in-world structure.

### Layout
Three concentric rings, flat on the ground or on a raised platform:
- **Outer ring (radius ~24–26):** 18 pillars, evenly spaced (one every 20°), each fronted by a small pool.
- **Middle ring (radius ~14–16):** paved walking ring connecting the pillars to the center.
- **Inner dais (radius ~6–8):** raised center platform, the "control point" of the Observatory.

### WorldEdit commands (paste-ready)
Stand at your intended center point, then:

```
//pos1 (mark nothing — use these directly)
//sphere stone_bricks 26 0        (creates the flat outer boundary — actually use the ring method below instead)
```

For actual rings (WorldEdit doesn't have a native "ring" primitive, so use hollow cylinders at 1-block height):

```
//cyl mossy_stone_bricks 26 1        → outer ring floor edge
//cyl stone_bricks 24 1              → fills toward center, repeat with decreasing radius to build up the paved floor
//cyl smooth_stone_slab 8 1          → inner dais surface
```

For the 18 pillars, since WorldEdit doesn't place radially-spaced objects natively, use this trick: build **one pillar and one pool** as a small schematic (via `//copy`), then use `//rotate` and `//paste` 18 times, rotating 20° each time around your center point. Concretely:
1. Build one pillar (see below) at due north of center, radius 24 out.
2. `//pos1` and `//pos2` around just that pillar+pool, `//copy`
3. `//rotate 20`, `//paste` — repeat 17 more times, rotating another 20° each time.

This guarantees perfect even spacing without hand-placing 18 identical structures.

### Pillar design (crumbling)
Each pillar: 7–9 blocks tall, 2×2 or 3×3 cross-section.
- Base material: **stone bricks**, mixed ~30% **cracked stone bricks**, ~15% **mossy stone bricks**, scattered **chiseled stone bricks** as decorative bands every 3rd row.
- **Crumbling top:** don't cap it flat. Manually remove blocks from the top 2–3 rows in a jagged, asymmetric pattern — imagine chunks broken off unevenly, not a clean diagonal cut. Leave 1–2 exposed "rebar-style" details (iron bars poking out, or just rubble at the base) for realism.
- **Vines:** add cave vines or regular vines down one or two faces of each pillar, more on the shaded side.
- **Rubble:** scatter a few stray stone brick/cobblestone blocks and stone brick slabs at the base of each pillar, like fallen debris.

### The 18 pools
One pool per pillar, ~2×2 or 3×3, one block deep, water-filled. This is your chance for a direct tie to your Affinity system: **color each pool's rim to match that Affinity's color** using the appropriate concrete or stained glass (e.g. orange terracotta rim for Fire, blue for Water, tan for Ground) — 18 pools in 18 correct colors around the ring is a strong, thematically-loaded detail that reads clearly even from a distance, and it directly mirrors the 18-badge arc in your logo.

### Vanilla-only alternative (no WorldEdit)
Use a Minecraft circle-block-chart (search "Minecraft circle generator" — free web tools exist that output exact block coordinates for any radius) for the three ring radii above, and place the 18 pillars manually using basic trigonometry: pillar *n*'s offset from center is `(radius × cos(20° × n), radius × sin(20° × n))`. It's more manual labor but fully achievable.

---

## 2. The World Tree

This is the hardest element — organic, huge, and needs to read as "ancient and magical" rather than "big brown blob."

### Trunk
- Height: 60–90 blocks of trunk before the canopy starts.
- Cross-section: don't build a perfect cylinder — tree trunks taper and have irregular buttressing roots. Start wide at the base (12–16 block diameter) and taper to ~6–8 blocks by the top of the trunk.
- **Technique:** WorldEdit's `//brush sphere` with a large radius (6–10) dragged upward in overlapping strokes gives a much more organic trunk than `//cyl`. Follow with a smaller brush to carve irregular gouges and bark texture into the surface.
- Material: **dark oak log** as the base, with **spruce log** or **stripped dark oak** mixed in for bark-texture variation (~20% mix). Add **mossy cobblestone** or **moss blocks** climbing partway up the north/shaded side.
- **Root buttresses:** at the base, extend 4–6 thick root ridges outward and downward into the ground, each tapering and partially submerging — this is what sells "ancient" more than anything else. Some roots should arch up and over, forming natural archways you can walk under.

### The glowing blue energy veins (signature detail from the art)
This is the detail that makes it read as magical rather than "just a big tree." Two viable approaches:
- **Easier:** carve thin 1-block-wide channels into the bark following the trunk's natural grain lines, and fill with **light blue stained glass**, **sea lantern**, or (best option) **amethyst blocks/small amethyst bud clusters** — amethyst gives you a genuine soft purple-blue glow and clusters read as "crystal veins in bark" extremely well.
- **More advanced:** if you have Ars Nouveau or Create in your pack already (per your Master Archive mod list), both have glowing decorative blocks that would fit even better thematically than vanilla amethyst, since they're already part of your Magic pillar.
Run the veins from the roots up into the lower canopy for continuity — this is what "the tree's light source is coming from inside it" looks like.

### Canopy
- Build at 3–4 different height tiers rather than one giant dome — this matches the layered, slightly asymmetric silhouette in the reference image far better than a single sphere.
- Material mix per tier: **dark oak leaves** as the base (60%), **flowering azalea leaves** (20%) for color variety, **moss carpet** patches on top-facing surfaces, and scattered **glow lichen** or **light blue stained glass panes** tucked between leaf clusters for the "light filtering through" effect.
- Use `//brush sphere leaves radius` in overlapping clusters rather than one huge sphere — 8–12 overlapping spheres of leaves at varying radii (4–10 blocks) reads as a natural canopy silhouette; one giant sphere reads as a lollipop.
- Leave visible gaps between leaf clusters for light rays and canopy depth (don't fully fill in — canopies are never solid).

---

## 3. The Waterfall Oasis Beneath the Tree

### The pool
- Central lake, ~50–70 blocks diameter, irregular natural shoreline (never a perfect circle — vary the edge with small coves and points).
- Depth: 4–8 blocks, deeper toward the center.
- Add **lily pads**, **kelp** or **seagrass**, and a few **prismarine** or mossy stone outcrops breaking the surface for visual interest.

### The waterfalls
- Source them from the tree's root buttresses and from elevated terrain rim around the pool — 3–5 separate falls reads better than one giant one.
- **Technique:** place water source blocks at the top of a drop; Minecraft water automatically cascades down any open vertical face. For a wide waterfall (matching the image), place a horizontal row of 4–8 source blocks rather than one single block.
- Break up long straight drops with 2–3 tiered ledges (a "staircase" waterfall) — this creates the misty, layered look in the reference far better than one uninterrupted drop, and gives you natural spots for small secondary pools partway down.
- Add mossy cobblestone/stone and dripping vegetation at the lip of each drop.

### The mist/atmosphere
Vanilla Minecraft has no real fog/mist blocks you can place. Two honest options:
- **Shader pack** (Complementary Shaders or BSL are the two most common free options) — this is genuinely the single highest-impact thing you can do for the whole scene, not just the oasis. Volumetric fog, god rays through the canopy, and water reflections will do more for the "painterly" feel than any block-placement technique. If your modpack already targets a specific rendering setup, check what's compatible first.
- **Particle-based fake mist (vanilla-legal):** rows of barely-submerged **soul campfires** (smoke without fire damage risk) placed just below the waterline near the base of the falls gives a persistent rising-smoke effect that reads as mist from a distance.

---

## 4. The Floating Islands

### Shaping
- Build these in creative/superflat test area first if you're not confident freehand — irregular floating rock shapes are the easiest element to get wrong.
- **Technique:** `//brush sphere` with a large radius (8–14) for the main mass, then a **second smaller brush pass with random deformation** — WorldEdit's `//brush sphere -h` (hollow) or repeated overlapping smaller spheres carved *out* of the underside — to break up the bottom into an irregular, jagged, "torn away from the earth" silhouette rather than a smooth ball. The underside should look broken, not sculpted.
- Keep the tops relatively flat/gently rolling (that's where soil, grass, and small trees sit) and let the undersides be the irregular rocky mass.

### Materials
- Core: **stone**, **andesite**, **deepslate** mixed for the rocky underside.
- Cap: **grass block** with **dirt** transition layer, then whatever surface detail (grass, flowers, a few trees) fits the scale of the island.
- Root/vine anchors: a few thick **hanging roots** (the actual Minecraft block) or vine chains trailing down from the underside sells the "torn from the ground" read.

### Placement
- Vary height and distance significantly — the reference image has islands at multiple depths, not lined up in a row. Stagger both altitude (30–80 blocks above the main scene) and horizontal distance from camera.
- A couple of small waterfalls pouring off the edge of an island into open air (water flows off any edge and eventually evaporates/disappears at range, which is fine — it reads correctly in a screenshot even though it's not "really" falling anywhere) is a strong, easy detail that's disproportionately effective for how simple it is.

---

## For the Actual Screenshot

Once built: a shader pack, a clear-sky/golden-hour time of day (`/time set day` then wait for late afternoon, or `/time set 4000` for a sunset-adjacent angle), and F1 to hide your HUD before hitting F2. If you want camera movement/cinematic angles beyond what vanilla free-look gives you, a replay/camera mod is worth looking into, but isn't necessary — a well-chosen static angle from a slight elevation (standing on a nearby rise rather than flat ground) will match the reference composition better than eye-level.
