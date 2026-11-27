# Kế hoạch dịch website sang tiếng Trung

Ngày lập kế hoạch 2026-11-27. Trạng thái đề xuất, chưa triển khai bản dịch hoặc cấu hình locale.

## Mục tiêu và phạm vi

Ưu tiên tiếng Trung trước các ngôn ngữ khác. Đợt đầu dự kiến dùng tiếng Trung giản thể, tên hiển thị **简体中文**, mã HTML `zh-CN` và đường dẫn `/zh-CN/`. Đây là giả định triển khai vì yêu cầu hiện tại chưa chọn giản thể hay phồn thể. Nếu chọn phồn thể trước khi triển khai, đổi đồng bộ thư mục, cấu hình và nguồn thuật ngữ.

Giữ tiếng Anh làm nguồn nội dung chính tại các URL hiện có. Dịch nội dung hiện tại, giữ bố cục ưu tiên hình ảnh và các điều kiện truy cập tính năng. Dùng chung ảnh chụp hiện có. Khi mở rộng, tiếng Trung phồn thể có locale riêng `zh-TW` với nhãn **繁體中文**.

## Hiện trạng

- Website dùng VitePress `^2.0.0-alpha.19`, default theme mở rộng và local search.
- Cấu hình điều hướng nằm ở `docs/.vitepress/config.mts`.
- Hero tùy biến nằm ở `docs/.vitepress/theme/index.ts`, hiện có alt text tiếng Anh viết trực tiếp trong mã.
- Nội dung Markdown hiện nằm trong `docs/`, gồm homepage, Guide, Tools, Workflows, Help, Updates và Legal.
- App có nhiều biến thể ARB tiếng Trung. Cần đối chiếu cơ chế lookup và fallback trong `apps/annotium_mobile/lib/l10n/app_localizations.dart` để chọn đúng thuật ngữ UI từ các tệp `app_zh*.arb`.
- Nhiều liên kết Markdown và HTML dùng đường dẫn tuyệt đối như `/guide/...`, `/tools/...`, `/help/...`. Bản dịch phải trỏ tới bài cùng locale.

## Cấu trúc dự kiến

```text
docs/
  index.md                     # English
  guide/                       # English
  tools/                       # English
  workflows/
  help/
  updates/
  legal/
  zh-CN/
    index.md
    guide/
    tools/
    workflows/
    help/
    updates/
    legal/
  public/images/               # Ảnh dùng chung
  .vitepress/
    config.mts
    locales/
      en.ts
      zh-CN.ts
```

Dùng cùng tên file giữa các ngôn ngữ, ví dụ `/tools/arrow` và `/zh-CN/tools/arrow`. Giữ nguyên các URL tiếng Anh đang được chia sẻ. Đường dẫn `/` tiếp tục mở tiếng Anh.

## Đợt 1 — Thuật ngữ và khung website

- [ ] Chốt biến thể tiếng Trung trước khi bắt đầu dịch. Mặc định kế hoạch là giản thể.
- [ ] Chọn nguồn nhãn UI theo lookup thực tế của app và lập glossary gồm tên tool, workspace, hành động, Premium và tên định dạng xuất.
- [ ] Giữ tên thương hiệu Annotium, dùng thuật ngữ sản phẩm nhất quán và không tự dịch khác tên nút đang có trong app.
- [ ] Tách cấu hình English và 简体中文, khai báo `locales.root` và `locales['zh-CN']`.
- [ ] Dịch navbar, sidebar, mục lục, Previous/Next, footer, thông báo 404 và các nhãn trợ năng của theme.
- [ ] Thêm bộ chuyển ngôn ngữ có sẵn của VitePress trên desktop và menu mobile.
- [ ] Khi chuyển ngôn ngữ, giữ bài tương ứng nếu đã có bản dịch. Khi chưa có, chuyển về homepage locale đích. Đối chiếu hành vi của bản VitePress đang cài, bổ sung xử lý fallback nếu cần.
- [ ] Khi đổi ngôn ngữ từ một section, kiểm tra anchor tương ứng. Nếu heading đã dịch làm anchor thay đổi, mở đầu bài để tránh fragment sai.
- [ ] Dịch giao diện local search và xác minh kết quả tìm kiếm theo locale đang đọc.
- [ ] Cho hero tùy biến lấy alt text theo locale. Kiểm tra các nút tải app và liên kết trong homepage khi dựng bản tiếng Trung.

