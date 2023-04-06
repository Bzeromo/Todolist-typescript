import { createReducer, createSlice } from "@reduxjs/toolkit";
import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Task {
    id: string;
    content: string;
    complete: boolean;
}

// export const addTask = createAction('tasks/add', (content: string) => {
//     return {
//         payload: {
//             id: v4(),
//             content,
//             complete: false,
//         }
//     }
// })

// export const updateTask = createAction('tasks/update', (id: string, content: string, complete: boolean) => {
//     return {
//         payload: {
//             id,
//             content,
//             complete
//         }
//     }
// }) ;

// export const removeTask = createAction('tasks/remove', (id: string) => {
//     return {
//         payload: { id },
//     };
// });

// export const tasks = createReducer([] as Task[], {
//     [addTask.type]: (state: Task[], action: PayloadAction<Task>) => {
//         state.push(action.payload);
//     },
//     [updateTask.type]: (state: Task[], action: PayloadAction<Task>) => {
//         const index = state.findIndex((task) => task.id === action.payload.id);
//         state[index] = action.payload;
//     },
//     [removeTask.type]: (state: Task[], action: PayloadAction<Pick<Task, "id">>) => {
//         const index = state.findIndex((task) => task.id === action.payload.id);
//         if(index !== 1) state.splice(index, 1);
//     },
// });

export const tasks = createSlice({
    name: 'tasks',
    initialState: [] as Task[],
    reducers: {
        add: {
            reducer: (state: Task[], action: PayloadAction<Task>) => {
                state.push(action.payload);
            },
            prepare: (content: string) => ({
                payload: {
                    id: v4(),
                    content,
                    complete: false
                }
            })
        },
        update: {
            reducer: (state: Task[], action: PayloadAction<Task>) => {
                const index = state.findIndex((task) => task.id === action.payload.id);
                state[index] = action.payload;
            },
            prepare: (id: string, content: string, complete: boolean) => ({
                payload: {
                    id,
                    content,
                    complete
                },
            })
        },
        remove: {
            reducer: (state: Task[], action: PayloadAction<Pick<Task, "id">>) => {
                const index = state.findIndex((task) => task.id === action.payload.id);
                if(index !== -1) state.splice(index, 1);
            },
            prepare: (id: string) => ({
                payload: { id }
            })
        }
    }
})