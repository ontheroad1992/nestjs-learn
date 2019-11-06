import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { ParameterException } from '../exception/parameter.exception';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value, 10);
        if (isNaN(val)) {
            throw new ParameterException();
        }
        return val;
    }
}
