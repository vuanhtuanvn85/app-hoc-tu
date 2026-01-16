#!/usr/bin/env python3
"""
Download REMAINING missing images with longer delays to avoid rate limit
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
    filename = re.sub(r'[^\w\s-]', '', word)
    filename = re.sub(r'[-\s]+', '_', filename)
    return filename.lower() + '.jpg'

# Additional/better Wikipedia mappings for failed items
WIKI_MAPPINGS = {
    # Colors that failed
    'gray': 'Grey',
    'crimson': 'Crimson (color)',
    'turquoise': 'Turquoise (colour)',
    'peach': 'Peach',
    'hot pink': 'Pink',
    'smoke gray': 'Grey',
    'oval': 'Ellipse',
    'pyramid': 'Pyramid',
    'earth tone': 'Brown',
    'neutral color': 'Grey',
    'vertex': 'Vertex',
    'perimeter': 'Rectangle',
    
    # Household that failed
    'lamp': 'Incandescent light bulb',
    'wardrobe': 'Closet',
    'dresser': 'Dresser (furniture)',
    'night light': 'Lamp',
    'bowl': 'Bowl (vessel)',
    'cup': 'Cup (drinking vessel)',
    'glass': 'Tumbler (glass)',
    'toaster': 'Toaster',
    'blender': 'Blender (appliance)',
    'bathtub': 'Bathtub',
    'towel': 'Bath towel',
    'shampoo': 'Shampoo',
    'dustpan': 'Dustpan',
    'mop': 'Mop (tool)',
    'cleaning cloth': 'Cloth',
    'brush': 'Hairbrush',
    'heater': 'Space heater',
    'iron': 'Clothes iron',
    'shelf': 'Shelf',
    'drawer': 'Chest of drawers',
    'office chair': 'Chair',
    'figurine': 'Figurine',
    'scissors': 'Scissors',
    'hammer': 'Hammer',
    'drill': 'Drill',
    'saw': 'Saw',
    'door': 'Door',
    'window': 'Window',
    'key': 'Key (cryptography)',
    'lock': 'Padlock',
    
    # Occupations that failed
    'doctor': 'Doctor',
    'therapist': 'Physical therapy',
    'teacher': 'Schoolteacher',
    'principal': 'Principal (school)',
    'tutor': 'Tutoring',
    'librarian': 'Library',
    'lecturer': 'Lecture',
    'computer scientist': 'Computer science',
    'IT technician': 'Computer repair technician',
    'web developer': 'Web design',
    'software engineer': 'Software engineering',
    'accountant': 'Accounting',
    'banker': 'Bank',
    'financial analyst': 'Financial analysis',
    'economist': 'Economics',
    'manager': 'Manager',
    'CEO': 'Chief executive officer',
    'entrepreneur': 'Entrepreneur',
    'singer': 'Singing',
    'painter': 'House painter',
    'hotel staff': 'Hospitality industry',
    'carpenter': 'Carpentry',
    'pilot': 'Aircraft pilot',
    'driver': 'Driving',
    'captain': 'Ship captain',
    'gardener': 'Gardening',
    'environmental scientist': 'Environmentalism',
    'reporter': 'News presenter',
    'editor': 'Editing',
    'author': 'Author',
    'geologist': 'Geology',
}

def download_missing_for_topic(topic_name, js_file, images_dir):
    """Download missing images for a topic"""
    print(f'\n{"="*60}')
    print(f'📁 {topic_name}')
    print(f'{"="*60}')
    
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    words = re.findall(r"term2:\s*'([^']+)'", content)
    output_dir = Path(images_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    missing = []
    for word in words:
        filename = sanitize_filename(word)
        if not (output_dir / filename).exists():
            missing.append(word)
    
    print(f'Missing: {len(missing)}')
    
    if not missing:
        print('✅ All done!')
        return 0, 0
    
    success = 0
    failed = 0
    
    for i, word in enumerate(missing, 1):
        filename = sanitize_filename(word)
        output_path = output_dir / filename
        
        wiki_title = WIKI_MAPPINGS.get(word.lower(), word.title())
        
        print(f'[{i}/{len(missing)}] {word} -> {wiki_title}...', end='', flush=True)
        
        if download_from_wikimedia(wiki_title, output_path):
            size = os.path.getsize(output_path)
            print(f' ✅ ({size//1024}KB)')
            success += 1
        else:
            print(' ❌')
            failed += 1
        
        # Longer delay to avoid rate limit
        time.sleep(1)
    
    return success, failed

def main():
    script_dir = Path(__file__).parent
    
    topics = [
        ('🎨 Colors & Shapes', 
         script_dir / 'js/data/colors-shapes.js', 
         script_dir / 'images/colors-shapes'),
        ('🏠 Household Items', 
         script_dir / 'js/data/household.js', 
         script_dir / 'images/household'),
        ('👨‍💼 Occupations', 
         script_dir / 'js/data/occupations.js', 
         script_dir / 'images/occupations'),
    ]
    
    print('\n🔄 DOWNLOADING REMAINING IMAGES')
    print('=' * 60)
    print('Using longer delays to avoid rate limit')
    print('=' * 60)
    
    total_success = 0
    total_failed = 0
    
    for topic_name, js_file, images_dir in topics:
        success, failed = download_missing_for_topic(topic_name, js_file, images_dir)
        total_success += success
        total_failed += failed
        time.sleep(5)  # Wait between topics
    
    print('\n' + '=' * 60)
    print('🎉 DONE!')
    print(f'   ✅ Success: {total_success}')
    print(f'   ❌ Failed: {total_failed}')
    print('=' * 60)

if __name__ == '__main__':
    main()
