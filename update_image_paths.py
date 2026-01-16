#!/usr/bin/env python3
"""
Update vocabulary JS files to include image paths
"""
import re
from pathlib import Path

def sanitize_filename(word):
    """Create safe filename from word"""
    filename = re.sub(r'[^\w\s-]', '', word)
    filename = re.sub(r'[-\s]+', '_', filename)
    return filename.lower() +'.jpg'

def update_vocabulary_file(data_file, image_folder_name):
    """Update a vocabulary JS file to include image paths"""
    print(f"\n📝 Updating: {data_file.name}")
    
    with open(data_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the topic name for the image path helper
    vocab_name_match = re.search(r'const (\w+Vocabulary)', content)
    if not vocab_name_match:
        print(f"  ❌ Could not find vocabulary name")
        return False
    
    # Add image path helper function at the top if not exists
    if 'const imagePath' not in content:
        # Insert after the comment block
        insert_pos = content.find('const ' + vocab_name_match.group(1))
        if insert_pos > 0:
            image_helper = f"\nconst imagePath = (fileName) => `images/{image_folder_name}/${{fileName}}`;\n\n"
            content = content[:insert_pos] + image_helper + content[insert_pos:]
    
    # Find and update each word entry
    def add_image_path(match):
        term1 = match.group(1)
        term2 = match.group(2)
        
        # Check if image already exists
        if ', image:' in match.group(0):
            return match.group(0)  # Already has image
        
        # Create image filename from term2
        filename = sanitize_filename(term2)
        filename_without_ext = filename.replace('.jpg', '')
        
        # Add image path
        return f"{{ term1: '{term1}', term2: '{term2}', image: imagePath('{filename_without_ext}') }}"
    
    # Pattern to match word entries without images
    pattern = r"\{\s*term1:\s*'([^']+)',\s*term2:\s*'([^']+)'\s*\}"
    content = re.sub(pattern, add_image_path, content)
    
    # Write back
    with open(data_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"  ✅ Updated successfully")
    return True

def main():
    """Main function"""
    script_dir = Path(__file__).parent
    
    files_to_update = [
        (script_dir / 'js/data/fruits.js', 'fruits'),
        (script_dir / 'js/data/vegetables.js', 'vegetables'),
        (script_dir / 'js/data/household.js', 'household'),
        (script_dir / 'js/data/occupations.js', 'occupations'),
        (script_dir / 'js/data/colors-shapes.js', 'colors-shapes'),
    ]
    
    print("\n" + "="*70)
    print("🔧 UPDATING VOCABULARY FILES WITH IMAGE PATHS")
    print("="*70)
    
    success_count = 0
    for data_file, folder_name in files_to_update:
        if update_vocabulary_file(data_file, folder_name):
            success_count += 1
    
    print("\n" + "="*70)
    print(f"✨ COMPLETE: Updated {success_count}/{len(files_to_update)} files")
    print("="*70 + "\n")

if __name__ == '__main__':
    main()
