function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function appendKitten(name) {
  return [name, ...kittens]
}