# Kế hoạch documentation Annotium thiên về hình ảnh

Ngày khảo sát: 2026-11-10. App: `/Users/Hoang/Workspace/Repository/hoaquo/annotium`, commit `42c2bb1f`, version nguồn `4.16.0+428`. Website: repo hiện tại, VitePress. Đây là kế hoạch triển khai, chưa phải hướng dẫn đã kiểm chứng trên thiết bị hay xác nhận tính năng trong store build.

## 1. Hướng thiết kế đề xuất

Xây một **visual user guide**: nhìn kết quả → nhìn thao tác → tự làm được. Mỗi tool có minh họa riêng, cùng một hệ thống màu và cách trình bày. Nội dung công khai tiếp tục viết English; kế hoạch nội bộ viết tiếng Việt.

- Khoảng 70–80% diện tích phần hướng dẫn đầu trang dành cho ảnh, là mục tiêu thiết kế để thử trên mobile, không phải tỷ lệ bắt buộc cho mọi trang.
- Mỗi bài mở bằng ảnh kết quả lớn, một câu mô tả lợi ích và nút tới phần thao tác.
- Sau đó là 3–5 bước bằng ảnh, mỗi bước một câu ngắn. Tool phức tạp được tách thành vài tác vụ nhỏ.
- Properties trình bày bằng 2–4 mẫu so sánh trực quan. Giải thích dài để trong phần mở rộng.
- Giữ chữ thật trong HTML để tìm kiếm, dịch và đọc bằng screen reader. Không nhúng toàn bộ hướng dẫn vào bitmap.
- Các trang quyền truy cập, lưu/xuất, Premium và pháp lý cần đủ thông tin để hiểu đúng; không cắt bỏ thông tin chỉ để đạt tỷ lệ ảnh.

## 2. Những gì đã thấy trong hai repo

Website đã có home, Guide, Tools, Workflows, Help, Updates, tìm kiếm local và sidebar. Có ảnh Projects/Photos và ảnh phone/tablet. Tuy nhiên nhiều trang còn `guide-outline`/TODO; có ảnh không đồng nghĩa các bước đã được xác minh. Home hiện thiên về giới thiệu và tải app hơn là dẫn người dùng vào tác vụ.

Danh mục hiện tại chưa bao phủ rõ Circle, Radius, Diameter, Polygon Spotlight và Lasso. Trang measurements chưa đánh dấu Line Measure cần PRO; các nhãn như Obfuscate/Pixelate trong docs cần đối chiếu nhãn UI hiện tại là Blur/Mosaic. Phần Projects xuất hiện cả Guide và Workflows, nên phân vai: Guide = tạo/quản lý; Workflows = một công việc hoàn chỉnh.

`AUTHORING.md` đang trỏ vào vị trí source trước khi app chuyển thư mục và trước khi chuyển localization sang ARB. Khi triển khai cần sửa source map:

| Nguồn kiểm tra | Vị trí hiện tại trong repo app |
| --- | --- |
| Tool catalog, yêu cầu feature | `packages/annotium_editor_core/lib/src/contracts/editor_tool_id.dart` |
| Thứ tự và nhóm menu | `packages/annotium_editor_core/lib/src/contracts/tool_groups.dart` |
| Mapping icon/tooltip mobile | `apps/annotium_mobile/lib/model/iap/constants.dart` |
| Premium và legacy purchases | `apps/annotium_mobile/lib/model/iap/product_manager.dart` |
| Nhãn English | `apps/annotium_mobile/lib/l10n/app_en.arb`, qua `lib/model/text_provider.dart` |
| Tool cố định phone | `apps/annotium_mobile/lib/provider/drawing/floating_menu_provider.dart` |
| Phone / tablet | `apps/annotium_mobile/lib/screen/drawing/widgets/`, `screen/drawing/tablet/` |
| Properties | `apps/annotium_mobile/lib/screen/drawing/widgets/props/` |
| Lasso, giới hạn áp dụng | `apps/annotium_mobile/lib/screen/drawing/widgets/lasso_overlay.dart` |
| Lưu, note, export | `apps/annotium_mobile/lib/screen/drawing/drawing_container.dart` |
| Compose | `apps/annotium_mobile/lib/screen/compose/compose_screen.dart` |

