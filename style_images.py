from PIL import Image, ImageDraw, ImageFont

def style_warrior():
    im1 = Image.open('c:/Users/visha/Desktop/zeroup/hero_warrior.jpg').convert('RGBA')
    overlay = Image.new('RGBA', im1.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    font_mono_xs = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 13)
    font_mono_sm = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 16)
    font_mono_md = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 20)
    font_bold_lg = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 44)
    font_bold_xl = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 58)

    # Top right badge
    draw.rounded_rectangle([(510, 60), (920, 98)], radius=8, fill=(15, 18, 24, 210), outline=(204, 255, 0, 180), width=1)
    draw.ellipse([(525, 74), (535, 84)], fill=(204, 255, 0, 255))
    draw.text((545, 69), 'ZEROUP // PRAYAGRAJ · 2026', font=font_mono_sm, fill=(204, 255, 0, 255))

    # Giant display headline
    draw.text((510, 120), 'BUILD', font=font_bold_xl, fill=(255, 255, 255, 255))
    draw.text((510, 182), 'ATTENTION.', font=font_bold_xl, fill=(204, 255, 0, 255))
    draw.text((510, 244), 'OWN', font=font_bold_xl, fill=(255, 255, 255, 255))
    draw.text((510, 306), 'DISTRIBUTION.', font=font_bold_xl, fill=(255, 255, 255, 255))

    # Divider line
    draw.line([(510, 395), (920, 395)], fill=(80, 85, 95, 200), width=1)

    # Editorial sub-block
    draw.text((510, 410), 'CONTENT AS INFRASTRUCTURE', font=font_mono_md, fill=(255, 255, 255, 240))
    draw.text((510, 442), 'NOT AN AGENCY. A MEDIA & TECH STUDIO.', font=font_mono_xs, fill=(170, 180, 195, 230))
    draw.text((510, 466), 'PRAYAGRAJ HQ // 25.4358 N, 81.8463 E', font=font_mono_xs, fill=(170, 180, 195, 200))

    # Bottom badge on lower left
    draw.rounded_rectangle([(40, 930), (460, 982)], radius=8, fill=(12, 14, 18, 230), outline=(50, 55, 65, 255), width=1)
    draw.text((55, 940), 'SYSTEM: CONTENT x CODE x IP', font=font_mono_sm, fill=(204, 255, 0, 255))
    draw.text((55, 960), 'ENGINEERED FOR COMPOUND ATTENTION', font=font_mono_xs, fill=(180, 190, 200, 220))

    out1 = Image.alpha_composite(im1, overlay).convert('RGB')
    out1.save('c:/Users/visha/Desktop/zeroup/hero_warrior_styled.jpg', quality=95)
    print('Generated hero_warrior_styled.jpg')

def style_galaxy():
    im2 = Image.open('c:/Users/visha/Desktop/zeroup/creator_galaxy.jpg').convert('RGBA')
    overlay = Image.new('RGBA', im2.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    font_mono_xs = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 11)
    font_mono_sm = ImageFont.truetype('C:/Windows/Fonts/consola.ttf', 13)
    font_bold_md = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 26)
    font_bold_lg = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 30)

    # Top pill
    draw.rounded_rectangle([(30, 40), (330, 74)], radius=17, fill=(10, 16, 28, 200), outline=(204, 255, 0, 210), width=1)
    draw.ellipse([(44, 52), (52, 60)], fill=(204, 255, 0, 255))
    draw.text((60, 48), 'ZEROUP RESEARCH // PRAYAGRAJ', font=font_mono_sm, fill=(255, 255, 255, 240))

    # Editorial quote card in the open sky
    draw.rounded_rectangle([(30, 90), (485, 250)], radius=12, fill=(8, 14, 26, 185), outline=(255, 255, 255, 50), width=1)
    draw.text((48, 105), "DON'T RENT ATTENTION.", font=font_bold_lg, fill=(255, 255, 255, 255))
    draw.text((48, 145), 'BUILD AN ASSET.', font=font_bold_lg, fill=(204, 255, 0, 255))
    draw.line([(48, 190), (468, 190)], fill=(255, 255, 255, 45), width=1)
    draw.text((48, 200), 'WE BUILD MEDIA & CODE SYSTEMS THAT COMPOUND.', font=font_mono_sm, fill=(225, 235, 250, 230))
    draw.text((48, 222), 'PRAYAGRAJ 2026 // FULL-STACK STUDIO', font=font_mono_xs, fill=(160, 180, 210, 200))

    # Bottom pill over the grass
    draw.rounded_rectangle([(30, 940), (485, 988)], radius=10, fill=(10, 16, 24, 225), outline=(204, 255, 0, 160), width=1)
    draw.text((45, 948), 'CODE x PRODUCTION x DISTRIBUTION', font=font_mono_sm, fill=(204, 255, 0, 255))
    draw.text((45, 968), 'TURNING RAW EXPERTISE INTO UNSTOPPABLE MEDIA', font=font_mono_xs, fill=(200, 210, 225, 220))

    out2 = Image.alpha_composite(im2, overlay).convert('RGB')
    out2.save('c:/Users/visha/Desktop/zeroup/creator_galaxy_styled.jpg', quality=95)
    print('Generated creator_galaxy_styled.jpg')

if __name__ == '__main__':
    style_warrior()
    style_galaxy()
