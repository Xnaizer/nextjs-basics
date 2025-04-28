import { IColumn, ITask } from "@/types/Task";

const COLUMNS: IColumn[] = [
    {
        id: "TODO",
        title: "To Do"
    }, 
    {
        id: "IN_PROGRESS",
        title: "Sedang dikerjakan"
    },
    {
        id: "DONE",
        title: "Doness"
    }
];


const INITIAL_TASKS: ITask[] = [
    {
        id: '1',
        title: 'research',
        description: 'alah bebas aja ini mah',
        status : 'TODO'
    },
    {
        id: '2',
        title: 'design something',
        description: 'alah bebassssssss aja ini mah',
        status : 'IN_PROGRESS'
    },
    {
        id: '3',
        title: 'Api Develop',
        description: 'alahhhh bebas aja ini mah',
        status : 'DONE'
    },
]

export { COLUMNS,INITIAL_TASKS }

