const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

/*
1. toggle 버튼 가져오기
2. Nodelist 를 통해서 Loop 생성 (forEach)
3. click이벤트 생성
4. Toggle the active class on the parent node(.parentNode& classList.toggle())
*/
