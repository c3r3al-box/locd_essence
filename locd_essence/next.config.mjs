/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        API_URL: "http://localhost:3000",
        DB_URI: "mongodb://localhost:27017/locd_essence",
    }
};




export default nextConfig;
