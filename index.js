function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function removeLastKitten() {
  kittens.splice(0,0,name);
}
function destructivelyPrependKitten(name) {
  kittens.splice(0,0,name);
}
