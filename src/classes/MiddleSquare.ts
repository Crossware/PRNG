export default class MiddleSquare implements CalculationType{

  label: string = 'Middle-square Method';
  explanation: string = 'In mathematics, the middle-square method is a method of generating pseudorandom numbers. In practice it is not a good method, since its period is usually very short and it has some severe weaknesses; repeated enough times, the middle-square method will either begin repeatedly generating the same number or cycle to a previous number in the sequence and loop indefinitely.'
  info: string = 'https://en.wikipedia.org/wiki/Middle-square_method';
  
  seed: number = 9999199999;
  digits: number = this.seed.toString().length;
  
  public nextNumber(): number {
    var n = (this.seed * this.seed).toString();
    while(n.length < this.digits * 2) {
      n = "0" + n;
    }
    var start = Math.floor(this.digits / 2);
    var end = start + this.digits;
    this.seed = parseInt(n.substring(start, end));
    return this.seed;
  }

  public nextRandomFloat(): number {
      return this.nextNumber() / 9999999999;
  }

  public checkNumberLimit(): void {
    for(var i = 0; i < 20; i++) {
        console.log(this.nextRandomFloat());
      }
      
      var results = [];
      for(var i = 0; i < 100000; i++) {
        var rand = this.nextNumber();
        if(results[rand]) {
          break;
        }
        results[rand] = true;
      }
      console.log(i);
  }
}
