const body = document.body;

const images = [
  {
    index: 1,
    url: "https://eumericano.s3.ap-northeast-2.amazonaws.com/dev/bg/1.webp",
  },
  {
    index: 2,
    url: "https://eumericano.s3.ap-northeast-2.amazonaws.com/dev/bg/2.webp",
  },
  {
    index: 3,
    url: "https://eumericano.s3.ap-northeast-2.amazonaws.com/dev/bg/3.webp",
  },
  {
    index: 4,
    url: "https://eumericano.s3.ap-northeast-2.amazonaws.com/dev/bg/4.webp",
  },
];

const init = () => {
  //1. 랜덤 넘버 설정
  const randomNum = Math.floor(Math.random() * images.length);
  console.log(randomNum);
  //2. 백그라운드 변경
  body.style.backgroundImage = `url(${images[randomNum].url})`;
};

init();
