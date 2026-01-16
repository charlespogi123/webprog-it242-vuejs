document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const names = ["Charles", "Catenko", "clrs"];
const nameElement = document.getElementById("dynamic-name");
let nameIndex = 0;
let charIndex = 0;
let typing = true;

function typeName() {
  if (typing) {
    nameElement.textContent += names[nameIndex][charIndex];
    charIndex++;
    if (charIndex === names[nameIndex].length) {
      typing = false;
      setTimeout(typeName, 1000);
      return;
    }
  } else {
    nameElement.textContent = names[nameIndex].substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      typing = true;
      nameIndex = (nameIndex + 1) % names.length;
    }
  }
  setTimeout(typeName, typing ? 150 : 50);
}

typeName();

function toggleDropdown(id) {
  const content = document.getElementById(id);
  content.classList.toggle("show");
}