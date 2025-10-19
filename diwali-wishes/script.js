
function showGreeting() {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");
  const username = document.getElementById("username");

  if (name === "") {
    alert("Please enter your name 🪔");
    return;
  }

//   username.textContent = name;
  // username.textContent = `Hi ${name}, Pradumn this side. wishing you a very Happy Diwali !🪔🎆`;
 username.innerHTML = `
    Hi <b>${name}!</b><br>
    Pradum this side, wishing you <br>
    <span style="color:gold;"> a very Happy Diwali 🪔🎆</span>
`;

  greeting.classList.remove("hidden");

  // Start floating lights & fireworks
  generateLights(20);
  launchFireworks();
}

function launchFireworks() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 7,
      startVelocity: 40,
      spread: 360,
      ticks: 60,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function generateLights(count) {
  for (let i = 0; i < count; i++) {
    const light = document.createElement("div");
    light.classList.add("light");
    light.style.left = Math.random() * 100 + "vw";
    light.style.animationDuration = 3 + Math.random() * 5 + "s";
    document.body.appendChild(light);

    setTimeout(() => light.remove(), 8000);
  }
}

