export interface UserCourseMapping {
    id: number;
    user_id: number;
    course_id: number;
    is_complete: boolean;
    progress: number;
    certificate_url: string;
}