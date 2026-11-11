# Image library and selection notes

This is the working image guide for documentation authors and agents. Use it to select a background that fits the tool and teaching goal, then verify the actual composition in Annotium before publishing. Images under `docs/public/images/tool-scenes/` are clean source scenes; images under `docs/public/images/tools/` are Annotium results or UI captures. Do not treat those two groups as interchangeable.

## Quick selection by task

| Documentation task | First choices | Why / constraint |
| --- | --- | --- |
| Arrow, callout, point to a defect | `exposed-electrical-socket.jpg`, `damaged-wall-rebar.jpg`, `cracked-plaster-wall.jpg`, `closed-garage-door.jpg` | Each has a clear target and enough surrounding context. Keep the arrow tip on the actual detail. |
| Compare or measure a visible span | `closed-garage-door.jpg`, `technician-pipe.jpg`, `pipe-detail.jpg` | Use a straight, visible span. A typed label is illustrative unless the photo includes a calibrated scale; do not claim the app inferred real-world dimensions. |
| Loupe or spotlight | `exposed-electrical-socket.jpg`, `hinge-detail.jpg`, `pipe-detail.jpg`, `technician-pipe.jpg` | Each offers a small feature that the lens or focus region can enlarge. Keep the source point and magnified region easy to relate. |
| Blur or Mosaic | `fixtures/invoice-sample-cc0.jpg` | Handwriting and fields make the effect legible. This is a CC0 sample with personal details removed and some gray redactions already in the source. Keep the raw fixture in planning; publish only a reviewed, annotated capture. |
| Crop, Lasso, Spotlight Polygon | `cracked-plaster-wall.jpg`, `damaged-wall-rebar.jpg`, `exposed-electrical-socket.jpg` | Irregular damaged areas provide natural boundaries. Show the selection before applying the operation when explaining the gesture. |
| Freehand, Highlight, line or curve | `cracked-concrete-wall.jpg`, `cracked-plaster-wall.jpg`, `damaged-wall-rebar.jpg` | Existing cracks and damage provide a line or region to trace. Use a contrasting stroke and keep the target visible. |
| Text, icon, stamp, annotation layout | `blank-clipboard.jpg`, `closed-garage-door.jpg` | The clipboard gives a large blank writing area; the garage has signs and open door panels for labels. The clipboard’s straw background is busy, so keep text on the paper. |
| Radius or Diameter | `exposed-electrical-socket.jpg` (visual example only) | The socket has circular geometry. No scene here supplies a calibrated scale, so any numeric value must be described as sample text. |
| Coordinate axes | None of the current scenes | Use a coordinate grid, plan, or explicit axes scene. Do not use a garage or pipe photo as a substitute for axes. |

## Source scenes

| Image | What is visible | Strong fits | Watch for |
| --- | --- | --- | --- |
| [blank-clipboard.jpg](../../docs/public/images/tool-scenes/blank-clipboard.jpg) | Portrait overhead view of a blank white sheet on a brown clipboard over straw, with a pencil at lower left. | Text boxes, icons, dates, simple composition examples. | The paper is the clean area; avoid placing text over the textured straw. It is a blank prop, not a real form. |
| [closed-garage-door.jpg](../../docs/public/images/tool-scenes/closed-garage-door.jpg) | Portrait, centered garage door in a pale facade, with two small German notices and a lot of wall above. | Arrow and callout targets, horizontal Line Measure span, crop examples. | The signs are small in the full photo. A typed value such as `2.40 m` is an example, not a measured fact. |
| [cracked-concrete-wall.jpg](../../docs/public/images/tool-scenes/cracked-concrete-wall.jpg) | Landscape macro of a rough brown concrete surface with a long, nearly horizontal crack. | Line, freehand, highlight, arrow, close-region effects. | Low contrast and busy texture; choose a vivid annotation and avoid tiny text. |
| [cracked-plaster-wall.jpg](../../docs/public/images/tool-scenes/cracked-plaster-wall.jpg) | Portrait white plaster wall with a long damaged opening exposing brick and woody material. | Arrow, callout, crop/Lasso, Spotlight, freehand tracing. | Strong vertical composition; choose a crop that keeps the full damage and a little surrounding wall. |
| [damaged-wall-rebar.jpg](../../docs/public/images/tool-scenes/damaged-wall-rebar.jpg) | Landscape yellow facade with a broad broken section exposing concrete and dark reinforcement. | Arrow, shape outlines, callout, polygon or freehand selection. | The hole is irregular and dark; keep outlines bright and avoid covering the exposed reinforcement. |
| [electrical-plug.jpg](../../docs/public/images/tool-scenes/electrical-plug.jpg) | Landscape close-up of a black plug held beside a pale wall outlet; both objects are visible against a light background. | Arrow showing where the plug goes, simple labels, circle/shape examples. | The plug and outlet are separate; do not imply that it is connected. No calibrated measurement reference. |
| [exposed-electrical-socket.jpg](../../docs/public/images/tool-scenes/exposed-electrical-socket.jpg) | Landscape close-up of an exposed European wall socket and surrounding plaster. | Arrow, Loupe, Spotlight, circle and diameter geometry, defect callout. | A detailed center can look busy; place arrow tips carefully. Use it as a visual example, not electrical safety advice or a calibrated measurement. |
| [hinge-detail.jpg](../../docs/public/images/tool-scenes/hinge-detail.jpg) | Portrait macro of a metal hinge on weathered wood; shallow depth of field puts the hinge near the lower center-right. | Loupe, Arrow, Spotlight, small-detail callout. | Much of the image is deliberately out of focus; keep the selected hinge in the sharp region. |
| [pipe-detail.jpg](../../docs/public/images/tool-scenes/pipe-detail.jpg) | Landscape, muted close-up of a rusted metal fastener or pipe fitting against concrete, with the clearest detail near center-right. | Loupe, Arrow, Spotlight, short-span dimension illustration. | Dark, low-contrast palette; use a bright stroke. Photo alone does not establish a physical scale. |
| [technician-pipe.jpg](../../docs/public/images/tool-scenes/technician-pipe.jpg) | Landscape under-sink plumbing scene: a worker in a red shirt reaches toward a fitting; blue work light fills the cabinet. | Loupe, Arrow, workflow sequences, callout to the hand or fitting. | The person’s partial face and arm occupy the right side; avoid covering the hand or main fitting. Crop if identity is not relevant. |