Core catalog và gate ở mobile phải kiểm tra cùng nhau. Lasso có khác biệt cần xác minh: core cho vào/vẽ không gate và gate Crop/Erase, nhưng mobile `ProductManager.lockedTools` liệt kê `ProductId.lasso`. Overlay gate Crop/Erase không đủ chứng minh mobile cho vào/vẽ miễn phí; cần trace entry point phone/tablet và kiểm chứng app trước khi viết docs. Bảng coverage đã đối chiếu membership cả hai nguồn, có ghi chú SKU callout cũ; chưa xác minh restore/enforcement của SKU đó. Không biến việc thấy enum thành lời hứa tính năng đã phát hành. Phân biệt Loupe với canvas zoom; không trình bày Layers placeholder như tính năng dùng được; Rectangle hiện có corner radius, không cần quảng bá tool Rounded Rectangle riêng.

## 3. Bộ ảnh tham chiếu và cách áp dụng

Đã copy nguyên bản 6 PNG vào [references](references/), có [manifest SHA-256](references/manifest.json). Tổng khoảng 44,4 MB (42,4 MiB); nằm ngoài `docs/public` để không đưa toàn bộ ảnh master vào bản deploy.

Hai file `*-v2.png` là tham chiếu chính:

- [Header v2](references/annotium-header-5244x2950-v2.png): ảnh garage lớn bên phải, chữ ngắn bên trái, khoảng trống rộng.
- [Search results v2](references/annotium-search-results-5244x2950-v2.png): ảnh kết quả chiếm ưu thế, annotation làm điểm nhấn.
- Hai concept và hai bản 5244x2950 còn lại lưu để so sánh, không phải sáu ảnh bắt buộc phải dùng trên site.

Ngôn ngữ hình ảnh: charcoal gần `#101215`, trắng, cam gần `#ff750a`; ảnh thực tế, góc bo nhẹ, annotation tương phản mạnh, mỗi ảnh chỉ một ý. Các màu này là đề xuất rút từ ảnh, cần chốt khi làm pilot. Thử chuyển màu brand docs xanh hiện tại sang cam, kiểm tra cả light/dark và độ tương phản.

Ảnh docs cần zoom sát tác vụ hơn poster marketing, giảm headline trong ảnh. Trên mobile, ưu tiên ảnh kết quả không chứa chữ quảng cáo; tiêu đề ở HTML. Không thu nhỏ cả poster desktop khiến người đọc phải zoom để đọc nhãn.

## 4. Cấu trúc nội dung

Giữ VitePress và URL đang có. Home docs nên có một hero thực tế, CTA **Start here / Explore tools**, rồi các thẻ bằng ảnh: Point to a detail, Add an explanation, Measure, Focus, Hide details, Save & share. Link store vẫn có nhưng không lấn lướt đường vào hướng dẫn.

`/tools/overview` trở thành gallery: thumbnail kết quả + tên tool + một câu lợi ích + badge PRO khi cần. Cho phép tìm theo tên và lọc theo mục đích. Dùng các trang nhóm hiện có để so sánh, đồng thời tạo trang từng tool `/tools/<tool-slug>` khi tool đó có nội dung hoàn chỉnh; tránh tạo hàng loạt trang placeholder. Các URL nhóm cũ tiếp tục hoạt động.

Các nhóm biên tập: Lines & measurements; Shapes; Text & callouts; Icons & stamps; Focus & privacy; Freehand & highlight; Images & composition. Nhóm theo mục đích có thể khác menu app, nhưng mỗi bài phải cho biết đúng vị trí tool trong menu. Radius/Diameter thuộc menu Shapes hiện tại dù bài hướng dẫn nằm trong measurements.

Guide bắt đầu bằng một kết quả đơn giản: mở ảnh → arrow → callout → lưu. Tiếp đến là Projects vs Photos, editor phone/tablet, chọn và sửa đối tượng. Workflows dùng chuỗi ảnh hoàn chỉnh: inspection, feedback, privacy và composition. Giữ Help/Premium/Legal dễ tìm.

## 5. Mẫu một trang tool

Thứ tự trên màn hình:

