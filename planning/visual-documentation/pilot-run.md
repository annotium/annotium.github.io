# Visual documentation pilot capture

Run: 2026-11-10 · app source `42c2bb1f` · version `4.16.0+428`

## Capture setup

- Device: iPhone 18 simulator, iOS 27.0 (`iPhone19,2`).
- App surface: real Annotium `DrawingContainer` and editor core rendered by the mobile integration test.
- Host services: Photos, storage, IAP, and export replaced with the app's test adapters.
- Premium: locally seeded fake entitlement for the Dimension Line capture; no purchase or store entitlement was exercised.
- Backgrounds: garage for Arrow and Line Measure; sink repair photo for Loupe; invoice for Blur and Mosaic; user-supplied annotated component photo for Dimension Line.
- Automation: `apps/annotium_mobile/integration_test/arrow_gesture_automation_test.dart`, via `apps/annotium_mobile/test_driver/automation.dart`.

## Captured results

| Tool | Published result | Capture notes |
| --- | --- | --- |
| Arrow | `docs/public/images/tools/arrow/arrow-result.webp` | Selected Arrow from the real tool menu; one 60-move pointer drag. Requested length 222.5 logical px; rendered length 203.9 px; endpoint error under 1 px. |
| Line Measure | `docs/public/images/tools/line-measure/line-measure-result.webp` | Garage door span follows the marketing reference. `2.40 m` is sample text typed into the annotation, not inferred from the photo. Premium was test-seeded. |
| Dimension Line | `docs/public/images/tools/dimension-line/dimension-line-result.jpg` | User-supplied reference image used as-is; the dimension marks and values are already part of the photo, not an Annotium capture. |
| Loupe | `docs/public/images/tools/loupe/loupe-result.webp` | Manual capture from the running iPhone 18 app; the lens magnifies a plumbing connection and its pointer tail leads back to the source. |
| Blur | `docs/public/images/tools/blur/blur-result.webp` | Manual capture in the running iPhone 18 app over the CC0 sample invoice. The selected Blur area softens handwritten line items; selection handles remain visible to show the active effect. |
| Mosaic | `docs/public/images/tools/mosaic/mosaic-result.webp` | Manual capture in the running iPhone 18 app over the CC0 sample invoice. Coarse pixel blocks cover handwritten line items; selection handles remain visible. |
| Callout (Rectangle) | No published result | The element and text were committed and the model assertion passed, but rendered text was blank. The captured empty callout is intentionally excluded. Validate the actual text-entry UI before recapturing. |

Published WebP files are cropped to the editor canvas and resized to 900 px wide. The full simulator PNGs and automation result are in the app repository under `apps/annotium_mobile/build/automation/pilot-2026-11-10/` and should be treated as temporary capture output.

## Limits

These captures verify the editor rendering and selected automation gestures in the test harness. They do not verify the store build, real purchases, photo-library permissions, saving/export, Android, or tablet layouts. Keep the remaining tool rows in `tool-coverage.md` open until each has its own result and interaction capture.

## Manual privacy-effect fixture

`fixtures/invoice-sample-cc0.jpg` is a photographed sample invoice for a manual Blur/Mosaic tryout. Wikimedia Commons describes the personal information as removed and marks the image CC0. It was imported into the iPhone 18 simulator's Photos library and used for the manual Blur capture. Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sz%C3%A1mla_minta.jpg).
