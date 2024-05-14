// Обработчики событий для переключателей
const group1Button = document.querySelector(".group-1-button");
const group2Button = document.querySelector(".group-2-button");
const group1Block = document.querySelector(".group-1");
const group2Block = document.querySelector(".group-2");

group1Button.addEventListener("click", function () {
    group1Button.classList.add("active");
    group2Button.classList.remove("active");
    group1Block.style.display = "block";
    group2Block.style.display = "none";
});

group2Button.addEventListener("click", function () {
    group2Button.classList.add("active");
    group1Button.classList.remove("active");
    group2Block.style.display = "block";
    group1Block.style.display = "none";
});