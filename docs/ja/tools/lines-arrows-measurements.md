# 線、矢印、計測

<!-- TODO(verify): Verify the steps and update the screenshots against the current app. -->

## 対象を指し示す

- [矢印 (Arrow)](/ja/tools/arrow)は、空いている場所から特定の細部を指し示します。
- まっすぐな**直線 (Line)**で、端を示したり2点をつないだりできます。
- **曲線 (Curve)**は曲がった経路に沿います。
- **コネクタ (Connector)**は図や場所をつなぎます。

<img src="/images/tools/line/line-result.webp" alt="赤い直線が矢印の先端なしで、コンクリートの壁のひびに沿って伸びています。" />

直線は一方の端点からもう一方の端点に向かって描かれます。この例では、矢印の先端を付けずにひびを示しています。

<img src="/images/tools/curve/curve-result.webp" alt="赤い曲線の矢印が露出した排水管の曲がりに沿い、曲線の制御点が表示されています。" />

曲線は曲がった経路に沿います。選択中の例では、矢印の先端と編集可能な制御点が表示されています。

<img src="/images/tools/connector/connector-result.webp" alt="選択中の赤い折れ線コネクタがプラグと下側のコンセントをつなぎ、端点と折れ曲がりのハンドルが表示されています。" />

コネクタは2か所の間をつなぎます。ハンドルをドラッグして、端点と折れ曲がりを調整します。

## 計測ツール

- [**直線計測 (Line Measure)**](/ja/tools/line-measure)（プレミアム）は、端点間の長さを直接表示します。
- **角度計測 (Angle Measure)**は、2本の線がなす角度を示します。
- **引き出し線 (Leader Line)**（プレミアム）は、対象からラベルの位置まで線を引きます。
- [寸法線 (Dimension Line)](/ja/tools/dimension-line)（プレミアム）は、2点間の距離を寸法線で示します。
- **目盛計測 (Tick Measure)**（プレミアム）は、線に目盛りを繰り返し付けます。
- **座標 (Coordinate)**（プレミアム）は、座標軸上で点の位置を示します。

<img src="/images/tools/coordinate/coordinate-result.webp" alt="赤い破線の横軸と縦軸が白紙のクリップボード上で交差し、正の方向に矢印の先端が付いています。" />

**半径 (Radius)**と**直径 (Diameter)**は「図形」グループにあります。どちらの計測ツールにもプレミアムが必要です。

<img src="/images/tools/radius/radius-result.webp" alt="半径の注釈が露出した円形の電気コンセントを囲み、サンプルラベルR15 mmを表示しています。" />

ラベルの`R15 mm`は例です。この写真には校正済みの縮尺がありません。

<img src="/images/tools/diameter/diameter-result.webp" alt="赤い直径線が矢印の先端付きで円形の電気コンセントの中心を横切り、サンプルラベルØ30 mmを表示しています。" />

ラベルの`Ø30 mm`は例です。この写真には校正済みの縮尺がありません。

<img src="/images/tools/angle-measure/angle-measure-result.webp" alt="黄色の破線の角度計測線が排水管のそばで合流し、85度を示しています。" />

<img src="/images/tools/leader-line/leader-line-result.webp" alt="黄色の破線の引き出し線がパイプの継ぎ目から始まり、「継ぎ目を確認」というラベルの方向へ曲がって、その下を伸びています。" />

<img src="/images/tools/tick-measure/tick-measure-result.webp" alt="赤い破線の目盛計測線がボルトとナットを斜めに横切り、繰り返しの目盛り、0.5 inのラベル、編集ハンドルが表示されています。" />

`0.5 in`はラベルの例です。

<!-- TODO(verify): The Line Measure and Dimension Line pages include editor captures. Menu locations and the remaining measurement workflows still need verification on current phone and tablet builds. -->

## 共通のプロパティ

- 線の色、太さ、不透明度、破線スタイル。
- 始点と終点の装飾。
- 対応する計測ツールのラベル位置。
- 対応するツールの向きと座標表示。

## 正確に描く

- 一般的な角度には**自動整列 (スナップ機能) (Snap)**を使います。
- 端点を置く前に拡大します。
- 描画後に個々のハンドルを調整します。
- 対応する複数セグメントのツールで、ポイントを追加する方法を説明します。

::: warning 写真上の計測
値はポイントの配置、縮尺、画像の遠近感によって変わります。校正済みの手順を使わない場合、認証済みの測定値として提示しないでください。
:::
