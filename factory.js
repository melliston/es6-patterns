class BallFactory {
  createBall(type){
    let ball;
    if (type === 'football' || type === 'soccer') ball = new Football();
    else if (type === 'basketball') ball = new Basketball();
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
