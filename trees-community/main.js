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
