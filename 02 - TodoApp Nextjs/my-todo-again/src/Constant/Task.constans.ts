import { IColumn, ITask } from "@/types/task";



export const COLUMNS: IColumn[] = [
    {
        id: 'NEW',
        title: "Fresh Task",
    },
    {
        id: 'IN_PROGRESS',
        title: 'On Going Task'
    },
    {
        id: 'DONE',
        title: 'Achieved Task'
    }
]


export const INITIAL_TASKS: ITask[] = [
    {
        id: '1',
        title: "Typescript Learning Path",
        description : 'Learning TS On the line',
        status: 'NEW'
    },
    {
        id: '2',
        title: "Learning Web3 Basics",
        description: 'On Going To Be FUllStack',
        status: 'IN_PROGRESS',
    },
    {
        id: '3',
        title: 'Learning Javascript',
        description: 'Passed Learning JS',
        status: 'DONE',
    }
]