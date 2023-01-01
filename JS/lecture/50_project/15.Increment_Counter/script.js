const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = +target / 300; //일단 200으로 나눠보자 숫자가 커질수록 예를들면 1000이면 10분의1속도니가 엄청느려짐

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

//숫자를 변경하고싶다면, html data-target을 변경해주기.
//우리는 증가되는 속도를 target 을 기준으로 특정숫자로 나눴기에 data-target값이 아무리 크더라도, 똑같은 속도이다!
