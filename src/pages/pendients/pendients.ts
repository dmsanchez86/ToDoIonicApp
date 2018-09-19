import { Component } from "@angular/core";
import { ToDoService } from '../../services/todo.service';

@Component({
    selector: 'page-pendients',
    templateUrl: 'pendients.html'
})
export class PendientsPage{
    constructor(private _toDoService: ToDoService) {}
}