// Vowel Count (7kyu)

/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  let vowelsCount = 0;
  //소문자화 해주기
  str = str.toLowerCase();
  for (let i = 0; i < str.length ; i++) {
    console.log(str[i]);
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log(getCount("aaebco"));
