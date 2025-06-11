const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active");
  }, 150);
  // setTimeout(() => {if (this.classList.contains("trigger-enter")) {this.classList.add("trigger-enter-active"); // prevents content showing before the background div}}, 150);
  background.classList.add("open");
  const dropdown = this.querySelector(".dropdown"); // targets .dropdown in the specific element being handled
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top, // to offset any space above the navbar
    left: dropdownCoords.left - navCoords.left, // to offset any space above the navbar
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseenter", handleEnter);
});
triggers.forEach((trigger) => {
  trigger.addEventListener("mouseleave", handleLeave);
});
