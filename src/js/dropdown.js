document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.getElementById("dropdown-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownArrow = document.getElementById("dropdown-arrow");

  // Toggle dropdown visibility on button click
  dropdownButton.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.remove("hidden");
      dropdownMenu.classList.add("flex");
      dropdownArrow.style.transform = "rotate(180deg)"; // Rotate arrow up
    } else {
      dropdownMenu.classList.remove("flex");
      dropdownMenu.classList.add("hidden");
      dropdownArrow.style.transform = "rotate(0deg)"; // Rotate arrow down
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add("hidden");
      dropdownArrow.style.transform = "rotate(0deg)";
    }
  });
});
