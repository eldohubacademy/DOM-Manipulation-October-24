const questions = document.querySelectorAll(".question");

console.log(questions);

questions.forEach((q) => {
  //   console.log((q.nextSibling)); // the htm inside each question element

  q.addEventListener("click", (event) => {
    let questionEl = event.target.closest(".question");
    document
      .querySelectorAll(".answer")
      .forEach((ans) => (ans.style.display = "none"));
    questionEl.nextElementSibling.style.display = "block";
  });
});