1. Tên đúng UI + một câu kết quả + badge truy cập nếu cần.
2. Ảnh thành phẩm lớn, có thể mở xem kích thước lớn.
3. Strip 3–5 bước: chọn tool → vẽ/đặt → chỉnh → kết quả. Screenshot thật, đánh số thao tác và crop sát vùng liên quan.
4. Properties: các biến thể cạnh nhau, mỗi biến thể một caption.
5. Một mẹo hoặc giới hạn quan trọng, link Undo và 2 tool liên quan.

Mục tiêu bài đơn giản: khoảng 100–180 từ hiển thị chính; bài phức tạp có thêm phần mở rộng. Desktop có thể chia hai cột; mobile xếp từng bước dọc. Không buộc người dùng kéo ngang mới thấy bước cuối. Có tab Phone/Tablet chỉ khi luồng hoặc vị trí điều khiển khác nhau.

Ví dụ Arrow: ảnh garage chỉ vào bản lề → mở đúng nhóm tool và chọn Arrow → kéo từ điểm đầu tới bản lề → thay màu/độ dày/head theo thuộc tính thật → ảnh kết quả. Caption diễn tả hành động và kết quả, không giải thích kiến trúc app.

## 6. Gói minh họa cho mỗi tool

| Asset | Nội dung | Bắt buộc |
| --- | --- | --- |
| `result` | Kết quả riêng của tool trên tình huống thực tế | Mỗi tool |
| `step-01...` | Screenshot app, trạng thái điều khiển và thao tác | Mỗi tool, 3–5 ảnh tùy tác vụ |
| `properties` | So sánh các thuộc tính thật sự có ích | Khi có tùy chỉnh đáng giải thích |
| `before-after` | Cùng một vùng ảnh trước/sau | Focus, privacy, crop, lasso, effects |
| Clip ngắn | Cử chỉ khó hiểu bằng ảnh tĩnh | Tùy chọn; có ảnh fallback và điều khiển phát |

Dùng lại 4 bộ scene để giữ tính nhất quán: garage/công trình; bản vẽ và chi tiết tròn; sơ đồ/screenshot sản phẩm; phiếu công việc có dữ liệu giả. Trong một bài chỉ làm nổi tool đang học. Bài workflow mới phối hợp nhiều tool.

Ảnh AI có thể tạo bối cảnh và ảnh nền. Annotation và UI hướng dẫn phải xuất/chụp từ Annotium để tránh hứa kiểu render hoặc điều khiển app không có. Với ảnh reference chỉ dùng làm moodboard cho đến khi đối chiếu render thật. Các số như 2.40 m là dữ liệu ví dụ do người dùng cung cấp/thiết lập, không suy ra app tự đo vật thể thật từ ảnh.

Brief tái dùng cho ảnh nền: “Ảnh thực tế [scene], ánh sáng tự nhiên, bề mặt [chi tiết] rõ nét, bố cục chừa chỗ cho [annotation], không chữ, không logo; phù hợp crop 16:9 và 4:3. Sau đó annotate trong Annotium bằng [tool], màu cam, nét rõ, chỉ một thông điệp.” Đây là brief sản xuất sau này, chưa chạy tạo ảnh trong đợt lập kế hoạch.

Xem [tool-coverage.md](tool-coverage.md) để theo dõi đủ **50 mục catalog**, gồm cả Pan, Crop, Lasso, Insert Image. Compose/Collage/Stitch và save/export là workflow bổ sung, không nằm trong con số 50.

## 7. Assets và thành phần VitePress

- Giữ master/reference trong `planning/visual-documentation/`; chỉ đưa bản web đã tối ưu vào `docs/public/images/tools/<slug>/` và `images/workflows/<slug>/`.
- Tên file như `arrow-result.webp`, `arrow-step-01-phone.webp`, `arrow-properties.webp`; lưu project mẫu ngoài public để tái xuất khi app thay đổi.
- Ảnh web có bản khoảng 640/1280/1920 px tùy khung; ưu tiên WebP/AVIF cho ảnh thực tế, PNG khi cần giữ nét UI. Mục tiêu ảnh kết quả 150–300 KB, ảnh bước 80–180 KB; chất lượng chữ là điều kiện ưu tiên, không ép nén mù quáng.
- Khai báo kích thước/aspect ratio, responsive sources, lazy-load ảnh ngoài viewport; chỉ ưu tiên tải hero. Không tải cả 50 ảnh lớn ngay khi mở gallery.
- Các component dự kiến: `ToolGallery`, `ToolCard`, `ToolHero`, `VisualSteps`, `PropertyExamples`, `BeforeAfter`, `DeviceTabs`, `ImageZoom`.
- Before/after luôn có cách xem cả hai ảnh khi không dùng kéo; zoom/dialog thao tác được bằng bàn phím và đóng bằng Escape; tôn trọng reduced motion.
- Title, caption, alt text và nhãn PRO là text trong trang. Nội dung chính giữ trong Markdown để local search của VitePress index được; kiểm tra thực tế nếu tách dữ liệu card ra component.

