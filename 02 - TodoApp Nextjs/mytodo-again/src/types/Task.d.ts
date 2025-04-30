type TugasStatus = 'ON_PROGRESS' | 'IN_DEVELOPMENT' | 'ACHIEVED';

export interface ITugas {
    id: string;
    status: TugasStatus;
    judul: string;
    deskripsi: string;
}

export interface IKolom {
    id: TugasStatus;
    task: ITugas;
}