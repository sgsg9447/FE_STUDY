// Get the Middle Character 7kyu

/*
You are going to be given a word. 
Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

// odd : 정가운데  testing -> t , testing.length = 7, t의 인덱스는 ? 3 -> 0~6 중 3 이니까, testing.length -1 /2 리턴하면되겠군
// even : 중간 2개  test -> es , test.length = 4, es 의 인덱스 ? 1~2 -> 0~3중 1~2이니까, slice(Math.floor(3/2) ~ , 1) 
// s.slice(1,3) = es (Math.floor(3/2),Math.floor(3/2)+2)


function getMiddle(s)
{
  if(s.length % 2 == 0){
      //짝수일때
      return s.substr((Math.floor((s.length-1)/2)),((Math.floor((s.length-1)/2))))
      
  }else{
      //홀수일때
      return s.substr((Math.floor(s.length-1)/2),(1))
      
  }
}

console.log(getMiddle('tester'))


// 정답

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// 정답

function getMiddle(s)
{
  let middle = Math.floor(s.length/2);
  
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);
  
}