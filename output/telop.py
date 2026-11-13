import sys
from PIL import Image, ImageDraw, ImageFont
font_path, out = sys.argv[1], sys.argv[2]
W, H = 1080, 1920
def F(s): return ImageFont.truetype(font_path, s)
def text(d, xy, s, size, fill, stroke=14, anchor="mm"):
    # 二重縁取り（外：黒、内：白）のテレビ風テロップ
    d.text(xy, s, font=F(size), fill="black", stroke_width=stroke+8, stroke_fill="black", anchor=anchor)
    d.text(xy, s, font=F(size), fill=fill, stroke_width=stroke, stroke_fill="white" if fill != "white" else "black", anchor=anchor)
def new(): 
    im = Image.new("RGBA", (W, H), (0, 0, 0, 0)); return im, ImageDraw.Draw(im)
# 1: 名前
im, d = new()
d.rounded_rectangle((300, 150, 780, 250), 20, fill="#e60033")
d.text((540, 198), "新スタッフ紹介", font=F(60), fill="white", anchor="mm")
text(d, (540, 400), "【田吾作】", 190, "#ffe100")
im.save(f"{out}/t1.png")
# 2: 特技
im, d = new()
text(d, (540, 1480), "特技：ガン見", 110, "white", stroke=12)
im.save(f"{out}/t2.png")
# 3: 弱点
im, d = new()
f=F(72)
d.text((540, 1640), "弱点：カメラを向けると逃げる", font=f, fill="#7fe3ff", stroke_width=10, stroke_fill="black", anchor="mm")
im.save(f"{out}/t3.png")
