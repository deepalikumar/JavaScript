// Fat arrow
//////////Defination/////////

// An arrow funtion expression has shorter syntax than a function expression and does not have its own 'this', 'argumnets',
// 'super', or a 'new.target'. These function expression are best suited for non-method functions and they cannot have constructors.

// ES5 way 

var materails = [
    'hydrogen',
    'helium',
    'lithium',
    'beryllium'
];

materails.map(function(materails) {
    return materails.length;
})

//ES6 way

materails.map( materails => materails.length );



// No seperate this

//ES5 

function Person5() {
    this.age = 0;
    var that = this;
    setInterval(function(growup) {
        that.age++;
    }, 1000);
}
var p5 = new Person5();




//ES6 

function Person6() {
    this.age = 0;
    setInterval(() => {this.age++; }, 1000);

}

var p6 = new Person6();


//Relation with strict mode

var f = () => { 'use strict'; return this;}
