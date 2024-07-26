import { Injectable } from '@nestjs/common'
import { Task } from './task'

@Injectable()
export class TaskService {
    tasks: Task[] = [
        { id: 1, description: 'Task 1', completed: true },
        { id: 2, description: 'Task 2', completed: false },
        { id: 3, description: 'Task 3', completed: true },
        { id: 4, description: 'Task 4', completed: false },
    ]

    getAll() {
        return this.tasks
    }
    getById(id: number) {
        const task = this.tasks.find((v) => v.id == id)
        return task
    }

    create(task: Task) {
        let lastId = 0
        if (this.tasks.length > 0) {
            lastId = this.tasks[this.tasks.length - 1].id
        }
        const taskAdd: Task = {
            id: lastId,
            description: task.description,
            completed: task.completed,
        }
        this.tasks.push(taskAdd)
        return this.tasks
    }

    update(task: Task) {
        console.log(this.tasks)
        const taskArray: Task[] = this.tasks
        for (const registros of taskArray) {
            if (registros.id == task.id) {
                registros.description = task.description
                registros.completed = task.completed
            }
        }
        this.tasks = taskArray
        console.log('DEPOIS DE ATUALIZAR')
        console.log(this.tasks)
        return this.tasks
    }

    delete(id: number) {
        console.log(this.tasks)
        const index = this.tasks.findIndex((v) => v.id == id)
        this.tasks.splice(index, 1)
        console.log('cortado')
        console.log(this.tasks)
        return this.tasks
    }
}
