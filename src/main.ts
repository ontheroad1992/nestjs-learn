import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { core } from './core';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    core(app);
    await app.listen(3000);
}
bootstrap();
