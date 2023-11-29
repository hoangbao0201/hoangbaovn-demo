export const API_BASE_URL = process.env.NODE_ENV == "production"
? process.env.NEXT_PUBLIC_BASE_URL
: "http://localhost:4000";
// export const API_BASE_URL = "http://localhost:4000";

export const DEFAULT_METADATA = {
    nameWeb: "HOANGBAOVN",
    tags: ["hoangbaovn", "webdev"],
    webUrl: "http://localhost:3000"
}