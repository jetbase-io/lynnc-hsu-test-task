export const baseURL = `${
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SITE_URL
    : `https://${process.env.VERCEL_URL}`
}/api`;
