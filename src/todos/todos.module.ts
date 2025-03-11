import { Module } from "@nestjs/common";
import { TodoService } from "./todos.service";
import { TodoController } from "./todos.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Todo } from "./todos.model";

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [SequelizeModule.forFeature([Todo])],
})
export class TodoModule {}
