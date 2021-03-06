import { INestApplication } from '@nestjs/common';
import { logger } from './middleware/logger.middleware';
import { AllExceptionFiliter } from './exception/all-filiter.exception';
import { validationPip } from './pipe/validation.pipe';
import { RolesGuard } from './guard/roles.guard';
import { jwtPassport } from './middleware/jwt-passport.middleware';
import { swaggerOptions } from './swagger/swagger.options';
import { safeOptions } from './safe/safe.options';
import * as compression from 'compression';

export function core(app: INestApplication): void {
    /** 压缩 */
    app.use(compression());
    /** 日志中间件 */
    app.use(logger);
    /** 异常过滤 */
    app.useGlobalFilters(new AllExceptionFiliter());
    /** swagger */
    swaggerOptions(app);
    /** 安全设置 */
    safeOptions(app);
    /** 令牌解析 */
    app.use(jwtPassport);
    /** 参数校验管道 */
    app.useGlobalPipes(validationPip);
    /** 路由守卫 */
    app.useGlobalGuards(new RolesGuard());
}
