document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("languageSwitcher");
  switcher.addEventListener("change", () => {
    const lang = switcher.value;
    fetch(`lang/${lang}.json`)
      .then(res => res.json())
      .then(data => {
        document.getElementById("headline").textContent = data.headline;
        document.getElementById("description").textContent = data.description;
      });
  });
});
