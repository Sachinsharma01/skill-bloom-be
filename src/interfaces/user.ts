export interface User {
    id?: string;
    email: string;
    name: string;
    username: string;
    password: string;
    referral_code: string;
    profile_image: string;
    created_at: string | undefined;
    updated_at: string | undefined;
    profession: string | undefined;
    country: string | undefined;
    state: string | undefined;
    mobile_number: string;
}
