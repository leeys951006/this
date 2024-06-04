class ItsMe {
  constructor() {
    (this.name = '이연승'), (this.age = 30), (this.home = '대전');
  }
  sentence() {
    return this.name + '은 미남이다.';
  }
}

let itsMe = new ItsMe();
console.log(itsMe);
