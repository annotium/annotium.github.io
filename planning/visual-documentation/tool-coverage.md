# Danh mục minh họa từng tool

Snapshot 2026-11-10 · app source `42c2bb1f`, version `4.16.0+428`.

50 mục trong `kEditorToolCatalog`: mỗi mục có ảnh kết quả riêng và strip thao tác. Dùng chung ảnh nền được; một ảnh nhóm không thay thế minh họa riêng. Brief dưới đây là mục tiêu sản xuất, phải điều chỉnh theo render và thao tác thật khi chụp app.

Nhãn English lấy từ `apps/annotium_mobile/lib/l10n/app_en.arb` qua `TextProvider`. Đã xác nhận key `tooltipdrag`: "Pan" (ARB dòng 322), getter `TextProvider.tooltipDrag` và mapping `ProductId.drag: t.tooltipDrag` trong `model/iap/constants.dart`. `select` là ID core; đây là mapping nhãn mobile, chưa xác minh tương đương hành vi Pan/chọn đối tượng trên từng UI.

**Đã đối chiếu core + mobile lockedTools** cho cả 50 mục: cột core ghi feature từ `kEditorToolCatalog`; cột mobile chỉ ghi membership trong `ProductManager.lockedTools`. Hai nguồn đồng ý về membership cho 49 mục; Lasso là ngoại lệ cần xác minh gate mobile. Membership không chứng minh entry point thực thi gate: chưa trace toàn bộ enforcement hay chạy app. Move/Open/Close và các thao tác riêng vẫn phải kiểm tra. Parallelogram hiện không gate ở hai danh sách này.

**Lasso:** core cho vào/vẽ không gate và gate Crop/Erase; mobile liệt kê `ProductId.lasso` trong lockedTools. Overlay có gate khi áp dụng. Không viết lời hứa vào/vẽ miễn phí trên mobile trước khi xác minh entry point phone/tablet và app thực tế.

**Legacy purchases:** `ProductManager` vẫn đăng ký SKU callout đã ngừng bán (`ProductId.textPointer`), với `textPointerRoundRect`, `textPointerOval`, `burstText` trong danh sách unlock. Vì vậy PRO trong bảng là yêu cầu catalog, không phải khẳng định PRO là đường sở hữu duy nhất. Chưa xác minh restore/enforcement của SKU cũ; cần kiểm tra trước khi mô tả quyền của người mua cũ. `textPointerRoundRect` không gate ở hai danh sách hiện tại dù vẫn thuộc SKU cũ.

**Trạng thái chung:** có 6 ảnh kết quả chụp từ editor trên iPhone 18 simulator: Arrow, Line Measure, Dimension Line, Loupe, Blur và Mosaic. Garage dùng Line Measure theo ảnh reference; Dimension Line chuyển sang ảnh đường ống. Callout chưa có ảnh dùng được: simulator tạo được khung và lưu text trong model nhưng phần chữ không hiện trên canvas, nên không xuất bản ảnh đó. Cả 50 mục chưa được xác minh đầy đủ trên app phát hành hoặc trên Android/tablet. Chi tiết lần chạy và điều kiện test nằm trong [pilot-run.md](pilot-run.md).

Trang đích là nhóm biên tập, không phải menu app. Radius/Diameter thuộc menu Shapes nhưng hướng dẫn nằm trong measurements.

