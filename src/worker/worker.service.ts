import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm/lib/typeorm-crud.service';
import { Worker } from './entities/worker.entity';

@Injectable()
export class WorkerService extends TypeOrmCrudService<Worker> {
    constructor(@InjectRepository(Worker) private workeRepo) {
        super(workeRepo);
    }
}