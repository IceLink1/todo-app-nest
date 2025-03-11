import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-todo.dto';
import { TodoService } from './todos.service';

@Controller('todos')
export class TodoController {
  constructor(private postService: TodoService) {}

  @Get('/')
  getTodo() {
    return this.postService.getAll();
  }

  @Post('/')
  createTodo(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }

  @Get('/:id')
  getTodoById(@Param() { id }: any) {
    return this.postService.getById(Number(id));
  }

  @Delete('/:id')
  deleteTodo(@Param() { id }: any) {
    return this.postService.delete(Number(id));
  }
}
