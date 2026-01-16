#!/usr/bin/env python3
"""
Download missing fruit images using DuckDuckGo Search
"""
import requests
import time
import os
import re
from pathlib import Path
from duckduckgo_search import DDGS

def download_image(url, output_path, timeout=30):
    """Download image from URL"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=timeout)
        response.raise_for_status()
        
        with open(output_path, 'wb') as f:
            f.write(response.content)
        return True
    except Exception as e:
        print(f'  Download error: {str(e)[:50]}')
        return False

def search_and_download(query, output_path):
    """Search for image and download first result"""
    try:
        with DDGS() as ddgs:
            results = list(ddgs.images(query, max_results=1))
            
            if results:
                img_url = results[0]['image']
                return download_image(img_url, output_path)
            else:
                print(f'  No results for: {query}')
                return False
    except Exception as e:
        print(f'  Search error: {str(e)[:50]}')
        return False

def sanitize_filename(word):
    """Create safe filename from word"""
    filename = re.sub(r'[^\w\s-]', '', word)
    filename = re.sub(r'[-\s]+', '_', filename)
    return filename.lower() + '.jpg'

def main():
    # Read fruits.js
    with open('js/data/fruits.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    words = re.findall(r"term2:\s*'([^']+)'", content)
    output_dir = Path('images/fruits')
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Find missing images
    missing = []
    for word in words:
        filename = sanitize_filename(word)
        if not (output_dir / filename).exists():
            missing.append(word)
    
    print(f'🍎 Found {len(missing)} missing fruit images')
    print(f'📂 Output: {output_dir}')
    print()
    
    # Download missing images
    success = 0
    failed = 0
    failed_list = []
    
    for i, word in enumerate(missing, 1):
        filename = sanitize_filename(word)
        output_path = output_dir / filename
        
        # Create search query
        search_query = f"{word} fruit"
        
        print(f'[{i}/{len(missing)}] {word}...', end='', flush=True)
        
        if search_and_download(search_query, output_path):
            size = os.path.getsize(output_path)
            print(f' ✅ ({size//1024}KB)')
            success += 1
        else:
            print(' ❌')
            failed += 1
            failed_list.append(word)
        
        # Rate limiting
        time.sleep(1.5)
    
    print(f'\n✨ DONE!')
    print(f'   ✅ Success: {success}')
    print(f'   ❌ Failed: {failed}')
    
    if failed_list:
        print(f'\nFailed items: {failed_list}')

if __name__ == '__main__':
    main()
