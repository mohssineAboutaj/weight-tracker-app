/* let x:Array[number] = [1,2,3],
    y:Array:[string] = ["a","e","u","f"],
    z:Array:[string] = ["#","@","$"],
    final:Array:[any] = [].concat(x, y);

console.log(final) */
class User {
  name

  constructor(name) {
    this.name = name
    console.log(`your name is ${this.name} & you have ${this.name} years`);
  }
}

User("mohssine", 12)