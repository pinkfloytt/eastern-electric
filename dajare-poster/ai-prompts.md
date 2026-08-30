# 画像生成AI用プロンプト（コマ別）

参考画像と同じテイスト（描き込みのあるイラスト、青いスクラブ＋白い術帽の院長、コマ枠、吹き出し）で
描き直したいとき用。共通指定を先頭に付けて1コマずつ生成してください。

## 共通の書き出し

```
Detailed comic-panel illustration, semi-realistic Japanese manga-poster style, bold outlines,
saturated colors, dramatic lighting. A middle-aged Japanese male doctor in blue surgical scrubs,
white surgical cap, stethoscope around his neck, expressive comedic face, standing on the LEFT
third of the frame. Landscape 16:7 panel. Leave clear space at the top for a speech balloon.
No text in the image.
```

| No. | 追記するシーン指定 | 吹き出し |
|-----|------------------|---------|
| 1 | Normandy invasion beach at dawn, landing craft silhouettes on the water, parachutes in the sky, doctor gesturing "too good to be true" | うまい話にはノルマンディー |
| 2 | Doctor staring gloomily at a huge smartphone showing a flat follower graph, dark blue data-grid background | 増えへんデス…ヘルナンデス |
| 3 | Clear morning light over the Shimanto River, green hills, a low submersible bridge, doctor waving both hands | 朝からそんな話は四万十川 |
| 4 | A big silverback gorilla sitting in a jungle, looking regretful, doctor with hand on chin beside it | もうこりゴリラ |
| 5 | Jamaican beach, palm tree, Jamaican flag, reggae mood, doctor giving a thumbs up | ええジャマイカ、ほんじゃまいか |
| 6 | Qatar desert dunes at sunset, a camel, Doha skyline in the distance, doctor pointing upward | 君の将来を語ーる |
| 7 | Leaning Tower of Pisa, a plate of pasta in the foreground, doctor with a shocked open-mouth face | シバイタリアン！ |
| 8 | Foggy London street, Big Ben, red double-decker bus, doctor talking on the phone | ロンドンでどんどん！ |
| 9 | Monjayaki cooking on a teppan griddle, two small spatulas, steam, doctor grinning | 吸ったもんじゃ焼き〜 |
| 10 | A giant surgical mask floating with sparkles on a blue radial background, doctor pointing up | 助かりマスク！ |

生成した画像は `poster.html` の `S.<シーン名>` を `<image href="...">` に差し替えれば、
番号・見出し・吹き出しのレイアウトはそのまま使えます。
