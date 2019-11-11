import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
        private readonly con
    ) {}

    findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }

    async create(photo: Photo): Promise<any> {
        this.photoRepository = photo;
        await this.photoRepository.save();
        return true;
    }
}
