type URL_TYPES = 'EXTERNAL_LINK' | 'LEARNING_AREA'

export interface Course {
    id: string,
    name: string,
    thumbnail: string,
    description: string,
    category: string,
    type: URL_TYPES,
    accessUrl: string,
    supportUrl: string,
    studentId: string,
    createdAt: string,
    updatedAt: string,
}