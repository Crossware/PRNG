export default class LinearCongruential implements CalculationType{

  label: string = 'Linear Congruention Generator';
  explanation: string = 'A linear congruential generator (LCG) is an algorithm that yields a sequence of pseudo-randomized numbers calculated with a discontinuous piecewise linear equation. The method represents one of the oldest and best-known pseudorandom number generator algorithms. The theory behind them is relatively easy to understand, and they are easily implemented and fast, especially on computer hardware which can provide modular arithmetic by storage-bit truncation.'
  info: string = 'https://en.wikipedia.org/wiki/Linear_congruential_generator';
  
  seed: number = 12234;
  multiplier: number = 1664525;
  increment: number = 1013904223;
  modulus: number = Math.pow(2, 32);

  public nextNumber(): number {
    console.log(this.seed);
    this.seed = (this.multiplier * this.seed + this.increment) % this.modulus;
    return this.seed;
  }

  public nextRandomFloat(): number {
    return this.nextNumber() / this.modulus;
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