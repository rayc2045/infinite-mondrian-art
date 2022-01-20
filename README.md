# Infinite Mondrian Art

![Cover](https://cdn.dribbble.com/users/3800131/screenshots/17315331/media/fba91e10d3851332edd6d1405c95ce1e.png)

[> Infinite Mondrian Art](https://mondrian-art.netlify.app/)

### 簡介
2022 年 1 月的一個假日，閒逛於誠品書局，看到了皮特·蒙德里安 (Piet Mondrian) 的周邊商品 – [蒙德里安變色馬克杯 (Mondrian Color Changing Mug)](https://www.eslite.com/product/1005140612574658) 和 [蒙德里安收納包](https://www.eslite.com/product/1005140612574657)，其簡潔優雅的藝術風格立刻攫住我的目光。經調查得知，身為印象派/幾何抽象畫派先驅的蒙德里安並不是一開始就形成這種使用井然方格搭配明亮色彩的藝術風格，早年的蒙德里安畫過寫實的人物和風景，後來逐漸把樹木的形態簡化成水平線與垂直線的抽象構成。崇拜直線美的他，認為透過直角可以靜觀萬物內部的安寧，於是在 1917 年，蒙德里安開始提倡自創的新造型主義風格，運用線條和色彩區塊實現自己創造普遍現象秩序與均衡美的理論，進而對現代建築、工藝和設計產生深遠的影響。似有共鳴的我將他的藝術風格與程式做聯想，最終作出了自己的第一個生成式藝術 (Generative Art) 創作。

### 外觀與互動設計
- 排版採手機優先 (mobile first)，並做到在任何尺寸裝置上，保持一致絕佳比例的響應式設計
- 封鎖不必要的文字選取、拖拉和右鍵點擊操作
- 使用偏灰的白色作為背景顏色以減少視覺上的不適感及增加畫面層次
- 使用廣泛出現在藝術領域的 [Open Sans](https://fonts.google.com/specimen/Open+Sans) 作為 Loading/歡迎頁面字型
- 使用淡入、淡出動畫銜接 Loading 頁面與色塊生成展示之間的切換
- 從 HTML 保留色中採集 [六種顏色](https://color-names.netlify.app/?colors=+crimson+gold+royalblue+darkgray+black+white)，並依照：紅色 1：黃色 1：藍色 1：灰色 1：白色 10 的比例生成蒙德里安色塊
- 色塊生成設計上，去除了黑色的邊框以及使用圓角增添親近感，另外也使用外陰影讓視線強化、集中於色塊本身
- 設計頁面捲動達到總體高度 80% 時，輸出新的 12 個色塊，以此達到順暢的無限生成和捲動

### 開發紀錄
- 使用 [petite-vue](https://github.com/vuejs/petite-vue) 的模板語法將色塊資料視覺化
- 使用 CSS Grid 作為色塊內元素的排版方式，並使用亂數達到 2x2 到 4x4 豐富變化的輸出形式
- 每個色塊行 (row) 與列 (column) 的比例以小數點後 2 位的亂數組合來設定，進一步增強變化的豐富性
- 使用顏色的排列順序和數量作為判斷重複的標準，達到無限次不重複的蒙德里安色塊生成