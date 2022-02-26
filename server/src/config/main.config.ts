import { registerAs } from '@nestjs/config'

export default registerAs('main', () => ({
  host: 'localhost',
  port: process.env.SERVER_PORT,
}));
