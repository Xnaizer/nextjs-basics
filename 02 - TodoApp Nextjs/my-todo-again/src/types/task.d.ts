// task.d.ts itu maksudnya adalah declaration type disini

type StatusTask = 'NEW' | 'IN_PROGRESS' | 'DONE';

export interface ITask {
    id: string;
    status: StatusTask;
    title: string;
    description: string;
}

export interface IColumn {
    id: StatusTask;
    title: string;
}

export interface IActiveTask {
    activity: string;
    task: ITask;
}