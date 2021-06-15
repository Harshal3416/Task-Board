import { Action } from "@ngrx/store";
import { TodoActionTypes } from "../shared/todo-actions-types.enums";

export class ActionParent implements Action{
    type: any;
    payload: any;
}

export class TodoAdd implements ActionParent{
    type: TodoActionTypes.Add;
    constructor(public payload: any){}
}