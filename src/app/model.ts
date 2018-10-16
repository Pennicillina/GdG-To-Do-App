export class Model {
    user;
    items;

    constructor() {
        this.user = 'Matteo';
        this.items = [new ToDoItem('Comprare detersivo', false),
                        new ToDoItem('Pagare bollette', false),
                        new ToDoItem('Innaffiare piante', true),
                        new ToDoItem('Chiamare mamma', true)];
    }
}

export class ToDoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
