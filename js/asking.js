let nationSelect = document.querySelector(".nationality__select");
let OptionNationSelect = document.querySelectorAll(
  ".nationality__select option"
);

let inputNat = document.querySelector(".dropdown-trigger");

console.log(inputNat);

inputNat.addEventListener("change", (e) => {
  console.log(e.target.value);
});

// console.log(OptionNationSelect);

// for (opt of OptionNationSelect) {
//   console.log(opt);
// }

// function getSelectValue() {
//   let realSelect = document.querySelectorAll(".dropdown-content > li");
//   for (ele of realSelect) {
//     let selectedEele = ele.classList.contain("selected");
//     console.log(selectedEele);
//   }
// }
// getSelectValue();
