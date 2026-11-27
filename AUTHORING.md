# Annotium User Guide authoring

The published documentation source lives in `docs/`. VitePress builds it into
the site.

## Add a topic

1. Copy `templates/topic.md` to the appropriate folder under `docs/`.
2. Use a short kebab-case filename, such as `crop-an-image.md`.
3. Replace the title, description, steps, and screenshot TODO.
4. Add the page to `docs/.vitepress/config.mts` in the correct sidebar.
5. Add screenshots under `docs/public/images/<topic>/` and reference them as
   `/images/<topic>/<filename>.png`.
6. Run `npm run docs:build` and fix every broken link before publishing.

Track pending verification in a `<!-- TODO(verify): … -->` comment. Remove the
comment after checking the instructions and screenshots against the current app.

## Writing rules

- Write for users. Do not mention Dart classes, providers, or implementation
  details.
- Use the exact English labels from `assets/translations/en.json` in the app
  repository.
- Put one action in each numbered step and state the visible result.
- Explain **Projects** versus **Photos** whenever saving behavior matters.
- Mention Premium before the first gated step.
- Do not describe **Layers** as available; its tablet control is currently a
  placeholder.
- Do not call the Loupe annotation tool canvas zoom.
- Never include real personal data in screenshots of privacy tools.
- Do not promise a fixed price. Store price and currency vary by region.

## Definition of done for one topic

- Steps were repeated in the current app on the relevant phone or tablet UI.
- Android/iOS and Projects/Photos differences are documented where applicable.
- Premium requirements are visible before gated actions.
- Screenshots are current, consistent, and have useful alt text.
- Related links work and `npm run docs:build` succeeds.
- The verification comment has been resolved.

## App source map

- Workspaces: `lib/screen/gallery/gallery_handle_widget.dart`
- Projects: `lib/screen/projects/projects_screen.dart`
- Photos: `lib/screen/gallery/photos/gallery_scafford_widget.dart`
- Phone editor: `lib/screen/drawing/widgets/drawing_controls.dart`
- Tablet editor: `lib/screen/drawing/tablet/`
- Tool groups: `lib/model/iap/constants.dart`
- Tool and feature catalog: `lib/core/editor/editor_tool_id.dart`
- Properties: `lib/screen/drawing/widgets/props/`
- Notes and export: `lib/screen/drawing/drawing_container.dart`
- Settings: `lib/screen/help/view/workspace_widget.dart`
- UI labels: `assets/translations/en.json`

The public guide is currently English. Keep `/docs` as the English source of
truth. When localization begins, translate only completed English topics and
use a separate VitePress locale tree rather than mixing languages in one page.

## Localization (zh-CN)

- Simplified Chinese lives in `docs/zh-CN/` with the same filenames as English.
  Locale config is in `docs/.vitepress/locales/`.
- UI terms come from the app's `app_zh_CN.arb` (the zh-CN lookup target in
  `app_localizations.dart`). Show the English label in parentheses at first
  mention because screenshots remain English.
- Internal links in translated pages point to `/zh-CN/...`. `/legal/...` stays
  English until the legal pages are reviewed.
- When a translated heading is linked by fragment, give it an explicit anchor
  that matches the English one, for example `## 裁剪 {#crop}`.
- When an English page changes, update its `docs/zh-CN/` counterpart.

Français (`docs/fr/`, locale `fr`) suit les mêmes règles ; les termes d’interface
viennent de `app_fr.arb`.

Español (`docs/es/`, locale `es`) sigue las mismas reglas; los términos de la
interfaz vienen de `app_es.arb`.

Português do Brasil (`docs/pt-BR/`, locale `pt-BR`) segue as mesmas regras; os
termos da interface vêm de `app_pt.arb`.

Русский (`docs/ru/`, locale `ru`): те же правила; термины интерфейса берутся из
`app_ru.arb`.
