/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
	listofTodo = [];

    add(Todo) {
        this.listofTodo.push(Todo);
    }

    remove(indexOfTodo) {
        if(indexOfTodo < this.listofTodo.length) {
            this.listofTodo.splice(indexOfTodo, 1);
            //console.log(this.listofTodo);
        }   
        else {
            console.log("Invalid Index");
        }
    }

    update(index, updatedTodo) {
        if(index < this.listofTodo.length) {
            this.listofTodo[index] = updatedTodo;
        }
    }

    getAll() {
        return this.listofTodo;
    }

    get(indexOfTodo) {
        if(indexOfTodo < this.listofTodo.length)
            return this.listofTodo[indexOfTodo];
        else
            return null;
    }

    clear() {
        this.listofTodo.length = 0;
    }

}

let list = new Todo();
list.add('Task 1');
list.add('Task 2');

console.log(list.getAll());

module.exports = Todo;
