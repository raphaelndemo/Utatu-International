# Sanity CMS Setup Instructions

## Overview
Your Utatu International website is now configured to use Sanity CMS for managing blog posts and events. Follow these steps to complete the setup.

## Step 1: Initialize Sanity Project

Run the initialization script in Git Bash:

```bash
bash init-sanity.sh
```

This script will:
- Guide you through creating a Sanity account (if needed)
- Create a new Sanity project
- Automatically create your `.env.local` file with credentials

**OR** manually initialize:

```bash
npx sanity init --create-project utatu-international --dataset production
```

Then manually create `.env.local` with:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Step 2: Restart Development Server

After initialization, restart your Next.js server:

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Step 3: Access Sanity Studio

**Important**: Due to Turbopack compatibility issues in Next.js 16, use Sanity's hosted Studio instead of the local `/studio` route.

Run this command to open your Sanity project:

```bash
npx sanity manage
```

This opens your project dashboard. Click **"Open Studio"** to access the content management interface.

**Alternative**: Visit directly at https://utatu.sanity.studio

## Step 4: Create Content

### Creating a Post:
1. Click "Post" in the Studio
2. Fill in:
   - Title
   - Slug (auto-generated from title)
   - Published date
   - Excerpt (short description)
   - Main image (optional)
   - Body content

### Creating an Event:
1. Click "Event" in the Studio
2. Fill in:
   - Title
   - Event Date & Time
   - Time (display format, e.g., "10:00 AM - 12:00 PM")
   - Location
   - Description
   - Image (optional)

## Step 5: View Your Content

Refresh your homepage at http://localhost:3000 to see your posts and events!

## Features

- **Latest Posts**: Shows the 3 most recent posts
- **Upcoming Events**: Shows future events ordered by date
- **Image Optimization**: Automatic image optimization via Sanity CDN
- **Real-time Updates**: Content updates appear immediately

## Troubleshooting

If you see errors about missing environment variables:
1. Make sure `.env.local` exists in the project root
2. Verify it contains `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
3. Restart the dev server

If the Studio doesn't load:
1. Check that all Sanity packages are installed
2. Verify `sanity.config.ts` has the correct project ID
3. Clear your browser cache
