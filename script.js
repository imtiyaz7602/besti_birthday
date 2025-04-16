const messages = [
    "Hey my lady 💖",
    "On this very special day, I just want to say...",
    "You are not just my best friend, you're my heart's sunshine ☀️",
    "Your kindness, your smile, your soul – they all mean the world to me.",
    "Thank you for always being there, for being YOU!",
    "Wishing you joy, love, laughter and everything you dream of ✨",
    "Happy Birthday, my besti from Brazil 🇧🇷🎂",
    "This day is brighter because of your presence in this world 🕊️",
    "I hope your year ahead is filled with sweet surprises 💝",
    "With love, always... from your best friend 💌"
  ];
  
  let index = 0;
  
  function showMessage() {
    const box = document.getElementById("message-box");
    if (index < messages.length) {
      const p = document.createElement("p");
      p.textContent = messages[index];
      p.style.animation = "fadeIn 1.5s";
      box.appendChild(p);
      index++;
      setTimeout(showMessage, 2500);
    }
  }
  
  document.getElementById("start-btn").addEventListener("click", function () {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("message-box").style.display = "block";
    
    // Play background music
    const music = document.getElementById("bg-music");
    music.play().catch(err => console.log("Music autoplay blocked:", err));
  
    // Start showing messages
    showMessage();
  });
  