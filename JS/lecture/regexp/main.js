const str = `
010-1234-5678
sgsg9447@gmail.com
The quick brown fox jumps over the lazy dog.
https://velog.io/@sgsg9447
abbcccdddd
`;

// const regexp = new RegExp("the", "g");
// const regexp = /the/gi;

// console.log(str.match(regexp));

// const regexp = /abbcccdddd/gi;
// // console.log(regexp.test(str));
// console.log(str.replace(regexp, "ABCD"));

// console.log(str.match(/d$/gm));
// console.log(str.match(/^t/gim));

console.log(str.match(/.{1,}(?=@)/g));