## Special references and supplied images

| Image | Intended use | Important context |
| --- | --- | --- |
| [invoice-sample-cc0.jpg](fixtures/invoice-sample-cc0.jpg) | Blur/Mosaic capture fixture. | Wikimedia Commons marks the sample CC0 and says personal information was removed. Gray blocks are already present in the image. Keep it out of the public image library as a raw sample; use a reviewed Annotium capture for documentation. See [pilot-run.md](pilot-run.md) for source. |
| [dimension-line-result.jpg](../../docs/public/images/tools/dimension-line/dimension-line-result.jpg) | User-requested Dimension Line reference, used as-is. | The metal component is already annotated with white/yellow lines and labels (`15.5`, `17.57`, `4.9`, `54.6`). This is not an Annotium capture and is not a blank scene for redrawing dimensions. |
| [Header v2 moodboard](references/annotium-header-5244x2950-v2.png) | Visual direction for the documentation header. | Charcoal field, short white/orange headline on left, large annotated garage image on right. Design reference only, not a tool scene or product screenshot. |
| [Search results v2 moodboard](references/annotium-search-results-5244x2950-v2.png) | Visual direction for a result-led landing page. | Large garage result dominates the layout; concise title and annotation are secondary. Design reference only. |

## Existing Annotium captures

These are finished results or UI examples. Use them to show the tool’s actual rendering; do not feed them back as clean photo backgrounds.

| Capture | Current content |
| --- | --- |
| [Arrow result](../../docs/public/images/tools/arrow/arrow-result.webp) | Full iPhone 18 screen: long red Arrow to an exposed wall socket; a Loupe also remains over the target. |
| [Arrow tool picker](../../docs/public/images/tools/arrow/arrow-tool-picker.webp) | Full editor screen over the plug-and-outlet photo, with the Arrow tool highlighted in teal in the line tools. |
| [Arrow drag step](../../docs/public/images/tools/arrow/arrow-drag-step.webp) | Full editor screen with a selected Arrow from the plug toward the outlet; a Loupe remains visible over the target. |
| [Arrow Properties](../../docs/public/images/tools/arrow/arrow-properties.webp) | Full editor screen with Fill/Stroke/Path, opacity, color choices, and Premium controls unlocked in debug mode. |
| [Callout Rectangle result](../../docs/public/images/tools/callout-rectangle/callout-rectangle-result.webp) | Full editor screen with visible `Check clearance` text and a red pointer aligned to the small yellow garage notice; captured manually after the harness had rendered blank text. |
| [Callout tool picker](../../docs/public/images/tools/callout-rectangle/callout-tool-picker.webp) | Full editor screen with Text tools open and Callout (Rectangle) highlighted over the garage photo. |
| [Callout Properties](../../docs/public/images/tools/callout-rectangle/callout-properties.webp) | Full editor screen with the Text Properties tab open, showing size, auto fit, font, and color controls for `Check clearance`. |
| [Callout Stroke Properties](../../docs/public/images/tools/callout-rectangle/callout-stroke-properties.webp) | Full editor screen with Stroke Properties open for the selected callout, showing outline toggle, width control, and color palette. |
| [Callout Fill Properties](../../docs/public/images/tools/callout-rectangle/callout-fill-properties.webp) | Full editor screen with Fill Properties open for the selected callout, showing fill toggle, opacity, and color palettes. |
| [Callout Oval result](../../docs/public/images/tools/callout-oval-result.webp) | Full iPhone 18 screen with an oval `Check clearance` callout pointing to a hinge on a weathered wooden door. |
| [Cloud Text result](../../docs/public/images/tools/cloud-text-result.webp) | Full iPhone 18 screen with `Review` in a cloud bubble over a blank clipboard on straw; captured with debug Premium access. |
| [Line Measure result](../../docs/public/images/tools/line-measure/line-measure-result.webp) | Garage door span labelled `2.40 m`; the value is sample text, not inferred from the photo. |
| [Loupe result](../../docs/public/images/tools/loupe/loupe-result.webp) | Full screen with a lens over a plumbing connection and a tail back to the source in the sink-repair photo. |
| [Blur result](../../docs/public/images/tools/blur/blur-result.webp) | Full screen showing a selected Blur area across sample-invoice handwriting. |
| [Mosaic result](../../docs/public/images/tools/mosaic/mosaic-result.webp) | Full screen showing coarse Mosaic blocks over sample-invoice handwriting. |

## Selection rules for agents

- Choose by the visible object and composition, not only the filename. Confirm the target is large enough at phone size and leave clear space for the annotation.
- Prefer one source scene per tool example. Reuse a photo only when it teaches a different task or makes a meaningful comparison.
- Keep source scenes separate from app captures. Mark manual references as references and do not describe their existing annotations as Annotium output.
- Never infer physical dimensions from an ordinary photograph. State when labels are typed sample values.
- The scene folder has no per-file source/license manifest in this repo. Before adding a new public reuse, find and record the original source and license. Do not invent provenance.
