#!/usr/bin/env python3
"""
Download images from Pexels API (free, 200 requests/hour)
"""
import requests
import time
import os
import re
from pathlib import Path

# Pexels API key (free tier: 200 requests/hour)
PEXELS_API_KEY = "fNV8pGBHWz7kP3xBGkZrBk4gx6lILpHSGzD6jCGPVtqyqx0saNh5NXLR"  # Public demo key

def download_from_pexels(query, output_path, timeout=30):
    """Download image from Pexels"""
    try:
        headers = {
            'Authorization': PEXELS_API_KEY
        }
        
        # Search for photos
        search_url = f"https://api.pexels.com/v1/search?query={query}&per_page=1&orientation=square"
        response = requests.get(search_url, headers=headers, timeout=timeout)
        response.raise_for_status()
        
        data = response.json()
        
        if data.get('photos') and len(data['photos']) > 0:
            photo_url = data['photos'][0]['src']['medium']  # 350x350 pixels
            
            # Download the image
            img_response = requests.get(photo_url, timeout=timeout)
            img_response.raise_for_status()
            
            with open(output_path, 'wb') as f:
                f.write(img_response.content)
            
            return True
        else:
            print(f"  No image found for: {query}")
            return False
            
    except Exception as e:
        print(f"  Error: {str(e)}")
        return False

def sanitize_filename(word):
    """Create safe filename from word"""
    # Remove special characters, replace spaces with underscores
    filename = re.sub(r'[^\w\s-]', '', word)
    filename = re.sub(r'[-\s]+', '_', filename)
    return filename.lower() + '.jpg'

def extract_words_from_js(file_path):
    """Extract English words (term2) from JS file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all term2 values
    matches = re.findall(r"term2:\s*'([^']+)'", content)
    return matches

def download_topic_images(topic_name, data_file, output_folder):
    """Download all images for a topic"""
    print(f"\n{'='*70}")
    print(f"📁 TOPIC: {topic_name}")
    print(f"{'='*70}\n")
    
    # Extract words
    words = extract_words_from_js(data_file)
    total = len(words)
    print(f"Found {total} words\n")
    
    # Create output directory
    output_dir = Path(output_folder)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Download images
    success = 0
    skipped = 0
    failed = 0
    
    for i, word in enumerate(words, 1):
        filename = sanitize_filename(word)
        output_path = output_dir / filename
        
        # Skip if exists
        if output_path.exists():
            print(f"[{i}/{total}] ⏭️  SKIP: {word} (already exists)")
            skipped += 1
            continue
        
        print(f"[{i}/{total}] ⬇️  Downloading: {word}...", end='')
        
        if download_from_pexels(word, output_path):
            print(" ✅")
            success += 1
        else:
            print(" ❌")
            failed += 1
        
        # Rate limiting
        time.sleep(2)  # 2 seconds between requests
        
        # Progress every 10 images
        if i % 10 == 0:
            print(f"\n📊 Progress: {i}/{total} ({i/total*100:.1f}%) - Success: {success}, Skipped: {skipped}, Failed: {failed}\n")
    
    print(f"\n{'='*70}")
    print(f"✨ TOPIC COMPLETE: {topic_name}")
    print(f"   Success: {success}/{total}")
    print(f"   Skipped: {skipped}/{total}")
    print(f"   Failed: {failed}/{total}")
    print(f"{'='*70}\n")
    
    return success, skipped, failed

def main():
    """Main function"""
    script_dir = Path(__file__).parent
    
    topics = [
        ('Fruits 🍎', script_dir / 'js/data/fruits.js', script_dir / 'images/fruits'),
        ('Vegetables 🥕', script_dir / 'js/data/vegetables.js', script_dir / 'images/vegetables'),
        ('Household Items 🏠', script_dir / 'js/data/household.js', script_dir / 'images/household'),
        ('Occupations 👨‍💼', script_dir / 'js/data/occupations.js', script_dir / 'images/occupations'),
        ('Colors & Shapes 🎨', script_dir / 'js/data/colors-shapes.js', script_dir / 'images/colors-shapes'),
    ]
    
    total_success = 0
    total_skipped = 0
    total_failed = 0
    
    print("\n🎨 VOCABULARY IMAGE DOWNLOADER")
    print("="*70)
    print("Downloading images from Pexels API...")
    print("This will take approximately 15-20 minutes for 500 images")
    print("="*70 + "\n")
    
    for topic_name, data_file, output_folder in topics:
        success, skipped, failed = download_topic_images(topic_name, data_file, output_folder)
        total_success += success
        total_skipped += skipped
        total_failed += failed
        
        # Wait between topics
        print("⏸️  Waiting 10 seconds before next topic...\n")
        time.sleep(10)
    
    # Final summary
    print("\n" + "="*70)
    print("🎉 ALL TOPICS COMPLETE!")
    print("="*70)
    print(f"✅ Successfully downloaded: {total_success} images")
    print(f"⏭️  Skipped (existed): {total_skipped} images")
    print(f"❌ Failed: {total_failed} images")
    print(f"📊 Total processed: {total_success + total_skipped + total_failed} images")
    print("="*70 + "\n")

if __name__ == '__main__':
    main()
