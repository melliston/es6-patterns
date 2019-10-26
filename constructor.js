class Hero {
  constructor(name, specialAbility) {
    // set the property values
    this._name = name;
    this._specialAbility = specialAbility;
  }

  set name(newName){
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  getDetails() {
    return `${this._name} can ${this._specialAbility}`;
  }
}

const IronMan = new Hero('Iron Man', 'Fly');
console.log(IronMan.getDetails());
console.log(IronMan.name);