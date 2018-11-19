import { ListaItem } from "./index";

export class Lista {
    id: number;
    title: string;
    createdAt: Date;
    finishAt: Date;
    finished: boolean;
    items: ListaItem[];

    constructor(title: string){
        this.title = title;

        this.finished = false;
        this.createdAt = new Date();
        this.items = [];

        this.id = new Date().getTime();
    }
}
