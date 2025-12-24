# Utatu International School Website

A modern, responsive website for Utatu International School built with Next.js 16, TypeScript, Tailwind CSS, and Sanity CMS.

## About

Utatu International School is an international school based in Nairobi, Kenya, offering comprehensive education from Foundation Stage (Kindergarten) through International Advanced Level (A-Level). The school provides online IGCSE and A-Level curricula with a focus on inclusive education, personalized learning, and academic excellence.

## Features

- 🏫 **School Information Pages**: Detailed pages for all school levels
  - Special Needs Education
  - Foundation Stage (Ages 3-5)
  - Preparatory School (Year 1-6)
  - Junior High School (Year 7-9)
  - Senior High School (Year 10-11)
  - International Advanced School (Year 12-13)

- 📝 **Blog System**: Integrated with Sanity CMS for managing posts and events
- 📱 **Responsive Design**: Mobile-first approach with optimized navigation
- 🎨 **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- ⚡ **Fast Performance**: Optimized with Next.js App Router and server-side rendering

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Sanity.io account and project
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/raphaelndemo/Utatu-International.git
cd Utatu-International
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_HOST=utatu
```

**Required Variables:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID (safe to expose publicly)
- `NEXT_PUBLIC_SANITY_DATASET` - Your Sanity dataset name (e.g., "production", safe to expose publicly)

**Optional Variables:**
- `SANITY_STUDIO_HOST` - Custom studio host name for Sanity CLI

> **Note**: The `NEXT_PUBLIC_` prefix exposes these values to the browser. This is intentional and safe for Sanity project IDs and dataset names. They are designed to be public. However, **never expose** API tokens or write secrets with `NEXT_PUBLIC_` prefix.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio) for content management.

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── fee-structure/   # Fee structure page
│   │   ├── posts/           # Blog posts pages
│   │   └── schools/         # Individual school pages
│   ├── components/          # React components
│   │   ├── layout/          # Header, Footer
│   │   └── ui/              # UI components
│   └── lib/                 # Utility functions
│       └── sanity/          # Sanity client and utilities
├── sanity/                  # Sanity schema definitions
├── public/                  # Static assets
└── sanity.config.ts         # Sanity configuration
```

## Sanity CMS Setup

For detailed Sanity CMS setup instructions, see [SANITY_SETUP.md](./SANITY_SETUP.md).

## Deployment

### Deploy to Vercel

1. **Set Environment Variables in Vercel:**
   - Go to your project settings in Vercel
   - Navigate to "Settings" → "Environment Variables"
   - Add the following variables for **Production**, **Preview**, and **Development**:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `SANITY_STUDIO_HOST` (optional)

2. **Important**: After adding environment variables:
   - Click **"Save"** button
   - **Redeploy** your project (go to Deployments → click the three dots → Redeploy)
   - Or push a new commit to trigger a new deployment

3. **Connect Repository:**
   - Link your GitHub repository to Vercel
   - Vercel will automatically deploy on every push to the main branch

### Troubleshooting Vercel Deployment

If you encounter "Configuration must contain `projectId`" error:

1. ✅ Verify all environment variables are set correctly in Vercel
2. ✅ Make sure you clicked **"Save"** after adding variables
3. ✅ Ensure variables are enabled for the correct environments (Production, Preview, Development)
4. ✅ **Redeploy** your project after adding/updating variables
5. ✅ Check that variable names match exactly (case-sensitive)
6. ✅ Verify your Sanity project ID and dataset are correct

The build will fail if required environment variables are missing. The code includes validation that will show clear error messages.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## License

© 2025 Utatu International School. All rights reserved.
