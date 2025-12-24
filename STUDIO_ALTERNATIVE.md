# Alternative: Standalone Sanity Studio

Due to Turbopack compatibility issues with embedded Sanity Studio in Next.js 16, you have two options:

## Option 1: Use Sanity's Hosted Studio (Recommended)

Visit your project directly on Sanity's platform:

```
https://utatu.sanity.studio
```

Or access via:
```bash
npx sanity manage
```

This opens your project dashboard where you can:
- Manage content through the hosted Studio
- No local setup issues
- Works immediately

## Option 2: Standalone Local Studio

Create a separate Sanity Studio project:

```bash
# In a different directory
cd ..
mkdir utatu-studio
cd utatu-studio
npx sanity init --project-id 4c5d92s1 --dataset production
npm run dev
```

This runs Studio separately on a different port (usually 3333).

## Current Setup Still Works!

Your **homepage integration is complete and working**:
- Posts and events fetch from Sanity ✓
- Images load from Sanity CDN ✓
- Data transforms correctly ✓

You just need to manage content through Sanity's hosted platform instead of `/studio`.

## Quick Start

1. Run `npx sanity manage` to open your project
2. Click "Open Studio" in the dashboard
3. Create posts and events
4. Refresh http://localhost:3000 to see them!
