const demo = document.querySelector(".easing-demo");
const select = document.querySelector("#easing-curve");
const button = document.querySelector("#easing-play");
let animation;
button?.addEventListener("click", () => {
  animation?.cancel();
  const distance = Math.max(0, demo.clientWidth - 80);
  animation = demo.firstElementChild.animate(
    [
      { transform: "translateX(0)" },
      { transform: `translateX(${distance}px)` },
    ],
    {
      duration: 1800,
      easing: select.value,
      iterations: 2,
      direction: "alternate",
    },
  );
});
document
  .querySelector("#easing-stop")
  ?.addEventListener("click", () => animation?.cancel());
