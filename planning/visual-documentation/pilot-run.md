# Visual documentation pilot capture

Run: 2026-11-10 · app source `42c2bb1f` · version `4.16.0+428`

## Capture setup

- Device: iPhone 18 simulator, iOS 27.0 (`iPhone19,2`).
- App surface: real Annotium `DrawingContainer` and editor core. Arrow and Line Measure result captures used the integration harness; later Arrow, Loupe, Blur, and Mosaic screens were captured manually in the running app.
- Host services: Photos, storage, IAP, and export were replaced with test adapters in harness captures.
- Premium: Arrow Properties was captured with debug-only `FORCE_PREMIUM=true`; no purchase or store entitlement was exercised.
- Backgrounds: exposed electrical socket for Arrow; garage for Line Measure; sink repair photo for Loupe; invoice for Blur and Mosaic; user-supplied annotated component photo for Dimension Line.
- Automation: `apps/annotium_mobile/integration_test/arrow_gesture_automation_test.dart`, via `apps/annotium_mobile/test_driver/automation.dart`.

## Captured results

| Tool | Published result | Capture notes |
| --- | --- | --- |
| Arrow | `docs/public/images/tools/arrow/arrow-result.webp`; `docs/public/images/tools/arrow/arrow-tool-picker.webp`; `docs/public/images/tools/arrow/arrow-drag-step.webp`; `docs/public/images/tools/arrow/arrow-properties.webp` | Result image is the manual full-screen capture from the running iPhone 18 app: a long red Arrow to an exposed wall socket, with a Loupe visible over the target. Tool picker image shows Arrow selected over the plug-and-outlet scene. Drag step shows the selected Arrow running from the plug toward the outlet, with the existing Loupe visible. Properties image shows Fill/Stroke/Path, opacity, colors, and unlocked style controls under debug-only `FORCE_PREMIUM=true`. The separate harness result remains in the app repo's pilot output. |
| Line Measure | `docs/public/images/tools/line-measure/line-measure-result.webp` | Garage door span follows the marketing reference. `2.40 m` is sample text typed into the annotation, not inferred from the photo. Premium was test-seeded. |
| Dimension Line | `docs/public/images/tools/dimension-line/dimension-line-result.jpg` | User-supplied reference image used as-is; the dimension marks and values are already part of the photo, not an Annotium capture. |
| Loupe | `docs/public/images/tools/loupe/loupe-result.webp` | Manual capture from the running iPhone 18 app; the lens magnifies a plumbing connection and its pointer tail leads back to the source. |
| Blur | `docs/public/images/tools/blur/blur-result.webp` | Manual capture in the running iPhone 18 app over the CC0 sample invoice. The selected Blur area softens handwritten line items; selection handles remain visible to show the active effect. |
| Mosaic | `docs/public/images/tools/mosaic/mosaic-result.webp` | Manual capture in the running iPhone 18 app over the CC0 sample invoice. Coarse pixel blocks cover handwritten line items; selection handles remain visible. |
| Callout (Rectangle) | No published result | The element and text were committed and the model assertion passed, but rendered text was blank. The captured empty callout is intentionally excluded. Validate the actual text-entry UI before recapturing. |

The Line Measure WebP is cropped to the editor canvas. Arrow, Loupe, Blur, and Mosaic are full-screen simulator captures; Dimension Line is a user-supplied JPG reference. The original harness screenshots and automation result are in the app repository under `apps/annotium_mobile/build/automation/pilot-2026-11-10/` and should be treated as temporary capture output.

## Limits

These captures verify the editor rendering and selected automation gestures in the test harness. They do not verify the store build, real purchases, photo-library permissions, saving/export, Android, or tablet layouts. Keep the remaining tool rows in `tool-coverage.md` open until each has its own result and interaction capture.

## Manual privacy-effect fixture

`fixtures/invoice-sample-cc0.jpg` is a photographed sample invoice for a manual Blur/Mosaic tryout. Wikimedia Commons describes the personal information as removed and marks the image CC0. It was imported into the iPhone 18 simulator's Photos library and used for the manual Blur capture. Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sz%C3%A1mla_minta.jpg).
