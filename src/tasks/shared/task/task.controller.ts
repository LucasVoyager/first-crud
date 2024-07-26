import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { TaskService } from './task.service'

import { Task } from './task'

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get('/buscarTodos')
    async getAll(): Promise<Task[]> {
        return this.taskService.getAll()
    }

    @Get('/id')
    async getById(@Query('id') id: number): Promise<Task> {
        return this.taskService.getById(id)
    }

    @Post('/create')
    async create(@Body() request: Task): Promise<Task[]> {
        return this.taskService.create(request)
    }

    @Put('/update')
    async update(@Body() request: Task): Promise<Task[]> {
        return this.taskService.update(request)
    }

    @Delete('/delete')
    async delete(@Query('id') id: number): Promise<Task[]> {
        return this.taskService.delete(id)
    }
}
