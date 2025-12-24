export interface SanityPost {
    _id: string
    title: string
    slug: {
        current: string
    }
    publishedAt: string
    excerpt: string
    mainImage?: {
        asset: {
            _ref: string
            _type: 'reference'
        }
        alt?: string
    }
    body?: any[]
}

export interface SanityEvent {
    _id: string
    title: string
    eventDate: string
    time: string
    location: string
    description?: any[]
    image?: {
        asset: {
            _ref: string
            _type: 'reference'
        }
        alt?: string
    }
}