## Đợt 2 — Dịch nội dung

Thứ tự dịch được ưu tiên theo hành trình đọc.

1. Homepage và bảy trang Guide.
2. Tools overview, các trang công cụ riêng và các trang nhóm tool.
3. Workflows, Help và Updates.
4. Privacy và Terms: quyết định không dịch. Bản tiếng Trung luôn liên kết tới `/legal/...` tiếng Anh.

Quy tắc cho mỗi trang

- Dịch title, description, nội dung, caption, alt text và nhãn CTA.
- Giữ điều kiện Premium, số đo mẫu, đơn vị và giới hạn được nêu trong bản gốc.
- Đối chiếu tên thao tác với glossary. Khi ảnh vẫn có UI tiếng Anh, giữ tên tiếng Anh trong ngoặc ở lần nhắc đầu nếu giúp người đọc tìm đúng nút.
- Dùng ảnh chung qua `/images/...`. Chỉ chụp ảnh UI tiếng Trung khi ảnh hiện có gây khó hiểu cho thao tác.
- Cập nhật liên kết nội bộ Markdown, HTML và frontmatter sang `/zh-CN/...` khi trang đích đã được dịch.
- Rà các liên kết section sau khi dịch heading.
- Giữ các TODO nội bộ trong comment, kiểm tra chúng không lộ trong HTML hoặc kết quả tìm kiếm.
- Giữ bố cục ngắn, mỗi ảnh giải thích một thao tác hoặc kết quả.

## Đợt 3 — Rà soát và phát hành

- [ ] Chuyển English → 简体中文 → English từ homepage và bài lồng nhiều cấp.
- [ ] Kiểm tra fallback với bài chưa có bản dịch, liên kết section và tải trực tiếp một URL tiếng Trung.
- [ ] Kiểm tra navbar, sidebar, search và nút tải app trên desktop và mobile.
- [ ] Rà chữ Trung trên light/dark mode, xuống dòng, bảng và chú thích ảnh.
- [ ] Thiết lập `lang`, title và description theo locale. Kiểm tra canonical và hreflang cho các trang đã có cặp bản dịch, chỉ thêm URL thực sự được xuất bản.
- [ ] Kiểm tra ảnh, liên kết và kết quả local search không dẫn nhầm locale.
- [ ] Chạy `npm run docs:build` và preview.
- [ ] Kiểm tra output static có đủ trang `/zh-CN/`, sau đó triển khai theo workflow GitHub Pages hiện có.
- [ ] Sau triển khai, kiểm tra chuyển ngôn ngữ và truy cập trực tiếp trên domain production.

Một locale sẵn sàng phát hành khi các trang trong điều hướng của locale đó đã dịch và rà soát, bộ chọn ngôn ngữ hoạt động ở desktop/mobile, cùng các kiểm tra build và liên kết đạt. Có thể phát hành theo đợt với điều hướng chỉ chứa các trang đã hoàn thành.

## Bảo trì bản dịch

Khi bắt đầu dịch, tạo bảng theo dõi trong thư mục planning với đường dẫn nguồn, đường dẫn dịch, commit nguồn tiếng Anh, trạng thái dịch và ngày rà soát. Mỗi thay đổi nội dung tiếng Anh cần đánh dấu các bản dịch liên quan để cập nhật. Những câu giống nhau trong giao diện website dùng cấu hình locale chung.

Cập nhật AUTHORING.md khi triển khai để ghi nguồn thuật ngữ ARB, quy tắc link theo locale và cách duy trì bản dịch.

## Tài liệu kỹ thuật

- [VitePress internationalization](https://vitepress.dev/guide/i18n)
- [VitePress local search i18n](https://vitepress.dev/reference/default-theme-search#i18n)
