const filterBox = document.querySelectorAll(".box");

console.log(filterBox);
document.querySelector("nav").addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") return false;

  let filterClass = event.target.dataset["f"];

  filterBox.forEach((box) => {
    if (!box.classList.contains(filterClass) && filterClass != "all") {
      box.classList.add("hide");
    } else {
      box.classList.remove("hide");
    }
  });
});
