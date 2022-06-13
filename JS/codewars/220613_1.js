// Sentence Smash
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  return words.join(" ");
}

const ans = smash(["hello", "world", "this", "is", "great"]);
console.log(ans);

const ans1 = smash(["hello", "world"]);
console.log(ans1);
