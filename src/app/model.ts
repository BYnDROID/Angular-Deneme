export class Model {
    user;
    items;

    constructor(){
        this.user = "BYnDROID";
        this.items = [
            new TodoItem("Kahvaltı", false),
            new TodoItem("Spor", true),
            new TodoItem("Fatura", false),
            new TodoItem("Sinama", false)
          ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}