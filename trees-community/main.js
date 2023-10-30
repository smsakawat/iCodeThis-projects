const modal = document.getElementById("modal");
const joinBtn = document.getElementById("btn-join");
joinBtn.addEventListener("click", () => {
  // showing modal
  modal.showModal();
});

// closing modal
modal.addEventListener("click", (e) => {
  const area = modal.getBoundingClientRect();

  const inModal =
    area.top <= e.clientY &&
    e.clientY <= area.top + area.height &&
    area.left <= e.clientX &&
    e.clientX <= area.left + area.width;
  if (!inModal) modal.close();
});

// Scale Tree
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const treeBox = document.querySelector(".tree-box");

    treeBox.classList.add("show");
  }, 600);

  setTimeout(() => {
    const headingBox = document.querySelector(".heading-box");
    headingBox.classList.add("show");
  }, 250);
});
