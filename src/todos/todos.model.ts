import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TodoCreationAttrs {
    title: string;
    content: string;
    type:string
    isComplited:boolean;
}

@Table({tableName: 'Todos'})
export class Todo extends Model<Todo, TodoCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    content: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    type: string;

    @Column({type: DataType.BOOLEAN })
    isComplited: boolean;
}
