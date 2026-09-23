import { defineCliConfig } from 'sanity/cli'

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET environment variable')
}

export default defineCliConfig({
    api: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4c5d92s1',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    },
    deployment: {
        appId: 'g3bpsfkpgquus5qe7gq578e3',
    },
    studioHost: process.env.SANITY_STUDIO_HOST || undefined,
})
