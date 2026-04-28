import { AddTask } from '@/components/AddTask';
import TaskCard from '@/components/TaskCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TaskPage = async() => {
    const tasks =await getTasks();
    console.log(tasks)
    return (
        <div className='space-y-5'>
            <h2>{tasks.length}</h2>
            <AddTask/>
            <div className='grid grid-cols-4 gap-6'>
                {tasks.map(task => <TaskCard key={task.id} task={task}/>)}
            </div>
            
        </div>
    );
};

export default TaskPage;