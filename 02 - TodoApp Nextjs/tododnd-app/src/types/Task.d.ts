type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface ITask {
    id: string;
    status: TaskStatus;
    title: string;
    description: string;
}

export interface IColumn {
    id: TaskStatus;
    title: string;
}

export interface IActiveTask {
    activity: string;
    task: ITask;
}