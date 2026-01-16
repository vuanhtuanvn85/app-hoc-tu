#!/usr/bin/env python3
"""
Download remaining vegetable images using simplified search terms
"""

import os
import urllib.request
import urllib.parse
import time

# Remaining vegetables to download with simplified search terms
remaining_vegetables = [
    ("black_bean", "beans"),
    ("kidney_bean", "beans,red"),
    ("mung_bean", "beans,green"),
    ("bell_pepper", "pepper,vegetable"),
    ("chili_pepper", "chili,hot"),
    ("cherry_tomato", "tomato,cherry"),
    ("bamboo_shoot", "bamboo"),
    ("celery_stalk", "celery"),
    ("shiitake_mushroom", "shiitake"),
    ("enoki_mushroom", "enoki"),
    ("straw_mushroom", "mushroom"),
    ("button_mushroom", "mushroom,white"),
    ("portobello_mushroom", "portobello"),
    ("oyster_mushroom", "oyster,mushroom"),
    ("morel_mushroom", "morel"),
    ("green_onion", "scallion"),
    ("red_onion", "onion,red"),
    ("white_onion", "onion,white"),
    ("yellow_onion", "onion,yellow"),
    ("curly_lettuce", "lettuce,curly"),
    ("mustard_greens", "mustard,vegetable"),
    ("water_spinach", "kangkong"),
    ("napa_cabbage", "cabbage,chinese"),
    ("red_bell_pepper", "pepper,red"),
    ("yellow_bell_pepper", "pepper,yellow"),
    ("green_bell_pepper", "pepper,green"),
    ("brussels_sprout", "brussels"),  # singular version
]

# Output directory
output_dir = "images/vegetables"

def download_from_loremflickr(search_term, output_path):
    """Download image from LoremFlickr"""
    try:
        encoded_term = urllib.parse.quote(search_term)
        url = f"https://loremflickr.com/640/480/{encoded_term}"
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        request = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(request, timeout=30) as response:
            image_data = response.read()
            
            if len(image_data) > 1000:
                with open(output_path, 'wb') as f:
                    f.write(image_data)
                return True
        return False
    except Exception as e:
        print(f"    Error: {e}")
        return False

def main():
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"📥 Downloading {len(remaining_vegetables)} remaining vegetable images...")
    print(f"📁 Output directory: {output_dir}")
    print("-" * 60)
    
    success_count = 0
    failed = []
    
    for i, (filename, search_term) in enumerate(remaining_vegetables, 1):
        filepath = os.path.join(output_dir, filename + ".jpg")
        
        # Skip if already exists
        if os.path.exists(filepath):
            print(f"[{i}/{len(remaining_vegetables)}] ⏭️  {filename} - already exists")
            success_count += 1
            continue
        
        print(f"[{i}/{len(remaining_vegetables)}] ⬇️  {filename} ({search_term})...", end=" ", flush=True)
        
        if download_from_loremflickr(search_term, filepath):
            print("✅")
            success_count += 1
        else:
            print("❌")
            failed.append(filename)
        
        time.sleep(0.5)
    
    print("-" * 60)
    print(f"✅ Successfully downloaded: {success_count}/{len(remaining_vegetables)}")
    
    if failed:
        print(f"❌ Failed ({len(failed)}):")
        for f in failed:
            print(f"   - {f}")

if __name__ == "__main__":
    main()
