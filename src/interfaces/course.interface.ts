export interface Course {
    id?: number;
    name: string;
    title: string;
    description: string;
    price: number;
    image_url: string;
    category: string;
    author: string;
    duration: number;
    rating: number;
    is_featured: boolean;
    is_published: boolean;
    total_enrollments: number;
    total_lessons: number;
    is_active: boolean;
    is_resource: boolean;
}
