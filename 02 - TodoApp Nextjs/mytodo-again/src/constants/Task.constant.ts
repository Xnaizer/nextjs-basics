import { IKolom, ITugas } from "@/types/Task";


const COLUMNS: IKolom[] = [
    {
        id: "IN_DEVELOPMENT",
        judul: "To Do"
    }, 
    {
        id: 'ON_PROGRESS',
        judul: "Sedang dikerjakan"
    },
    {
        id: "ACHIEVED",
        judul: "Doness"
    }
];


const INITIAL_TASKS: ITugas[] = [
    {
        id: '1',
        judul: 'research',
        deskripsi: 'alah bebas aja ini mah',
        status : "ACHIEVED"
    },
    {
        id: '2',
        judul: 'design something',
        deskripsi: 'alah bebassssssss aja ini mah',
        status : 'IN_DEVELOPMENT'
    },
    {
        id: '3',
        judul: 'Api Develop',
        deskripsi: 'alahhhh bebas aja ini mah',
        status : "ACHIEVED"
    },
]

export { COLUMNS,INITIAL_TASKS }

