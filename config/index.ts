const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
export const server = dev ? `http://localhost:${port}` : "";
