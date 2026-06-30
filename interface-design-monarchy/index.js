class Person {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.isALive = true;
  }
}

class Monarchy {
  constructor(name) {
    this.king = new Person(name);
  }

  _findPerson(name) {
    let king = this.king;
    let q = [king];
    while (q.length > 0) {
      let current = q.shift();
      if (current.name === name) return current;
      for (let child of current.children) {
        q.push(child);
      }
    }
    return null;
  }
  _dfs(node, order = []) {
    if (!node) return order;
    if (node.isALive) order.push(node.name);
    for (let child of node.children) {
      this._dfs(child, order);
    }
    return order;
  }
  birth(child, parent) {
    let newPerson = new Person(child);
    let parentNode = this._findPerson(parent);
    if (parentNode) {
      parentNode.children.push(newPerson);
    }
  }

  death(name) {
    let person = this._findPerson(name);
    if (person) {
      person.isALive = false;
    }
  }
  getOrderSuccession() {
    let king = this.king;
    return this._dfs(king);
  }
}

let x = new Monarchy("king");
