type Course = {
    id: number,
    description: string,
    iconUrl: string,
    longDescription: string,
    category: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED',
    lessonsCount?: number
}
