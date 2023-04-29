import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { DatabaseConfg } from './config/database_config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerModule } from './worker/worker.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfg
    }),
    WorkerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
