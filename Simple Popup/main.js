const btnTrigger = document.querySelector(".popup-trigger");
const popupBTN = document.querySelector(".popup-btn");
const popup = document.querySelector(".popup");

btnTrigger.addEventListener("click", () => {
	btnTrigger.style.display = "none";
	popup.classList.add("popup--active");
});

popupBTN.addEventListener("click", () => {
	popup.classList.remove("popup--active");
	btnTrigger.style.display = "block";
});
