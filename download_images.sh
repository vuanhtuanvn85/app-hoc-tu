#!/bin/bash
# Download images from Unsplash Source API
# This API doesn't require authentication

# Function to sanitize filename
sanitize_filename() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/_/g'
}

# Function to download image
download_image() {
    query="$1"
    output_file="$2"
    
    if [ -f "$output_file" ]; then
        echo "  ⏭️  SKIP: $query (exists)"
        return 0
    fi
    
    echo -n "  ⬇️  $query..."
    if curl -s -L "https://source.unsplash.com/800x800/?$query" -o "$output_file" --max-time 30; then
        if [ -s "$output_file" ]; then
            echo " ✅"
            return 0
        else
            rm -f "$output_file"
            echo " ❌ (empty)"
            return 1
        fi
    else
        rm -f "$output_file"
        echo " ❌ (failed)"
        return 1
    fi
}

# Extract words from JS file
extract_words() {
    grep "term2:" "$1" | sed "s/.*term2: '\([^']*\)'.*/\1/"
}

# Process a topic
process_topic() {
    topic_name="$1"
    data_file="$2"
    output_dir="$3"
    
    echo ""
    echo "======================================================================"
    echo "📁 TOPIC: $topic_name"
    echo "======================================================================"
    echo ""
    
    mkdir -p "$output_dir"
    
    words=$(extract_words "$data_file")
    total=$(echo "$words" | wc -l | tr -d ' ')
    count=0
    success=0
    
    echo "Found $total words"
    echo ""
    
    while IFS= read -r word; do
        count=$((count + 1))
        filename=$(sanitize_filename "$word").jpg
        
        echo -n "[$count/$total] "
        if download_image "$word" "$output_dir/$filename"; then
            success=$((success + 1))
        fi
        
        # Progress update every 10 images
        if [ $((count % 10)) -eq 0 ]; then
            echo ""
            echo "📊 Progress: $count/$total ($(((count * 100) / total))%) - Success: $success"
            echo ""
        fi
        
        # Rate limiting: 1 second between requests
        sleep 1
    done <<< "$words"
    
    echo ""
    echo "======================================================================"
    echo "✨ COMPLETE: $topic_name - $success/$total images"
    echo "======================================================================"
    echo ""
}

# Main
echo ""
echo "======================================================================"
echo "🎨 VOCABULARY IMAGE DOWNLOADER"
echo "======================================================================"
echo "Downloading ~500 images from Unsplash"
echo "Estimated time: 10-15 minutes"
echo "======================================================================"
echo ""

# Process each topic
process_topic "Fruits 🍎" "js/data/fruits.js" "images/fruits"
echo "⏸️  Waiting 5 seconds..."
sleep 5

process_topic "Vegetables 🥕" "js/data/vegetables.js" "images/vegetables"
echo "⏸️  Waiting 5 seconds..."
sleep 5

process_topic "Household 🏠" "js/data/household.js" "images/household"
echo "⏸️  Waiting 5 seconds..."
sleep 5

process_topic "Occupations 👨‍💼" "js/data/occupations.js" "images/occupations"
echo "⏸️  Waiting 5 seconds..."
sleep 5

process_topic "Colors & Shapes 🎨" "js/data/colors-shapes.js" "images/colors-shapes"

echo ""
echo "======================================================================"
echo "🎉 ALL TOPICS COMPLETE!"
echo "======================================================================"
echo ""
