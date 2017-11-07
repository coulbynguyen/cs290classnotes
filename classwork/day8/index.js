console.log("We are running JS");

var thisIsAVariable;

var i = 16;
var pi = 3.1415;

var str = "abc";
var str2 = "def";
var t = true;
var f = false;

var arr = [ 1, 2, 3 ];

var obj = {a: 1, b:2, c:3};

var fn = function(){ console.log("WITHIN fn"); };

console.log("typeof(t):", typeof(t));
console.log("typeof(obj):", typeof(obj));
fn();

console.log("9/5:", 9/5);

console.log("2 == 2:", 2 == 2);
console.log("2 == 3:", 2 == 3);
console.log("2 == 'a':", 2 == 'a');
console.log("2 == '2':", 2 == '2');
console.log("2 === '2':", 2 === '2');
console.log("2 === 2:", 2 === 2);
console.log("2 === 3:", 2 === 3);
console.log("2 !== 3:", 2 !== 3);
console.log("2 !== 2:", 2 !== 2);
console.log("2 !== '2':", 2 !== '2');

console.log("");
console.log("================== strings");
console.log("");

var str1 = "this a 'string'";
var str2 = 'this is also a "string"';
console.log(str1);
console.log(str2);

var greeting = "Hello, my name is:";
var name = "Coulby";
var wholeGreeting = greeting + name;
console.log("wholeGreeting", wholeGreeting);

var problem = "2 + 2 = ";
var answer = 4;
var problemAndAnswer = problem + answer;
console.log("problemAndAnswer", problemAndAnswer);
console.log("problemAndAnswer.length = ", problemAndAnswer.length);
console.log("problemAndAnswer[4] = ", problemAndAnswer[4]);

console.log("'decatholon'.index('cat'):", 'decatholon'.indexOf('cat'));
console.log("'team'.index('i'):", 'team'.indexOf('i'));
console.log("replace 'I love dogs':", 'I love dogs'.replace('dogs', 'cats'));
console.log("replace 'I love dogs dogs':", 'I love dogs dogs'.replace('dogs', 'cats'));

console.log("");
console.log("================== arrays");
console.log("");

var array1 = [ 1, 2, 3];
console.log("array1:", array1);

var array2 = [ 1, true, "three"];
console.log("array2:", array2);

for (var j = 0; j < array2.length; j++){
  console.log("array2[" + j + "]:", array2[j]);
}

console.log("'1,2,3,4'.split(','):", '1,2,3,4'.split(','));
console.log("[1,2,3,4].join(','):", [1,2,3,4].join(','));
