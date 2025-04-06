import { add, multiply } from "./js/math";
const result = add(5, 3) + multiply(2, 4);
document.querySelector("#result").textContent = `Результат: ${result}`;
