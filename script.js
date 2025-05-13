    const affirmations = [
      "You are capable of amazing things.",
      "Believe in yourself and all that you are.",
      "Positivity is a choice, and today I choose to be positive.",
      "You are strong, you are beautiful, you are enough.",
      "Your potential is limitless.",
      "Success starts with self-belief.",
      "You are worthy of love and respect.",
      "Every day is a fresh start.",
      "Your dreams are valid.",
      "You bring value to the world."
    ];

    const affirmationEl = document.getElementById("affirmation");
    const favoritesList = document.getElementById("favoritesList");
    let currentAffirmation = affirmationEl.textContent;

    function getNewAffirmation() {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      currentAffirmation = affirmations[randomIndex];
      affirmationEl.textContent = currentAffirmation;
      affirmationEl.style.opacity = 0;
      void affirmationEl.offsetWidth;
      affirmationEl.style.animation = 'fadeIn 1s ease forwards';
    }

    function saveFavorite() {
      if (![...favoritesList.children].some(li => li.textContent === currentAffirmation)) {
        const li = document.createElement("li");
        li.textContent = currentAffirmation;
        favoritesList.appendChild(li);
      } else {
        alert("Already in favorites!");
      }
    }

    function shareAffirmation() {
      if (navigator.share) {
        navigator.share({
          title: "Daily Affirmation",
          text: currentAffirmation,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully!"))
        .catch((err) => console.error("Share failed:", err));
      } else {
        alert("Share not supported on this browser.");
      }
    }
