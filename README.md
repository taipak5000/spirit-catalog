# spirit-catalog — 精霊ツリー管理 用データ

「精霊ツリー管理」サイト(仮)のために作成した、全精霊の精霊ツリーデータです。
まだサイト本体は作っていません。このリポジトリには現時点でデータのみが入っています。

## 中身

- `spirit-tree-data.js` — 本体データ。`const SPIRIT_TREE_DATA = [...]`(216件、うち183件に日本語精霊名`nameJa`つき)
- `spirit-trees-skipped.json` — ツリーを持たないため対象外にした精霊のリスト(45件、理由つき)

## データソース

コミュニティが管理しているオープンソースのゲームデータ
[SkyGame-Data](https://github.com/Silverfeelin/SkyGame-Data)(npm: `skygame-data`)から抽出しました。
これは sky-planner.com(SkyGame-Planner)自身が使っているデータソースと同じものです。

## 再訪(復刻)の扱い

ご依頼の通り、**再訪(Special Visit)したことがある精霊は、一番最近の再訪時のツリー**を採用しています。
再訪したことがない精霊は、通常(初出時)のツリーです。

- `treeSource: "revisit"` — 再訪ツリーを採用(`revisitDate`にその再訪の開始日、`revisitName`に「Special Visit #◯」などの名称)
- `treeSource: "original"` — 通常ツリーを採用(再訪履歴なし)
- 216件中、再訪ツリー採用が53件、通常ツリーが163件

## データ形式

```js
{
  guid: "4gwH1Tn9he",          // 精霊の一意なID(SkyGame-Data側のguid)
  name: "Anxious Angler",       // 精霊名(英語)
  nameJa: "繊細な漁師",         // 精霊名(日本語。未確認の場合はnull)
  type: "Season",               // Regular / Elder / Guide / Season / Event / Special
  season: "Season of Abyss",    // シーズン名(英語)
  seasonOrderIndex: 1,          // シーズン内での登場順(0始まり。ガイドNPCも含む通し番号)
  area: null,                   // 出現エリア名(英語、わかる場合)
  imageUrl: "https://...",      // 精霊画像URL(Sky Wiki画像)
  treeGuid: "R2WmeZDMqd",       // 採用したツリーのID
  treeSource: "revisit",        // "original" または "revisit"
  revisitDate: "2025-08-18",    // revisitの場合のみ、その再訪開始日
  revisitName: "Special Visit #10",
  isTiered: false,              // true の場合は友情レベル制のツリー(Regular/Elder等)
  nodeCount: 12,
  nodes: [
    {
      guid: "...",
      // isTiered:true の場合のみ tier / row / col がつく(ツリーの段・行・列)
      cost: { c: 35 },           // c=キャンドル / h=ハート / sc=シーズンキャンドル /
                                  // sh=シーズンハート / ac=昇華キャンドル / ec=イベント通貨
                                  // (該当するキーのみ入る。全部無い＝コストなしノード)
      itemGuid: "xFJMNfae6Y",
      itemName: "Anxious Angler Mask",   // アイテム名(英語)
      itemNameJa: "繊細な漁師　マスク"    // アイテム名(日本語。未確認の場合はnull)
    },
    ...
  ]
}
```

## 精霊名(nameJa)の裏付け

wings(羽トラッカー)の `SEASON_SPIRITS`(季節精霊、日本語名一覧)と `REALM_SPIRITS`(恒常精霊)を
1シーズン・1精霊ずつ、英語名との意味的な対応を確認しながら突き合わせて作成しました。

- Season(季節)精霊: 169体中169体を確認・反映(wings側のデータも参照)
- Regular(恒常)精霊: 37体中37体を確認・反映(realm=王国ごとの照合、6王国すべて一致確認済み)
- Elder(長老)精霊: 6体中6体
- Special(特殊)精霊: 4体中1体(「思いやり深いチェリスト」のみ判明)
- 合計 183/216 体に日本語名あり

この過程で、**wings側の`SEASON_SPIRITS`に季節の並び順・データの誤りが見つかったため、wingsリポジトリ側も修正済みです**
(「重なる音色の季節」= Season of Duets が本来の位置からズレて末尾にプレースホルダーのまま置かれていた問題。
精霊名を確定し正しい位置に移動、現行シーズン「ゴッホの季節」も追加しました)。

## アイテム名(itemNameJa)の翻訳状況

2,343ノード中 **1,990件(85%)** に日本語名がついています。以下の順で突き合わせました。

1. 汎用アイテムの手作業辞書(ハート・祝福・ウィングバフ・クエストN・染料など)
2. emote(エモート所持率管理)の日本語名(社交ジェスチャー系アイテム)
3. item(アイテム所持管理)のcost-data.jsとの照合(マスク・アウトフィット・ケープ・ヘア等の装備品。
   精霊名の前方一致で照合。Guide精霊の分はシーズンのテーマ語で照合)

未解決の353件(15%)は主に: 楽器の固有名(ハープ・ピアノ・ドラム等、item側では精霊名を冠さない汎用名で登録されているため不一致)、
Stance/Call種別のアイテム(itemサイトでは管理していない種別)、長老の「アルティメット」報酬(命名規則が異なる)、
精霊名(nameJa)自体が未確認の33体分のアイテムです。

## 現時点でわかっている制限・未対応

- 精霊名(nameJa)が未確認なのは33体: Guide(季節ガイドNPC、羽が付かないためwingsで未管理)30体、
  「巣づくりの挑戦」系の特殊精霊3体。
- ツリー構造(`nodes`の並び)はSkyGame-Data側の`nw`/`n`/`ne`リンク(通常ツリー)または
  `spiritTreeTiers`の`rows`(友情レベル制ツリー)を辿って再構築したものです。
  見た目の座標(木の枝の広がり方)そのものは含んでいません。
- `treeRevisions`(シーズン中/シーズン後のパッチ的な微修正)は今回は適用していません。
  再訪(Special Visit)によるツリーの違いのみを反映しています。
- ツリーを持たない45精霊(季節ガイドNPC・内部プレースホルダー等)は`spirit-trees-skipped.json`に理由付きで記録し、本体データからは除外しています。

## 同期の方針(決定済み)

- ノードを解放済みにすると、item(アイテム所持管理)の「所持キャンドル/ハート」(`wishOwnCurrency`)を
  自動で増減させる(ノードのコスト分を差し引き、解放解除で戻す)
- 精霊ツリー内で羽関連ノード(Wing Buff)を解放すると、wings(羽トラッカー)の
  `wingTracker_v1` / `permWingTracker_v1` にも自動反映する
- どちらも同じ `taipak5000.github.io` オリジン内の localStorage を共有しているため、
  クロスサイトの通信は不要(nsKeyの仕組みをそのまま利用)

## 次のステップ

1. サイト本体のUI実装(精霊一覧・ツリー表示・ノード解放操作・item/wingsとの同期処理)
2. 残り15%のアイテム名・33体の精霊名の追加調査(任意)
