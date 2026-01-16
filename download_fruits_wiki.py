#!/usr/bin/env python3
"""
Download missing fruit images using Wikipedia API
"""
import requests
import time
import os
import re
from pathlib import Path

def download_from_wikimedia(query, output_path, timeout=30):
    """Download image from Wikipedia"""
    try:
        headers = {
            'User-Agent': 'VocabImageDownloader/1.0 (Educational App)'
        }
        
        # Wikipedia API to search for images
        search_url = 'https://en.wikipedia.org/w/api.php'
        params = {
            'action': 'query',
            'format': 'json',
            'titles': query,
            'prop': 'pageimages',
            'pithumbsize': 400
        }
        
        response = requests.get(search_url, params=params, headers=headers, timeout=timeout)
        response.raise_for_status()
        
        data = response.json()
        pages = data.get('query', {}).get('pages', {})
        
        for page_id, page_data in pages.items():
            if 'thumbnail' in page_data:
                img_url = page_data['thumbnail']['source']
                
                img_response = requests.get(img_url, headers=headers, timeout=timeout)
                img_response.raise_for_status()
                
                with open(output_path, 'wb') as f:
                    f.write(img_response.content)
                return True
        
        return False
    except Exception as e:
        print(f'  Error: {str(e)[:50]}')
        return False

def sanitize_filename(word):
    """Create safe filename from word"""
    filename = re.sub(r'[^\w\s-]', '', word)
    filename = re.sub(r'[-\s]+', '_', filename)
    return filename.lower() + '.jpg'

# Mapping of term2 to Wikipedia article titles for better results
WIKI_MAPPINGS = {
    'plum': 'Plum',
    'papaya': 'Papaya',
    'pomegranate': 'Pomegranate',
    'fig': 'Common fig',
    'blueberry': 'Blueberry',
    'raspberry': 'Raspberry',
    'blackberry': 'Blackberry',
    'cranberry': 'Cranberry',
    'raisin': 'Raisin',
    'berry': 'Berry',
    'mulberry': 'Mulberry',
    'goji berry': 'Goji',
    'grapefruit': 'Grapefruit',
    'mandarin': 'Mandarin orange',
    'tangerine': 'Tangerine',
    'clementine': 'Clementine',
    'blood orange': 'Blood orange',
    'lychee': 'Lychee',
    'rambutan': 'Rambutan',
    'mangosteen': 'Purple mangosteen',
    'durian': 'Durian',
    'longan': 'Longan',
    'dragon fruit': 'Pitaya',
    'logan': 'Longan',
    'guava': 'Guava',
    'soursop': 'Soursop',
    'custard apple': 'Custard apple',
    'jackfruit': 'Jackfruit',
    'date': 'Date palm',
    'passion fruit': 'Passion fruit',
    'plantain': 'Cooking banana',
    'sapodilla': 'Manilkara zapota',
    'star fruit': 'Carambola',
    'cantaloupe': 'Cantaloupe',
    'honeydew melon': 'Honeydew (melon)',
    'muskmelon': 'Muskmelon',
    'seedless watermelon': 'Watermelon',
    'apricot': 'Apricot',
    'nectarine': 'Nectarine',
    'prune': 'Prune',
    'persimmon': 'Persimmon',
    'golden raspberry': 'Raspberry',
    'white strawberry': 'Strawberry',
    'tamarind': 'Tamarind',
    'green apple': 'Apple',
    'red apple': 'Apple',
    'green grape': 'Grape',
    'red grape': 'Grape',
    'purple grape': 'Grape',
    'almond': 'Almond',
    'walnut': 'Walnut',
    'chestnut': 'Chestnut',
    'hazelnut': 'Hazelnut',
    'cashew': 'Cashew',
    'macadamia': 'Macadamia',
    'pecan': 'Pecan',
    'pine nut': 'Pine nut',
    'peanut': 'Peanut',
    'pistachio': 'Pistachio',
    'pitaya': 'Pitaya',
    'horned melon': 'Horned melon',
    "buddha's hand": "Buddha's hand",
    'miracle berry': 'Synsepalum dulcificum',
    'jabuticaba': 'Jabuticaba',
    'rambai': 'Baccaurea',
    'salak': 'Salak',
    'ackee': 'Ackee',
    'cherimoya': 'Cherimoya',
    'feijoa': 'Feijoa',
    'wild strawberry': 'Wild strawberry',
    'yellow plum': 'Plum',
    'blackcurrant': 'Blackcurrant',
    'redcurrant': 'Redcurrant',
    'elderberry': 'Elderberry',
    'giant strawberry': 'Strawberry'
}

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
    print(f'Using Wikipedia API (no rate limit)')
    print()
    
    # Download missing images
    success = 0
    failed = 0
    failed_list = []
    
    for i, word in enumerate(missing, 1):
        filename = sanitize_filename(word)
        output_path = output_dir / filename
        
        # Get Wikipedia title for this word
        wiki_title = WIKI_MAPPINGS.get(word.lower(), word.title())
        
        print(f'[{i}/{len(missing)}] {word} ({wiki_title})...', end='', flush=True)
        
        if download_from_wikimedia(wiki_title, output_path):
            size = os.path.getsize(output_path)
            print(f' ✅ ({size//1024}KB)')
            success += 1
        else:
            print(' ❌')
            failed += 1
            failed_list.append(word)
        
        # Small delay to be respectful
        time.sleep(0.3)
    
    print(f'\n✨ DONE!')
    print(f'   ✅ Success: {success}')
    print(f'   ❌ Failed: {failed}')
    
    if failed_list:
        print(f'\nFailed items: {failed_list}')

if __name__ == '__main__':
    main()
