export const APP_HOSTNAME = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_HOSTNAME;

export default APP_HOSTNAME;
