import dotenv from 'dotenv';
dotenv.config();

export default {
  databaseUrl: process.env.DATABASE_URL,
  dir: 'migrations',
};
