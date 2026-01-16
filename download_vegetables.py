#!/usr/bin/env python3
"""
Download vegetable images from Lorem Picsum (placeholder) and Wikipedia Commons
Uses multiple fallback sources for reliability
"""

import os
import urllib.request
import urllib.error
import urllib.parse
import time
import json
import hashlib

# List of vegetables to download (English names from the vocabulary)
vegetables = [
    # Leafy vegetables - already have: cabbage, lettuce, spinach
    "kale",
    "bok choy",
    "arugula",
    "endive",
    "radicchio",
    "romaine lettuce",
    "brussels sprouts",
    "parsley",
    "basil",
    "dill",
    "cilantro",
    "mint",
    
    # Root vegetables - already have: carrot, potato
    "sweet potato",
    "radish",
    "beet",
    "ginger",
    "garlic",
    "onion",
    "shallot",
    "turnip",
    "beetroot",
    "celery root",
    "turmeric",
    "jicama",
    "black radish",
    
    # Cruciferous vegetables
    "broccoli",
    "cauliflower",
    "brussels sprout",
    "red cabbage",
    "collard greens",
    
    # Squash and gourds
    "pumpkin",
    "winter melon",
    "zucchini",
    "butternut squash",
    "acorn squash",
    "spaghetti squash",
    "loofah",
    "bitter melon",
    
    # Legumes
    "pea",
    "green bean",
    "snow pea",
    "lima bean",
    "black bean",
    "chickpea",
    "lentil",
    "kidney bean",
    "soybean",
    "mung bean",
    
    # Nightshades
    "tomato",
    "eggplant",
    "bell pepper",
    "chili pepper",
    "cherry tomato",
    "jalapeno",
    
    # Stalks and stems
    "celery",
    "asparagus",
    "bamboo shoot",
    "celery stalk",
    "rhubarb",
    
    # Mushrooms
    "mushroom",
    "shiitake mushroom",
    "enoki mushroom",
    "straw mushroom",
    "button mushroom",
    "portobello mushroom",
    "oyster mushroom",
    "morel mushroom",
    
    # Alliums
    "green onion",
    "leek",
    "red onion",
    "white onion",
    "yellow onion",
    
    # Other vegetables
    "cucumber",
    "corn",
    "curly lettuce",
    "mustard greens",
    "artichoke",
    "amaranth",
    "water spinach",
    "napa cabbage",
    "red bell pepper",
    "yellow bell pepper",
    "green bell pepper",
    "pickle",
    "gherkin",
    "purslane",
    "pennywort",
    "katuk"  # Vietnamese spinach alternative name
]

# Already downloaded
already_have = ["cabbage", "lettuce", "spinach", "carrot", "potato"]

# Output directory
output_dir = "images/vegetables"

def download_from_pixabay(vegetable_name, output_path):
    """Download image using Pixabay (public API)"""
    try:
        # Pixabay free API
        encoded_name = urllib.parse.quote(vegetable_name + " vegetable fresh")
        url = f"https://pixabay.com/api/?key=25347439-0ad5d5959ba0147e3f09c3a0e&q={encoded_name}&image_type=photo&per_page=3&safesearch=true"
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        request = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(request, timeout=30) as response:
            data = json.loads(response.read().decode('utf-8'))
            
            if data.get('hits') and len(data['hits']) > 0:
                # Get the first image URL (webformat is medium size, good quality)
                image_url = data['hits'][0].get('webformatURL')
                
                if image_url:
                    # Download the actual image
                    img_request = urllib.request.Request(image_url, headers=headers)
                    with urllib.request.urlopen(img_request, timeout=30) as img_response:
                        image_data = img_response.read()
                        
                        with open(output_path, 'wb') as f:
                            f.write(image_data)
                        
                        return True
        return False
    except Exception as e:
        return False

def download_from_loremflickr(vegetable_name, output_path):
    """Download image from LoremFlickr (free, no API key)"""
    try:
        # LoremFlickr provides random images based on keywords
        encoded_name = urllib.parse.quote(vegetable_name)
        url = f"https://loremflickr.com/640/480/{encoded_name},vegetable"
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        request = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(request, timeout=30) as response:
            image_data = response.read()
            
            # Only save if we got a valid image (more than 1KB)
            if len(image_data) > 1000:
                with open(output_path, 'wb') as f:
                    f.write(image_data)
                return True
        return False
    except Exception as e:
        return False

def main():
    # Create output directory if not exists
    os.makedirs(output_dir, exist_ok=True)
    
    # Filter out vegetables we already have
    to_download = [v for v in vegetables if v.lower().replace(" ", "_").replace("-", "_") not in 
                   [a.lower() for a in already_have]]
    
    print(f"📥 Downloading {len(to_download)} vegetable images...")
    print(f"📁 Output directory: {output_dir}")
    print("🔗 Sources: Pixabay (primary), LoremFlickr (fallback)")
    print("-" * 60)
    
    success_count = 0
    failed = []
    
    for i, vegetable in enumerate(to_download, 1):
        # Create filename (lowercase, spaces to underscores)
        filename = vegetable.lower().replace(" ", "_").replace("-", "_") + ".jpg"
        filepath = os.path.join(output_dir, filename)
        
        # Skip if already exists
        if os.path.exists(filepath):
            print(f"[{i}/{len(to_download)}] ⏭️  {vegetable} - already exists")
            success_count += 1
            continue
        
        print(f"[{i}/{len(to_download)}] ⬇️  {vegetable}...", end=" ", flush=True)
        
        # Try Pixabay first
        if download_from_pixabay(vegetable, filepath):
            print("✅ (Pixabay)")
            success_count += 1
        # Fallback to LoremFlickr
        elif download_from_loremflickr(vegetable, filepath):
            print("✅ (LoremFlickr)")
            success_count += 1
        else:
            print("❌")
            failed.append(vegetable)
        
        # Add delay to avoid rate limiting
        time.sleep(0.3)
    
    print("-" * 60)
    print(f"✅ Successfully downloaded: {success_count}/{len(to_download)}")
    
    if failed:
        print(f"❌ Failed ({len(failed)}):")
        for f in failed:
            print(f"   - {f}")

if __name__ == "__main__":
    main()
