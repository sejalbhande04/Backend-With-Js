import mongoose from 'mongoose';

 const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, 'Content is required'],
            
        }, 
        completed:{
            type: Boolean,
            default: false
        },
        createdBy:{
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        subTodos: [{
            type: mongoose.Schema.Types.ObjectId,
            ref:'SubTodo'
        }] // array of subTodo IDs

        

    },
    {timestamps:true}
)

export const Todo = mongoose.model('Todo', todoSchema);

 