import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function swaggerOptions(app: INestApplication) {
    /** swagger */
    const options = new DocumentBuilder()
        .setTitle('Users example')
        .setDescription('this users API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
}
