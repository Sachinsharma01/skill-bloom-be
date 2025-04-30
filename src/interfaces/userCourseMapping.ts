export interface UserCourseMapping {
    id: number;
    user_id: number;
    course_id: number;
    created_at: Date;
    updated_at: Date;
    is_complete: boolean;
    progress: number;
    certificate_url: string;
}