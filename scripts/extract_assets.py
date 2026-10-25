from PIL import Image
import os

src_dir = "/Users/zeel/.gemini/antigravity-ide/brain/5b895b66-fe77-4ce4-b3b6-ed99cac6a7d9/.user_uploaded"
out_dir = "/Users/zeel/Documents/Airbnb_clone/public/images"
os.makedirs(out_dir, exist_ok=True)

img1 = Image.open(os.path.join(src_dir, "media_1792644204937.png"))

# Hero 1: Large left image (x: 121 to 512, y: 214 to 459)
hero1 = img1.crop((121, 214, 512, 459))
hero1.convert('RGB').save(os.path.join(out_dir, "hero-1.jpg"), quality=95)

# Hero 2: Top center image (x: 517 to 707, y: 214 to 333)
hero2 = img1.crop((517, 214, 707, 333))
hero2.convert('RGB').save(os.path.join(out_dir, "hero-2.jpg"), quality=95)

# Hero 3: Top right image - Jacuzzi (x: 712 to 902, y: 214 to 333)
hero3 = img1.crop((712, 214, 902, 333))
hero3.convert('RGB').save(os.path.join(out_dir, "hero-3.jpg"), quality=95)

# Hero 4: Bottom center image - Bedroom (x: 517 to 707, y: 339 to 459)
hero4 = img1.crop((517, 339, 707, 459))
hero4.convert('RGB').save(os.path.join(out_dir, "hero-4.jpg"), quality=95)

# Hero 5: Bottom right image - Building exterior (x: 712 to 902, y: 339 to 459)
hero5 = img1.crop((712, 339, 902, 459))
hero5.convert('RGB').save(os.path.join(out_dir, "hero-5.jpg"), quality=95)

# 2. Sleeping arrangement photos from media_1792644220305.png
img3 = Image.open(os.path.join(src_dir, "media_1792644220305.png"))
# Bedroom card (x: 121 to 343, y: 250 to 395)
room_bed = img3.crop((121, 250, 343, 395))
room_bed.convert('RGB').save(os.path.join(out_dir, "room-bedroom.jpg"), quality=95)

# Living room card (x: 354 to 576, y: 250 to 395)
room_living = img3.crop((354, 250, 576, 395))
room_living.convert('RGB').save(os.path.join(out_dir, "room-living.jpg"), quality=95)

# 3. Host avatar from media_1792644210895.png
img2 = Image.open(os.path.join(src_dir, "media_1792644210895.png"))
# Host avatar is located near y=200..250, x=120..160
# Let us locate and crop the green circular logo
host_avatar = img2.crop((121, 203, 154, 236))
host_avatar.save(os.path.join(out_dir, "host-avatar.png"))

print("Extracted all images successfully!")
