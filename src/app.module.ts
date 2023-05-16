import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { DatabaseConfg } from './config/database_config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerModule } from './worker/worker.module';
import { Worker } from './worker/entities/worker.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'cinco',
      database: 'worker',
      entities: [Worker],
      synchronize: true,
    }),
    WorkerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
