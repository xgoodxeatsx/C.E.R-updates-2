# Cobblemon: Ecological Resonance — Landmark Build Guide (Full Scene, 6 Zones)

Alternate version of the build guide, covering the complete scene rather than the four-zone subset: the World Tree, the ritual plaza, the waterfall/river valley, the floating islands, the town, and the ruins/bridges connecting everything. Organized by zone breakdown → scale/proportions → material palettes → build order → tool guidance, with the same caveat as before: aim for "unmistakably the same scene in blocks," not a literal 1:1 recreation — Minecraft's lighting works too differently from painted concept art for that to ever fully land.

---

## 1. Zone Breakdown

Six distinct zones, each with its own character:

1. **The World Tree** — the central landmark; ancient, glowing, magical.
2. **The Ritual Plaza** — the circular ruin with 18 pillars and pools (your Restoration Observatory).
3. **The Waterfall/River Valley** — the water system connecting everything, flowing from the tree's roots down through the scene.
4. **The Floating Islands** — scattered elevated landmasses framing the sky.
5. **The Town** — the restored settlement on one side, warm and lived-in.
6. **The Ruins & Bridges** — the connective tissue: crumbling walls, overgrown fragments, and the bridges tying the town, plaza, and valley together across the river.

---

## 2. Scale & Proportions

| Zone | Suggested footprint | Notes |
|---|---|---|
| World Tree | ~180–220 blocks tall, 40–60 block canopy spread | The visual anchor — everything else should feel smaller than it |
| Ritual Plaza | ~45–55 block diameter | Flat or gently raised, near the tree's base |
| Waterfall/river valley | ~150–250 blocks long, winding | Runs from the tree's base through the whole scene toward the town |
| Floating islands | 3–5 islands, 15–30 blocks each | Staggered heights 30–80 blocks above the main scene |
| Town | ~80–100 block cluster | 10–20 small-to-medium buildings along the riverbank |
| Ruins & bridges | Distributed throughout | 2–4 bridges (15–40 blocks each) + scattered wall/pillar fragments linking zones visually |
| **Full scene footprint** | **~300–400 blocks edge to edge** | Use forced perspective (see below) if this is more than you want to commit to |

**Forced perspective reminder:** you don't need true epic scale if your camera angle is close. Build everything ~30–40% smaller than the table above and shoot from nearer to the subject — the screenshot won't reveal the difference, and it saves a large amount of build time.

---

## 3. Material Palettes by Zone

