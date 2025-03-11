import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-todo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todos.model';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

  async getAll() {
    const todos = await this.todoRepository.findAll();
    return todos;
  }

  async getById(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });
    return todo;
  }

  async create(dto: CreatePostDto) {
    const todo = await this.todoRepository.create({ ...dto });
    return todo;
  }

  async delete(id: number) {
    await this.todoRepository.destroy({ where: { id } });
    return { deleted: true };
  }
}
