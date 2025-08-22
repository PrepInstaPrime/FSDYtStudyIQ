import dotenv from 'dotenv';
dotenv.config();
const mongodbURI=process.env.mongodb;
const port = process.env.port;
export {mongodbURI, port}