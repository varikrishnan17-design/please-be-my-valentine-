window.onload = function () {
  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const message = document.getElementById("message");

  if (!noBtn || !yesBtn || !message) {
    console.error("One or more elements not found");
    return;
  }

  noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = "translate(" + x + "px, " + y + "px)";
  });

  yesBtn.addEventListener("click", function () {
    message.innerHTML = "Yayyy! 💘 I knew you'd say yes!";
  });
};
