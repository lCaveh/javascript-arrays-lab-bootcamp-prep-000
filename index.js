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
  kittens.slice(0, kittens.length-1);
}
function removeFirstKitten() {
  kittens.slice(0);
}
