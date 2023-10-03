const ageCalculator = function (birthDate) {
  const now = new Date();
  document.querySelector(".result").style.display = "block";
  document.querySelector(".hours").textContent = `${Math.round((now - birthDate) / (1000 * 60 * 60))} hours `;
  document.querySelector(".days").textContent = `${Math.round((now - birthDate) / (1000 * 60 * 60 * 24))} days `;
  document.querySelector(".month").textContent = `${Math.round((now - birthDate) / (1000 * 60 * 60 * 24 * 30))} months `;
  document.querySelector(".years").textContent = `${((now - birthDate) / (1000 * 60 * 60 * 24 * 30 * 12)).toFixed(3)} years `;
  document.querySelector(".decade").textContent = `${((now - birthDate) / (1000 * 60 * 60 * 24 * 30 * 12 * 10)).toFixed(5)} decade `;
};

document.querySelector("#birthday").addEventListener("change", function (e) {
  const inputDtae = new Date(e.target.value);
  ageCalculator(inputDtae);
});

// Age calculator:
// const myBirth = new Date(1998, 3 - 1, 31);

// count-down timer
// const lan = document.querySelector(".lan");
// let timer;
// const countdown = function (time) {
//   const timer = setInterval(function () {
//     const min = String(Math.trunc(time / 60)).padStart(2, 0);
//     const sec = String(time % 60).padStart(2, 0);
//     lan.textContent = `${min}:${sec}`;
//     clearInterval();

//     if (time === 0) {
//       clearInterval(timer);
//     }
//     time--;
//   }, 1000);
// };
// countdown(10);
