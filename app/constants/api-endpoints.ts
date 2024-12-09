export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const API_ENDPOINTS = {
    LOGIN : `${BACKEND_URL}/sign-in`,
    SIGNUP : `${BACKEND_URL}/sign-up`,
}