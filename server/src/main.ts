import { NestFactory } from '@nestjs/core'
import cookieParser from 'cookie-parser'
import { AppModule } from '~server/lib/app.module'
import { config } from 'dotenv'

config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(cookieParser());
  app.enableCors();
  await app.listen(3000, 'localhost')
  console.log(`Проект запущен по адресу - http://localhost:3000/graphql`)
}

bootstrap()
