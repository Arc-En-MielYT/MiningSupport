let mining = false;
let interval;

document.getElementById("startBtn").onclick = () => {
  if (!mining) {
    mining = true;
    document.getElementById("status").textContent = "⛏️ Minage en cours...";
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;

    interval = setInterval(() => {
      // Tâche de calcul fictif
      let result = 0;
      for (let i = 0; i < 1e6; i++) {
        result += Math.sqrt(i);
      }
      console.log("Simulation de minage...");
    }, 100);
  }
};

document.getElementById("stopBtn").onclick = () => {
  if (mining) {
    mining = false;
    clearInterval(interval);
    document.getElementById("status").textContent = "💤 Minage arrêté.";
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
  }
};
