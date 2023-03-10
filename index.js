const cats = ["Milo", "Otis", "Garfield"];
let newCats;
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    var newCats = cats.slice(0);
    newCats.push(name);
    return newCats
}
function prependCat(name){
    var newCats = cats.slice(0);
    newCats.unshift(name);
    return newCats;
}
function removeLastCat(){
    var newCats = cats.slice(0);
    newCats.pop();
    return newCats;
}
function removeFirstCat(){
    var newCats = cats.slice(0);
    newCats.shift();
    return newCats;
}
appendCat("Broom");
prependCat("Arnold");
