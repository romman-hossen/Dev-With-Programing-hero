import { SuccessIcon } from '@heroui/react';
import data from '../data/data.json'

export const getTasks = async ()=>{
    return data;    
}
export const postTask = async (newTask) =>{
    data.unshift(newTask);
    newTask.id = data.length + 1;
    return {success: true, message: 'Task added successfully'}
}