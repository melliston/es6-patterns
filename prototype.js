const car = {
  noOfWheels: 4,
  start() {
    return 'started';
  },
  stop() {
    return 'stopped';
  },
};

// Object.create(proto[, propertiesObject])

const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(myCar.__proto__ === car); // true
car.noOfWheels = 5;
console.log(car.noOfWheels);
console.log(myCar.noOfWheels);
console.log(myCar.owner);
console.log(car.owner);