function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function destructivelyPrependKitten(name) {
  kittens.splice(0,0,name);
}