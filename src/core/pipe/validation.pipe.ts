import { ValidationPipe } from '@nestjs/common';
import { ParameterException } from '../exception/parameter.exception';

export const validationPip = new ValidationPipe({
    whitelist: true,    // 去掉 dto 中不存在的元素
    forbidUnknownValues: true,
    transformOptions: { // class-transform 配置
        enableCircularCheck: true, // 开启类型转换
    },
    exceptionFactory(errors) {
        if (errors.length > 0) {
            // 获取第一条错误消息
            throw new ParameterException(Object.values(errors[0].constraints)[0]);
        }
        return true;
    },
});
