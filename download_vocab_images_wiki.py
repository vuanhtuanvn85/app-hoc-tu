#!/usr/bin/env python3
"""
Download images for vocabulary topics using Wikipedia API
Supports: colors-shapes, household, occupations
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
    """Create safe filename from word"""
    filename = re.sub(r'[^\w\s-]', '', word)
    filename = re.sub(r'[-\s]+', '_', filename)
    return filename.lower() + '.jpg'

# Wikipedia mappings for better image results
WIKI_MAPPINGS = {
    # Colors
    'red': 'Red',
    'blue': 'Blue',
    'yellow': 'Yellow',
    'green': 'Green',
    'orange': 'Orange (colour)',
    'purple': 'Purple',
    'pink': 'Pink',
    'black': 'Black',
    'white': 'White',
    'gray': 'Gray',
    'brown': 'Brown',
    'dark red': 'Maroon',
    'bright red': 'Red',
    'light red': 'Pink',
    'maroon': 'Maroon',
    'crimson': 'Crimson',
    'brick red': 'Brick',
    'navy blue': 'Navy blue',
    'sky blue': 'Sky blue',
    'cyan': 'Cyan',
    'turquoise': 'Turquoise (color)',
    'indigo': 'Indigo',
    'sea blue': 'Blue',
    'tree green': 'Green',
    'light green': 'Chartreuse (color)',
    'olive green': 'Olive (color)',
    'emerald green': 'Emerald',
    'mint green': 'Spring green',
    'lemon yellow': 'Lemon',
    'golden': 'Gold (color)',
    'cream': 'Cream (colour)',
    'dark orange': 'Orange (colour)',
    'peach': 'Peach (color)',
    'violet': 'Violet (color)',
    'lavender': 'Lavender (color)',
    'light purple': 'Lilac (color)',
    'hot pink': 'Hot pink',
    'pastel pink': 'Pink',
    'silver': 'Silver',
    'smoke gray': 'Gray',
    'dark brown': 'Brown',
    'chocolate brown': 'Chocolate (color)',
    'beige': 'Beige',
    'tan': 'Tan (color)',
    'bronze': 'Bronze',
    'metallic gold': 'Gold (color)',
    'transparent': 'Transparency (graphic)',
    'rainbow colors': 'Rainbow',
    
    # Shapes
    'circle': 'Circle',
    'square': 'Square',
    'rectangle': 'Rectangle',
    'triangle': 'Triangle',
    'oval': 'Oval',
    'star': 'Star polygon',
    'heart': 'Heart symbol',
    'diamond': 'Rhombus',
    'pentagon': 'Pentagon',
    'hexagon': 'Hexagon',
    'sphere': 'Sphere',
    'cube': 'Cube',
    'rectangular prism': 'Cuboid',
    'cylinder': 'Cylinder',
    'cone': 'Cone',
    'pyramid': 'Pyramid (geometry)',
    'ellipsoid': 'Ellipsoid',
    'octagon': 'Octagon',
    'heptagon': 'Heptagon',
    'decagon': 'Decagon',
    'parallelogram': 'Parallelogram',
    'trapezoid': 'Trapezoid',
    'arrow': 'Arrow',
    'cross': 'Cross',
    'crescent': 'Crescent',
    
    # Color descriptions
    'bright color': 'Color',
    'dark color': 'Color',
    'light color': 'Color',
    'deep color': 'Color',
    'pastel color': 'Pastel (color)',
    'neon color': 'Neon lighting',
    'metallic color': 'Metallic color',
    'earth tone': 'Earth tone',
    'neutral color': 'Neutral color',
    'warm color': 'Color theory',
    'cool color': 'Color theory',
    
    # Shape properties
    'angle': 'Angle',
    'edge': 'Edge (geometry)',
    'vertex': 'Vertex (geometry)',
    'straight line': 'Line (geometry)',
    'curved line': 'Curve',
    'diagonal': 'Diagonal',
    'perimeter': 'Perimeter',
    'area': 'Area',
    'symmetrical': 'Symmetry',
    'asymmetrical': 'Asymmetry',
    
    # Household items
    'sofa': 'Couch',
    'coffee table': 'Coffee table',
    'television': 'Television',
    'pillow': 'Pillow',
    'carpet': 'Carpet',
    'lamp': 'Lamp',
    'curtain': 'Curtain',
    'armchair': 'Club chair',
    'bookshelf': 'Bookcase',
    'painting': 'Painting',
    'bed': 'Bed',
    'blanket': 'Blanket',
    'bed sheet': 'Bed sheet',
    'pillowcase': 'Pillow',
    'wardrobe': 'Wardrobe',
    'mirror': 'Mirror',
    'alarm clock': 'Alarm clock',
    'dresser': 'Dressing table',
    'night light': 'Night light',
    'coat hanger': 'Clothes hanger',
    'refrigerator': 'Refrigerator',
    'stove': 'Kitchen stove',
    'microwave': 'Microwave oven',
    'pot': 'Cookware and bakeware',
    'pan': 'Frying pan',
    'knife': 'Kitchen knife',
    'spoon': 'Spoon',
    'fork': 'Fork',
    'plate': 'Plate (dishware)',
    'bowl': 'Bowl',
    'cup': 'Cup',
    'glass': 'Drinking glass',
    'kettle': 'Kettle',
    'coffee maker': 'Coffeemaker',
    'toaster': 'Toaster',
    'blender': 'Blender',
    'cutting board': 'Cutting board',
    'trash can': 'Waste container',
    'oven': 'Oven',
    'dishwasher': 'Dishwasher',
    'shower': 'Shower',
    'bathtub': 'Bathtub',
    'toilet': 'Toilet',
    'sink': 'Sink',
    'towel': 'Towel',
    'soap': 'Soap',
    'shampoo': 'Shampoo',
    'toothpaste': 'Toothpaste',
    'toothbrush': 'Toothbrush',
    'bathroom mirror': 'Mirror',
    'toilet paper': 'Toilet paper',
    'hair dryer': 'Hair dryer',
    'broom': 'Broom',
    'dustpan': 'Dustpan',
    'vacuum cleaner': 'Vacuum cleaner',
    'mop': 'Mop',
    'bucket': 'Bucket',
    'cleaning cloth': 'Towel',
    'sponge': 'Sponge',
    'dish soap': 'Dishwashing liquid',
    'detergent': 'Laundry detergent',
    'brush': 'Brush',
    'computer': 'Personal computer',
    'laptop': 'Laptop',
    'phone': 'Smartphone',
    'printer': 'Printer (computing)',
    'speaker': 'Loudspeaker',
    'fan': 'Fan (machine)',
    'air conditioner': 'Air conditioning',
    'heater': 'Heater',
    'iron': 'Clothes iron',
    'washing machine': 'Washing machine',
    'dryer': 'Clothes dryer',
    'table': 'Table (furniture)',
    'chair': 'Chair',
    'cabinet': 'Cabinetry',
    'shelf': 'Shelf (storage)',
    'drawer': 'Drawer (furniture)',
    'desk': 'Desk',
    'office chair': 'Office chair',
    'stand': 'Furniture',
    'vase': 'Vase',
    'picture frame': 'Picture frame',
    'candle': 'Candle',
    'wall clock': 'Clock',
    'plant pot': 'Flowerpot',
    'figurine': 'Figurine',
    'scissors': 'Scissors',
    'hammer': 'Hammer',
    'screwdriver': 'Screwdriver',
    'wrench': 'Wrench',
    'measuring tape': 'Tape measure',
    'drill': 'Drill',
    'saw': 'Saw',
    'pliers': 'Pliers',
    'door': 'Door',
    'window': 'Window',
    'key': 'Key (lock)',
    'lock': 'Lock (security device)',
    
    # Occupations
    'doctor': 'Physician',
    'nurse': 'Nursing',
    'dentist': 'Dentist',
    'pharmacist': 'Pharmacist',
    'surgeon': 'Surgeon',
    'pediatrician': 'Pediatrics',
    'psychologist': 'Psychologist',
    'therapist': 'Therapist',
    'veterinarian': 'Veterinarian',
    'paramedic': 'Paramedic',
    'teacher': 'Teacher',
    'professor': 'Professor',
    'principal': 'Head teacher',
    'tutor': 'Tutor',
    'librarian': 'Librarian',
    'lecturer': 'Lecturer',
    'kindergarten teacher': 'Kindergarten',
    'engineer': 'Engineer',
    'programmer': 'Programmer',
    'computer scientist': 'Computer scientist',
    'IT technician': 'Information technology',
    'web developer': 'Web developer',
    'software engineer': 'Software engineer',
    'mechanical engineer': 'Mechanical engineering',
    'electrical engineer': 'Electrical engineering',
    'architect': 'Architect',
    'accountant': 'Accountant',
    'banker': 'Banker',
    'financial analyst': 'Financial analyst',
    'economist': 'Economist',
    'salesperson': 'Sales',
    'manager': 'Management',
    'CEO': 'Chief executive officer',
    'entrepreneur': 'Entrepreneurship',
    'investor': 'Investor',
    'broker': 'Broker',
    'artist': 'Artist',
    'musician': 'Musician',
    'singer': 'Singer',
    'dancer': 'Dance',
    'actor': 'Actor',
    'director': 'Film director',
    'photographer': 'Photographer',
    'painter': 'Painter',
    'sculptor': 'Sculpture',
    'designer': 'Designer',
    'chef': 'Chef',
    'waiter': 'Waiting staff',
    'barber': 'Barber',
    'manicurist': 'Nail technician',
    'flight attendant': 'Flight attendant',
    'receptionist': 'Receptionist',
    'tour guide': 'Tour guide',
    'hotel staff': 'Hotel',
    'lawyer': 'Lawyer',
    'judge': 'Judge',
    'police officer': 'Police officer',
    'firefighter': 'Firefighter',
    'soldier': 'Soldier',
    'politician': 'Politician',
    'diplomat': 'Diplomat',
    'construction worker': 'Construction worker',
    'electrician': 'Electrician',
    'plumber': 'Plumber',
    'carpenter': 'Carpenter',
    'welder': 'Welding',
    'mechanic': 'Mechanic',
    'pilot': 'Pilot',
    'driver': 'Driver',
    'bus driver': 'Bus driver',
    'truck driver': 'Truck driver',
    'captain': 'Captain (nautical)',
    'sailor': 'Sailor',
    'farmer': 'Farmer',
    'gardener': 'Gardener',
    'biologist': 'Biologist',
    'environmental scientist': 'Environmental science',
    'forest ranger': 'Park ranger',
    'journalist': 'Journalist',
    'reporter': 'Reporter',
    'editor': 'Editor',
    'presenter': 'Television presenter',
    'writer': 'Writer',
    'author': 'Author',
    'blogger': 'Blog',
    'scientist': 'Scientist',
    'researcher': 'Research',
    'physicist': 'Physicist',
    'chemist': 'Chemist',
    'astronomer': 'Astronomer',
    'geologist': 'Geologist',
    'athlete': 'Athlete',
    'coach': 'Coach (sport)',
    'referee': 'Referee',
}

def download_topic_images(topic_name, data_file, output_folder):
    """Download all missing images for a topic"""
    print(f'\n{"="*60}')
    print(f'📁 {topic_name}')
    print(f'{"="*60}')
    
    # Read JS file
    with open(data_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    words = re.findall(r"term2:\s*'([^']+)'", content)
    output_dir = Path(output_folder)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Find missing images
    missing = []
    for word in words:
        filename = sanitize_filename(word)
        if not (output_dir / filename).exists():
            missing.append(word)
    
    print(f'Total words: {len(words)}')
    print(f'Missing images: {len(missing)}')
    print()
    
    if not missing:
        print('✅ All images already downloaded!')
        return 0, 0, len(words)
    
    # Download missing images
    success = 0
    failed = 0
    failed_list = []
    
    for i, word in enumerate(missing, 1):
        filename = sanitize_filename(word)
        output_path = output_dir / filename
        
        # Get Wikipedia title
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
        
        time.sleep(0.3)
    
    print(f'\n✨ {topic_name} complete!')
    print(f'   ✅ Success: {success}')
    print(f'   ❌ Failed: {failed}')
    
    if failed_list:
        print(f'   Failed items: {failed_list}')
    
    return success, failed, len(words) - len(missing)

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
    
    total_success = 0
    total_failed = 0
    total_skipped = 0
    
    print('\n🖼️  VOCABULARY IMAGE DOWNLOADER')
    print('=' * 60)
    print('Using Wikipedia API (reliable, no rate limit)')
    print('=' * 60)
    
    for topic_name, data_file, output_folder in topics:
        success, failed, skipped = download_topic_images(topic_name, data_file, output_folder)
        total_success += success
        total_failed += failed
        total_skipped += skipped
    
    print('\n' + '=' * 60)
    print('🎉 ALL TOPICS COMPLETE!')
    print('=' * 60)
    print(f'✅ Successfully downloaded: {total_success} images')
    print(f'⏭️  Already existed: {total_skipped} images')
    print(f'❌ Failed: {total_failed} images')
    print('=' * 60)

if __name__ == '__main__':
    main()
