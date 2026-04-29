import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const addATask =async (formData) => {
    'use server'
    // const title = formData.get('title');
    // const description = formData.get('description');
    // const priority = formData.get('priority')
    // const status = formData.get('status')
    // const newTask = {title,description,priority,status};

    const newTask = Object.fromEntries(formData.entries());
    // console.log('This is name ',newTask )

    const res = await postTask(newTask);
    if(res.ok){      
     revalidatePath('/task')
    }
    return res;
}