import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function swaggerOptions(app: INestApplication) {
    /** swagger */
    const options = new DocumentBuilder()
        .setTitle('用户服务')
        .setDescription('主要包含：登录、注册、用户中心、刷新令牌的服务')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
}
