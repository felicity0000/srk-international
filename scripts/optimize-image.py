"""
Shrink photos for the website.

Usage:
    python scripts/optimize-image.py src/assets/a-6.jpg [more files...]

For each photo:
  1. Copies the full-size original to ../srk-original-photos/ (outside the project)
  2. Resizes it to at most 1600px on the longest side
  3. Saves it back in place as a compressed JPEG (quality 80)

Requires Pillow (included with Anaconda, or: pip install pillow).
"""

import os
import shutil
import sys

from PIL import Image, ImageOps

MAX_SIZE = 1600
QUALITY = 80

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKUP_DIR = os.path.join(os.path.dirname(PROJECT_ROOT), "srk-original-photos")


def optimize(path):
    if not os.path.isfile(path):
        print(f"  skip  {path} (file not found)")
        return

    before = os.path.getsize(path)
    im = Image.open(path)
    if max(im.size) <= MAX_SIZE and before < 500 * 1024:
        print(f"  skip  {path} (already small: {im.size[0]}x{im.size[1]}, {before // 1024} KB)")
        return

    # Back up the original, but never overwrite an existing backup
    os.makedirs(BACKUP_DIR, exist_ok=True)
    backup = os.path.join(BACKUP_DIR, os.path.basename(path))
    if not os.path.exists(backup):
        shutil.copy2(path, backup)

    im = ImageOps.exif_transpose(im).convert("RGB")  # keep photo the right way up
    im.thumbnail((MAX_SIZE, MAX_SIZE), Image.LANCZOS)
    im.save(path, "JPEG", quality=QUALITY, optimize=True, progressive=True)

    after = os.path.getsize(path)
    print(f"  done  {path}: {before // 1024} KB -> {after // 1024} KB ({im.size[0]}x{im.size[1]})")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    for p in sys.argv[1:]:
        optimize(p)
    print(f"Originals are backed up in: {BACKUP_DIR}")
