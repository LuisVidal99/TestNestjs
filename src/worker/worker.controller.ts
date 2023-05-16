import { Controller } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Worker } from './entities/worker.entity';

@Crud({
  model: {
    type: Worker
  }
})
@Controller('worker')
export class WorkerController implements CrudController<Worker>{
  constructor(public service: WorkerService) {}
}
