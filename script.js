const questions = document.querySelectorAll(".question");

questions.forEach((elem) => {
    let expanded = false;
    elem.addEventListener("click", () => {
        let answer = elem.nextElementSibling;
        let arrow = elem.querySelector(".arrow");
        if (expanded) {
            elem.classList.remove("question-expanded");
            answer.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
            expanded = false;
        } else {
            elem.classList.add("question-expanded");
            answer.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
            expanded = true;
        }
    });
});
