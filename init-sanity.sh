#!/bin/bash

# Sanity Initialization Script for Utatu International
echo "🚀 Initializing Sanity CMS for Utatu International..."
echo ""

# Check if sanity is installed
if ! command -v sanity &> /dev/null; then
    echo "📦 Sanity CLI not found. Installing globally..."
    npm install -g @sanity/cli
fi

# Initialize Sanity project
echo "🔧 Initializing Sanity project..."
echo "Please follow the prompts to:"
echo "  1. Login to your Sanity account (or create one)"
echo "  2. Create a new project or select existing"
echo "  3. Use 'production' as the dataset name"
echo ""

npx sanity init --project-plan free --dataset production --create-project utatu-international --output-path ./sanity-temp

# Extract project ID from the temp folder
if [ -d "./sanity-temp" ]; then
    PROJECT_ID=$(grep -o 'projectId: "[^"]*"' ./sanity-temp/sanity.config.ts | cut -d'"' -f2)
    
    if [ ! -z "$PROJECT_ID" ]; then
        echo ""
        echo "✅ Sanity project created successfully!"
        echo "📝 Project ID: $PROJECT_ID"
        echo ""
        echo "Creating .env.local file..."
        
        # Create .env.local file
        cat > .env.local << EOF
NEXT_PUBLIC_SANITY_PROJECT_ID=$PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
EOF
        
        echo "✅ .env.local file created with your Sanity credentials"
        echo ""
        echo "🧹 Cleaning up temporary files..."
        rm -rf ./sanity-temp
        
        echo ""
        echo "🎉 Setup complete! Next steps:"
        echo "  1. Restart your Next.js dev server (npm run dev)"
        echo "  2. Visit http://localhost:3000/studio to access Sanity Studio"
        echo "  3. Create some posts and events"
        echo "  4. Refresh your homepage to see the content"
    else
        echo "❌ Could not extract project ID. Please check the output above."
        rm -rf ./sanity-temp
    fi
else
    echo "❌ Sanity initialization failed. Please try running 'npx sanity init' manually."
fi