## 8. Thứ tự triển khai và tiêu chí qua từng đợt

| Đợt | Công việc | Điều kiện hoàn tất |
| --- | --- | --- |
| 0 — Chuẩn bị | Cập nhật AUTHORING source map, chốt version app, chuẩn bị scene/project mẫu và danh mục chụp | Mỗi tool có brief, đường dẫn asset dự kiến và trạng thái xác minh |
| 1 — Pilot hình ảnh | Arrow, Callout (Rectangle), Dimension Line, Loupe, cặp Blur/Mosaic | 5 bài mẫu, 6 tool; đủ result, steps, properties/before–after phù hợp; đọc tốt trên phone/tablet |
| 2 — Khung docs | Component, gallery, mẫu trang, home dẫn vào tác vụ, search và badge PRO | Áp dụng pilot vào VitePress; responsive, keyboard và link hoạt động |
| 3 — Người mới | Getting started, Projects/Photos, chọn/chỉnh, lưu/xuất | Người dùng theo ảnh hoàn tất mở → annotate → lưu; khác biệt workspace/platform rõ |
| 4 — Phủ tool | Hoàn thiện từng nhóm theo bảng 50 mục; measurements/callouts trước, effects sau | Mỗi mục có ảnh riêng và thao tác đã lặp lại; không dùng ảnh nhóm để đánh dấu hoàn tất |
| 5 — Workflows & phát hành | Compose, Collage/Stitch, notes/PDF, troubleshooting, QA assets | Không còn outline ở bài đã công bố hoàn chỉnh; build và liên kết đạt; cập nhật quy trình bảo trì |

Không chốt lịch theo ngày trước khi biết tốc độ chụp và kiểm chứng 5 bài pilot. Khối lượng phụ thuộc nhiều vào số khác biệt phone/tablet và Android/iOS. Mỗi đợt có thể phát hành phần đã hoàn chỉnh mà giữ trạng thái outline trung thực cho phần còn lại.

## 9. Nghiệm thu và bảo trì

- Lặp lại các bước trên app đúng build; ghi thiết bị, OS, Free/PRO và ngày xác minh. Source scan chỉ hỗ trợ lập danh mục, không thay thế việc này.
- Chụp phone/tablet khi thao tác khác; kiểm tra save/photos permissions trên cả Android và iOS. Phân biệt project editable với ảnh/PDF đã flatten.
- Hiển thị điều kiện PRO trước hành động gated; đối chiếu cả catalog và gate riêng. Không ghi giá cố định.
- Với privacy dùng dữ liệu giả; xem lại ảnh xuất cuối cùng. Với measurement nêu rõ scale/đơn vị và giới hạn, không suy ra độ chính xác vật lý chỉ từ ảnh.
- Kiểm tra trang ở 360/390 px và tablet/desktop; annotation đọc được, không tràn ngang, ảnh mở lớn được; alt text mô tả kết quả có ý nghĩa.
- Chạy `npm run docs:build`, kiểm tra link và ảnh, local search, light/dark, keyboard và thời gian tải gallery. Render/kiểm tra UI sau khi có component thực tế.
- Chỉ bỏ `guide-outline` sau khi trang đạt các điều kiện trên. Mỗi release thay tool/property/gate cần rà lại dòng tương ứng trong coverage và tái chụp ảnh liên quan.

Đợt khảo sát này chỉ thêm kế hoạch, danh mục và ảnh tham chiếu; chưa sửa website public hay nội dung pháp lý.