| ID nguồn | Nhãn English hiện tại | Trang đích dự kiến | Truy cập ở core catalog / ngoại lệ | Mobile lockedTools đã đối chiếu | Brief ảnh kết quả riêng |
| --- | --- | --- | --- | --- | --- |
| `select` | Pan | `guide/editing-basics` | Không gate ở catalog | Không có trong lockedTools; khớp core | Arrow đang được chọn: hiện handles, kéo thân sang vị trí mới và kéo endpoint; thêm cặp khung Pan dịch viewport, phân biệt với dịch đối tượng. |
| `crop` | Crop | `tools/images-compose` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh garage có mép thừa: khung crop giữ cửa và bỏ phần đường; đặt ảnh gốc, vùng crop và kết quả cạnh nhau. |
| `lasso` | Lasso | `tools/images-compose` | Core: vào/vẽ không gate, Crop/Erase gated; mobile: có trong lockedTools — cần xác minh gate mobile | Có trong lockedTools; khác core, chưa xác minh enforcement | Vẽ vòng tự do quanh một dụng cụ; hai kết quả riêng Crop giữ phần trong và Erase xóa phần trong, kèm vùng chọn trước khi áp dụng. |
| `line` | Line | `tools/lines-arrows-measurements` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh tường gạch: đoạn thẳng cam bám một mép cần kiểm tra, làm rõ hai endpoint và độ dày nét. |
| `curve` | Curve | `tools/lines-arrows-measurements` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh đường ống uốn: đường cong cam theo đoạn uốn; khung chỉnh sửa hiện điểm điều khiển và kết quả cong. |
| `freeHand` | Free Draw | `tools/freehand-highlight` | Không gate ở catalog | Không có trong lockedTools; khớp core | Sơ đồ mặt bằng: một nét vẽ tay liên tục chỉ lộ trình quanh chướng ngại, giữ hình dạng tự do. |
| `arrow` | Arrow | `tools/lines-arrows-measurements` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh garage: một mũi tên cam chỉ đúng bản lề; ảnh bước hiện điểm bắt đầu và điểm kết thúc. |
| `connector` | Connector | `tools/lines-arrows-measurements` | Không gate ở catalog | Không có trong lockedTools; khớp core | Sơ đồ hai thiết bị: nối hai điểm bằng connector; hiện các điểm điều chỉnh tuyến nối trong khung thao tác. |
| `leaderLine` | Leader Line | `tools/lines-arrows-measurements` | PRO / professionalMeasurements | Có trong lockedTools; khớp core | Ảnh van: leader line dẫn từ chi tiết nhỏ ra vùng trống; hiện các đoạn dẫn và điểm neo, dùng nhãn nếu UI hỗ trợ. |
| `dimensionLine` | Dimension Line | `tools/lines-arrows-measurements` | PRO / professionalMeasurements | Có trong lockedTools; khớp core | Ảnh thợ sửa ống: đo đoạn ống nằm ngang; kéo rail lên khỏi ống, nhãn mẫu 18 cm. |
| `tickMeasure` | Tick Measure | `tools/lines-arrows-measurements` | PRO / professionalMeasurements | Có trong lockedTools; khớp core | Bản vẽ thanh vật liệu: tick measure dọc một cạnh; phóng to dấu tick và nhãn theo render thực tế. |
| `lineMeasure` | Line Measure | `tools/lines-arrows-measurements` | PRO / professionalMeasurements | Có trong lockedTools; khớp core | Cửa garage: Line Measure kéo ngang gần hết bề rộng cửa, hai đầu mũi tên và nhãn mẫu 2.40 m như ảnh reference; giá trị nhập tay, chưa scale. |
| `angleMeasure` | Angle Measure | `tools/lines-arrows-measurements` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh bản lề mở: hai nhánh bám hai cạnh, cung góc và giá trị góc đọc được ở giao điểm. |
| `rectangle` | Rectangle | `tools/shapes` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh tấm tường: rectangle khoanh một vết xước; so sánh góc vuông và corner radius của cùng một rectangle. |
| `oval` | Oval | `tools/shapes` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh vết ố dài trên trần: oval ngang ôm vùng lỗi; giữ rõ tỷ lệ hai trục. |
| `circle` | Circle | `tools/shapes` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh đầu bu-lông nhìn thẳng: circle đồng tâm khoanh đầu bu-lông; đối chiếu với oval để thấy hình tròn. |
| `radiusMeasure` | Radius | `tools/lines-arrows-measurements` | PRO / professionalMeasurements | Có trong lockedTools; khớp core | Ảnh miệng ống tròn nhìn thẳng: Radius từ tâm tới vành, nhãn bán kính mẫu; mở tool từ menu Shapes. |
| `diameterMeasure` | Diameter | `tools/lines-arrows-measurements` | PRO / professionalMeasurements | Có trong lockedTools; khớp core | Cùng ảnh miệng ống tròn: Diameter đi qua tâm từ vành này sang vành kia, nhãn đường kính mẫu; mở từ Shapes. |
| `triangle` | Triangle | `tools/shapes` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh góc tấm kim loại: triangle đánh dấu vùng góc cần chú ý, khung chỉnh sửa hiện ba đỉnh. |
| `polygon` | Polygon | `tools/shapes` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh mảng bong sơn bất quy tắc: polygon nhiều đỉnh bám biên vùng lỗi, hiện các đỉnh trong bước chỉnh. |
| `arc` | Arc | `tools/shapes` | PRO / advancedShapes | Có trong lockedTools; khớp core | Ảnh mặt bích: arc cam theo một phần vành tròn; phóng to hai đầu cung và vùng chỉnh theo UI. |
| `parallelogram` | Parallelogram | `tools/shapes` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh tấm panel nghiêng: parallelogram ôm mặt panel, làm rõ hai cặp cạnh song song và handles chỉnh. |
| `coordinate` | Coordinate | `tools/lines-arrows-measurements` | PRO / advancedShapes | Có trong lockedTools; khớp core | Sơ đồ tọa độ nền sạch: Coordinate đặt gốc và hai trục tại một điểm tham chiếu; phóng to nhãn/trục đúng render app. |
| `donut` | Donut | `tools/shapes` | PRO / advancedShapes | Có trong lockedTools; khớp core | Ảnh mặt bích nhìn thẳng: donut đánh dấu vành giữa lỗ tâm và mép ngoài; thể hiện rõ khoảng rỗng ở giữa. |
| `highlight` | Highlight | `tools/freehand-highlight` | Không gate ở catalog | Không có trong lockedTools; khớp core | Screenshot checklist giả: highlight một dòng chữ, vẫn đọc được chữ bên dưới; so sánh độ trong suốt. |
| `text` | Text | `tools/text-callouts` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh kiểm tra tường: chữ Check clearance đặt trong vùng trống, không hộp hay đường dẫn; so sánh font/size. |
| `roundRectText` | Rounded Text Box | `tools/text-callouts` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh kiểm tra: Check clearance trong hộp chữ bo góc, thể hiện padding, nền và viền theo thuộc tính thật. |
| `ovalText` | Oval Text Box | `tools/text-callouts` | Không gate ở catalog | Không có trong lockedTools; khớp core | Cùng ảnh kiểm tra: Check clearance trong hộp oval, đủ khoảng trống để đọc nhãn và thấy đường bao. |
| `textPointerRoundRect` | Callout (Rectangle) | `tools/text-callouts` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh garage: hộp callout chữ nhật Check clearance với đường dẫn tới bản lề; hiện handles hộp và đầu chỉ. |
| `textPointerOval` | Callout (Oval) | `tools/text-callouts` | PRO / calloutShapes | Có trong lockedTools; khớp core | Cùng bản lề: callout oval Check clearance nối tới điểm cần chú ý; so sánh riêng với bản chữ nhật. |
| `cloudText` | Cloud Text | `tools/text-callouts` | PRO / advancedShapes | Có trong lockedTools; khớp core | Ảnh bản vẽ: nhãn Review trong cloud text, phóng to đường bao mây và phần chữ. |
| `burstText` | Burst Text | `tools/text-callouts` | PRO / calloutShapes | Có trong lockedTools; khớp core | Ảnh khuyết tật: nhãn Check trong burst text; thể hiện đường bao tia rõ ở kích thước mobile. |
| `thoughtText` | Thought Bubble | `tools/text-callouts` | PRO / advancedShapes | Có trong lockedTools; khớp core | Ảnh phương án thiết kế: nhãn Alternative trong thought bubble, làm rõ chuỗi bóng dẫn tới chi tiết. |
| `icon` | Icon | `tools/icons-stamps` | Không gate ở catalog | Không có trong lockedTools; khớp core | Checklist nghiệm thu giả: đặt một Icon từ picker lên chi tiết; thể hiện kiểu marker/container mà tool render. |
| `textIcon` | Icon with Text | `tools/icons-stamps` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh nhiều điểm kiểm tra: Icon with Text mang số 1; phóng to chữ trong marker và một khung đổi nội dung. |
| `plainIcon` | Plain Icon | `tools/icons-stamps` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh thiết bị: đặt một Plain Icon dấu kiểm; phóng to glyph để phân biệt với marker Icon có container. |
| `dateTime` | Date & Time | `tools/icons-stamps` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh kiểm tra giả: Date & Time với thời điểm mẫu cố định; so sánh hai định dạng hiển thị được UI hỗ trợ. |
| `location` | Location | `tools/icons-stamps` | PRO / advancedShapes | Có trong lockedTools; khớp core | Ảnh hiện trường giả: Location dùng địa điểm mẫu; hiện stamp và bước cấp quyền/chọn thông tin theo UI, không GPS cá nhân. |
| `loupe` | Loupe | `tools/focus-privacy` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh vết nứt nhỏ: Loupe phóng to đúng vùng nứt trong lens; hiển thị nguồn/lens và thay đổi tỷ lệ. |
| `spotlight` | Spotlight | `tools/focus-privacy` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh panel lỗi: Spotlight cô lập chi tiết nhỏ, vùng ngoài tối đi; dùng hình vùng đúng tool thực tế. |
| `spotlightRect` | Spotlight (Rectangle) | `tools/focus-privacy` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh tủ điều khiển: Spotlight (Rectangle) giữ sáng một nhãn máy hình chữ nhật, ngoài vùng bị làm tối. |
| `spotlightPolygon` | Spotlight (Polygon) | `tools/focus-privacy` | PRO / advancedShapes | Có trong lockedTools; khớp core | Ảnh vùng lỗi góc cạnh: Spotlight (Polygon) giữ sáng biên nhiều đỉnh; hiện các đỉnh khi chỉnh. |
| `obfuscate` | Blur | `tools/focus-privacy` | Không gate ở catalog | Không có trong lockedTools; khớp core | Phiếu công việc hoàn toàn giả: Blur che một mã giả; ảnh trước–sau cùng crop và mẫu thay đổi cường độ. |
| `pixelate` | Mosaic | `tools/focus-privacy` | Không gate ở catalog | Không có trong lockedTools; khớp core | Cùng phiếu giả: Mosaic che mã bằng ô pixel; phóng to ô và so sánh hai kích thước ô. |
| `crystallize` | Crystallize | `tools/focus-privacy` | PRO / advancedPixelEffects | Có trong lockedTools; khớp core | Ảnh vật liệu mẫu: Crystallize trên một vùng riêng; phóng to kết cấu ô tinh thể cạnh ảnh gốc. |
| `mezzotint` | Mezzotint | `tools/focus-privacy` | PRO / advancedPixelEffects | Có trong lockedTools; khớp core | Cùng ảnh vật liệu: Mezzotint trên một vùng; phóng to hạt/nét đúng kết quả app, đối chiếu ảnh gốc. |
| `pointillize` | Pointillize | `tools/focus-privacy` | PRO / advancedPixelEffects | Có trong lockedTools; khớp core | Cùng ảnh vật liệu: Pointillize trên một vùng; phóng to chấm màu và so sánh tham số thực có trong UI. |
| `colorHalftone` | Color Halftone | `tools/focus-privacy` | PRO / advancedPixelEffects | Có trong lockedTools; khớp core | Cùng ảnh vật liệu: Color Halftone trên một vùng; phóng to mẫu chấm màu cạnh ảnh gốc. |
| `copy` | Copy Region | `tools/images-compose` | Không gate ở catalog | Không có trong lockedTools; khớp core | Ảnh mặt tường: Copy Region lấy một mảng chi tiết, đặt bản sao cạnh vùng nguồn; hiện khung chọn, confirm và kết quả. |
| `insertedImage` | Insert Image | `tools/images-compose` | PRO / insertedImages | Có trong lockedTools; khớp core | Ảnh garage làm nền: Insert Image thêm ảnh cận bản lề ở góc, hiện handles resize và kết quả bố cục. |