| Zone | Primary materials | Accent/detail materials |
|---|---|---|
| World Tree | Dark oak log (trunk), dark oak leaves (canopy) | Stripped dark oak, spruce log (bark variation), amethyst blocks/clusters (glow veins), moss block, flowering azalea leaves, glow lichen |
| Ritual Plaza | Stone bricks, mossy stone bricks | Cracked stone bricks, chiseled stone bricks, smooth stone slabs (dais), 18 colors of concrete/terracotta (pool rims, one per Affinity), vines |
| Waterfall/river valley | Water source blocks, stone | Mossy cobblestone, prismarine (submerged accents), lily pads, kelp/seagrass, soul campfire (mist effect) |
| Floating islands | Stone, andesite, deepslate (underside mass) | Grass block, dirt, hanging roots, assorted flowers/small trees, vines |
| Town | Oak/spruce planks and logs, cobblestone (foundations) | Stone brick (older buildings), lanterns/glowstone behind glass (lit windows), hay bales (thatch-style roofing), fences, flower pots |
| Ruins & bridges | Stone bricks (matching plaza's crumbling mix) | Cobblestone, andesite (older/rougher fragments), oak planks + fences (simple bridges), moss, vines |

Keeping the ritual plaza and the ruins/bridges on the *same* stone-brick crumbling palette (cracked/mossy/chiseled mix) is what visually ties them together as "the same lost civilization" rather than reading as unrelated structures — worth being consistent about that mix ratio across both zones.

---

## 4. Suggested Build Order

**Phase 1 — Foundation & terrain** (do all large-scale shaping first, while you have full access to open space):
1. Carve the void/undersides for the floating islands and rough in their main masses.
2. Terrace and carve the river valley's terrain — the bed, banks, and elevation changes for the waterfall drops.
3. Flatten/level the ritual plaza's building pad and the town's building pads.

**Phase 2 — Major structures:**
4. World Tree trunk and root buttresses.
5. Ritual plaza rings, pillars, and pools (see Section 6 for exact commands).
6. Bridge structures connecting town ↔ plaza ↔ valley banks.
7. Town building shells (walls and roofs, unpainted/undetailed).

**Phase 3 — Detail pass** (this is where the scene comes alive — don't rush it):
8. World Tree canopy, glow veins, and root archway detailing.
9. Waterfalls, pool vegetation, and mist effects.
10. Crumbling detail on plaza pillars and ruin fragments (vines, moss, rubble).
11. Town interior lighting, window glow, garden/flower detailing, paths.
12. Floating island surface planting and root/vine anchors.

Building in this order means you're never blocked waiting on a zone that isn't finished yet, and the detail pass — the highest-leverage phase for how the final screenshot actually looks — happens last, once every zone already exists to react to.

---

## 5. Tool Guidance

**WorldEdit — biggest wins:**
- Large terrain shaping (river valley carving, floating island masses): `//brush sphere` in overlapping strokes, far faster and more organic-looking than manual placement.
- The ritual plaza's rings: hollow `//cyl` commands (see Section 6).
- Copy/paste symmetry: build **one** plaza pillar+pool, **one** bridge arch segment, or **one** town building, then `//copy`, `//rotate`, and `//paste` repeatedly rather than hand-building repeated elements from scratch.

**Structure blocks — best for:**
- Saving your "template" pillar, house, or bridge segment as a reusable structure once you're happy with it, so later variations (a slightly different house, a second bridge) start from a known-good base instead of freehand each time.

**Where an existing community tutorial will serve you better than my written instructions:**
- **The World Tree** — "giant fantasy tree" builds are one of the most common tutorial topics on Minecraft build YouTube; a video tutorial showing brush technique in real time will teach organic canopy shaping faster than prose can.
- **Floating islands** — equally well-covered; search "Minecraft floating island tutorial" for real-time WorldEdit brush technique.
- **Stone arch bridges** — very well-covered; the arch-curve math is fiddly to describe in text but trivial to copy from a video showing the block pattern directly.
- **Fantasy village/town builds** — extremely well-covered, including specific timber-frame and thatched-roof techniques that are much easier to see than read.

**Where you're on your own (no ready template exists):** the **ritual plaza's 18-Affinity-colored pool ring** is specific enough to your project that no tutorial will match it — that's the one genuinely original piece of geometry here, which is exactly why Section 6 below gives you exact commands for it rather than pointing you elsewhere.

---

## 6. Ritual Plaza — Exact WorldEdit Commands

(Same content as the first guide's Section 1, included here so this document stands alone as the complete six-zone reference.)

### Layout
Three concentric rings: outer ring (radius ~24–26) with 18 pillars and pools, middle paved ring (radius ~14–16), inner raised dais (radius ~6–8).

### Commands
Stand at your intended center point:

```
//cyl mossy_stone_bricks 26 1        → outer ring floor edge
//cyl stone_bricks 24 1              → paved floor, repeat with decreasing radius to fill toward center
//cyl smooth_stone_slab 8 1          → inner dais surface
```

For the 18 evenly-spaced pillars (WorldEdit has no native radial-array command):
1. Build one pillar + pool at due north, 24 blocks out from center.
2. `//pos1` / `//pos2` around just that piece, `//copy`.
3. `//rotate 20`, `//paste` — repeat 17 more times (18 total placements, 20° apart), always rotating around your original center point.

### Pillar design
7–9 blocks tall, 2×2 or 3×3 cross-section. Stone bricks with ~30% cracked stone bricks, ~15% mossy stone bricks, chiseled stone bricks as decorative bands every 3rd row. Remove the top 2–3 rows unevenly for a crumbled look rather than a flat cap. Vines on the shaded face, scattered rubble at the base.

### The 18 pools
One pool per pillar, 2×2 or 3×3, one block deep. Rim each pool in the concrete/terracotta color matching its Affinity (orange for Fire, blue for Water, tan for Ground, etc.) — this ties the plaza directly to the 18-badge arc in your logo and gives the structure real thematic weight beyond just being decorative ruins.

### Vanilla-only alternative (no WorldEdit)
Use a free online Minecraft circle-block-chart for the three ring radii, and place the 18 pillars manually using `(radius × cos(20° × n), radius × sin(20° × n))` for pillar *n*'s offset from center.
