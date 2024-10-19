#!/bin/bash

# Directory containing JavaScript files
js_dir="./public"

# Check if the directory exists
if [ ! -d "$js_dir" ]; then
    echo "Error: Directory '$js_dir' not found."
    exit 1
fi

tsc
echo "TypeScript components compiled."

find "$js_dir" -type f -name "*.js" -exec mv {} ./public/ \;

find "$js_dir" -type d -empty -delete

echo "Build and flattening complete!"

rm ./public/main.js

npm run transpile
echo "JavaScript files transpiled to public"

# Delete JavaScript files
echo "Deleting JavaScript files from $js_dir ..."
find "$js_dir" -type f -name '*.js' ! -name 'main.js' -delete

echo "JavaScript files deleted successfully."
