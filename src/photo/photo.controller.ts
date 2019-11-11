import { Controller, Post, Body } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';

@Controller('photo')
export class PhotoController {
    @Post()
    create(@Body() createPhotoDto: CreatePhotoDto) {
        
    }
}
