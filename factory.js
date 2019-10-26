/**
 * Factory class is creation pattern,
 * Manages the Creates objects, usually of a similar type.
 * Different but similarities between the two would
 */
class BallFactory {
  createBall(type){
    let ball;
    if (type === 'football' || type === 'soccer') ball = new Football();
    else if (type === 'basketball') ball = new Basketball();
    else throw `Ball Type "${type}" Not Found`;
    ball.roll = () =>{
      return `${ball._type} is rolling`;
    }
    return ball;
  }
}

class Football {
  constructor() {
    this._type = 'Football';
  }
  kick() {
    return 'You Kicked the football';
  }
}

class Basketball {
  constructor(){
    this._type = 'Basketball';
  }
  bounce(){
    return 'You Bounced the basketball';
  }
}

const ballfactory = new BallFactory();
const myFootball = ballfactory.createBall('football');
console.log(myFootball.kick());
console.log(myFootball.roll());
const myBasketball = ballfactory.createBall('basketball')
console.log(myBasketball.roll());
console.log(myBasketball.bounce());

// Attempts a ball type that isnt there.
try{
  const golfBall = ballfactory.createBall('golf');
}
catch(e){
  console.log(e);
}

