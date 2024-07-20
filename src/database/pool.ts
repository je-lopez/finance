import { Pool } from 'node-postgres';

interface PoolConfig {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}
// TODO: add logging
async function createPool(): Promise<Pool> {
  try {
    const pool = new Pool({
      user: process.env.DB_USER as string,
      host: process.env.DB_HOST as string,
      database: process.env.DB_DATABASE as string,
      password: process.env.DB_PWD as string,
      port: Number(process.env.DB_PORT) as number,
    } as PoolConfig);

    console.log('Connected to database pool successfully');
    return pool;
  } catch (error) {
    console.error('Error creating database pool:', error);
    throw error;
  }
}

export default createPool;
