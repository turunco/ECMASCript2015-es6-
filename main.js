// ECMAScript2015
// Language Specification : http://www.ecma-international.org/ecma-262/6.0/index.html
// Compatibility table : https://kangax.github.io/compat-table/es6/


// const
console.log('== const');

const USER_MAX = 100;
console.log('USER_MAX=', USER_MAX);
// USER_MAX = 200;	// error : can't overwrite


// let
console.log('== let');

if (true) {
    var a = 1;
    let b = 2;
}
console.log('a=', a);
// console.log('b=', b); // error : out of scope


// Map
console.log('== Map');

var map = new Map();
map.set('title0', 'A');
map.set('title1', 'B');
console.log('title0=', map.get('title0'));
map.forEach(function(value, key) {
    console.log(key, value);
});
for (var value of map) {
    console.log(value);
}


// Set
console.log('== Set');

var set = new Set();
set.add('A');
set.add('B');
set.add('C');
if (set.has('B')) {
    console.log('set has B');
}


// Arrow function
console.log('== Arrow function');

var func0 = function(name) {
    console.log('Hello ' + name);
}
func0('world 0');

var func1 = (name) => {
    console.log('Hello ' + name);
}
func1('world 1');


// Default paramter
console.log('== default paramter');

function Hello_old(name) {
    if (typeof(name) === 'undefined') {
        name = 'John Doe';
    }
    console.log('Hello ' + name);
}
Hello_old();

function Hello_new(name = 'John Doe') {
    console.log('Hello ' + name);
}
Hello_new();


// class
console.log('== class');

class Human {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }

    gender() {
        console.log('--');
    }

    static age() {
        console.log('10');
    }
}
Human.age();

var human = new Human('Mike');
human.showName();


// inherit
console.log('== class - inherit');

class Student extends Human {
    constructor(name, grade) {
        super(name); // call super class constructor
        this.grade = grade;
    }

    gender() {
        super.gender(); // call super class function
        console.log('gender');
    }

    showGrade() {
        console.log(this.name + ' is ' + this.grade + 'th grade');
    }

    static age() {
        console.log('20');
    }
}
Student.age();

var student = new Student('Jenny', 7);
student.showGrade();
student.gender();


//
console.log('== insert');

var param0 = 100;
var param1 = 200;
var [param00, param01] = [100, 200];
console.log(param00);
console.log(param01);


//
console.log('== ...');

var array = [1, 2, 3];
console.log(array);
console.log(...array);

var array2 = [...array, 10, 11, 12];
console.log(array2);

var x;
var y;
var z;
var array3 = [x, y, z];
var [a, b, ...array3] = [1, 2, 3, 4, 5];
console.log(array3);

function func10(a, ...b) {
    console.log(a, b);
}
func10(1, 10, 100, 1000);


// template charactors
console.log('== template charactors');
var name = 'Dog';
var hello = `Hello ${name}`;
console.log(hello);