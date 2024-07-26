import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TaskModule } from './tasks/shared/task/task.module'
import { TesteModule } from './teste/teste.module';

@Module({
    imports: [TaskModule, TesteModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
