import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 6000
  await app.listen(port, '0.0.0.0');

  console.log(`App listening on port ${port}`);
}
bootstrap();
