const dollar = "$";

const balance = document.querySelector(".header__left-value");
const total = document.querySelector(".body__info-more-left");
const percent = document.querySelector(".percent");
const chart = document.querySelector(".body__chart");

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const randomGenerator = function (min, max) {
  return Number(Math.random() * (max - min) + 1 + min).toFixed(2);
};

const randomData = async function () {
  let totalMonth = 0;
  weekDays.forEach((day) => {
    // generate random values between 0-100 to create items and their charts
    // height of each chart is dependent on its random number
    const randomNum = Number(randomGenerator(0, 99));
    totalMonth += randomNum;
    const itemTag = `<div class="item">
                          <div class="item__shape" style="height:${randomNum}%;">
                              <span class="amount">${dollar}${randomNum}</span>
                          </div>
                          <div class="item__name">${day}</div>
                      </div>`;
    chart.insertAdjacentHTML("beforeend", itemTag);
  });

  //   balance is a random number between 500-1000
  balance.textContent = `${dollar}${randomGenerator(500, 1001)}`;
  //   total is sum of all random generated numbers for each weekDay
  total.textContent = `${dollar}${totalMonth.toFixed(2)}`;
  //   percent is difference between random balance and total of month in percentage out of 100
  percent.textContent = `+${((Number(total.textContent.slice(1)) / Number(balance.textContent.slice(1))) * 100).toFixed(2)}%`;

  const allItems = document.querySelectorAll(".item");
  //   greatest value is 100
  let least = 100;
  //   algorithm to find the least value
  allItems.forEach((each) => {
    let clickCount = 0;
    const eachValue = Number(each.querySelector(".amount").textContent.slice(1));
    eachValue < least ? (least = eachValue) : (least = least);
    each.addEventListener("click", function (e) {
      const amountStyle = e.target.querySelector(".amount").style;
      e.target.querySelector(".amount").style;
      clickCount % 2 === 0 ? (amountStyle.display = "block") : (amountStyle.display = "none");
      clickCount++;
    });
  });
  //   after finding the least value, insert "least" class to this item's classList
  allItems.forEach((each) => {
    Number(each.querySelector(".amount").textContent.slice(1)) === least ? each.classList.add("least") : (each.classList = each.classList);
  });
};
randomData();
