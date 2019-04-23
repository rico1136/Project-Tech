// Your code here.
class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(object){
        let plus = new Vec((this.x + object.x),(this.y + object.y));
        return plus;
    }
    minus(object){
        let minus = new Vec((this.x - object.x),(this.y - object.y));
        return minus;
    }
    get length(){
        let square = (this.x*this.x) + (this.y*this.y);
        let pythagoras = Math.sqrt(square);
        return pythagoras;
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5



