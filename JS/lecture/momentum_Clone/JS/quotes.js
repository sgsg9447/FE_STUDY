const quotes = [
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote: "어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기증세다",
    author: "아인슈타인",
  },
  {
    quote: "너 자신이 돼라. 다른 사람은 이미 있으니까",
    author: "오스카 와일드",
  },
  {
    quote: "아무것도 하지 않으면 아무 일도 일어나지 않는다.",
    author: "기시미 이치로",
  },
  {
    quote: "일단 시작해라 나중에 완벽해지면 된다.",
    author: "론 무어 ",
  },
  {
    quote: "작은 기회로부터 위대한 업적이 시작된다.",
    author: "데모스테네스",
  },
  {
    quote: "꿈을 꾸기에 인생은 빛난다.",
    author: "모차르트",
  },
  {
    quote: "인생은 한권의 책과 같다.",
    author: "상 파울",
  },
  {
    quote: "변명 중에서 가장 어리석은 변명은 '시간이 없어서'이다.",
    author: "에디슨",
  },
  {
    quote: "이 세상세서 자기 자신보다 사랑스러운 것은 없다.",
    author: "상응부경전",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
