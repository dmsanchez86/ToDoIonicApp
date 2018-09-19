import { ListItem } from "./index";

export class List {
    id: number;
    title: string;
    createdAt: Date;
    finishAt: Date;
    finished: boolean;
    items: ListItem[];

    constructor(title: string){
        this.title = title;

        this.finished = false;
        this.createdAt = new Date();
        this.items = [];

        this.id = new Date().getTime();
    }
}