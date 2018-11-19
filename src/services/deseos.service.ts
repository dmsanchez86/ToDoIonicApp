import { Injectable } from '@angular/core';
import { List } from '../models/';

@Injectable()

export class DeseosService {
    lists: List[] = [];

    constructor() {
        const list1 = new List('Recolectar piedras del infinito');
        const list2 = new List('Heroes a Vencer');

        this.lists.push(list1, list2);
    }
}
