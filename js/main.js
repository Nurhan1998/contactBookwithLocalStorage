const size = 500;

const cnv = document.createElement("canvas");
document.body.appendChild(cnv);
cnv.width = size;
cnv.height = size;
cnv.style.backgroundColor = "#ccc";
const ctx = cnv.getContext("2d");
ctx.fillStyle = "green";

const f1 = (x, y) => ({
  x: 0,
  y: 0.16 * y,
});

const f2 = (x, y) => ({
  x: 0.85 * x + 0.04 * y,
  y: -0.04 * x + 0.85 * y + 1.6,
});

const f3 = (x, y) => ({
  x: 0.2 * x - 0.26 * y,
  y: 0.23 * x + 0.22 * y + 1.6,
});

const f4 = (x, y) => ({
  x: -0.15 * x + 0.28 * y,
  y: 0.26 * x + 0.24 * y + 0.44,
});
/**
 * возвращает следующую
 * рандомную координату
 * @param {number} x ось X
 * @param {number} y ось У
 */
function getNextValue(x, y) {
  const random = Math.random() * 100;
  if (random < 1) return f1(x, y);
  if (random < 86) return f2(x, y);
  if (random < 93) return f3(x, y);
  return f4(x, y);
}
/**
 * ? Переводит число из одного диапазона в другой диапазон
 * @param {number} n
 * @param {number} start1
 * @param {number} stop1
 * @param {number} start2
 * @param {number} stop2
 */
const scale = function (n, start1, stop1, start2, stop2) {
  const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (start2 < stop2) {
    return Math.max(Math.min(newval, stop2), start2);
  } else {
    return Math.max(Math.min(newval, start2), stop2);
  }
};
// scale(5,0,,10,0,100)
/**
 *
 * @param {number} x
 * @param {number} y
 */
function drawPoint(x, y) {
  const px = scale(x, -3, 3, 0, size);
  const py = scale(y, 0, 10, size, 0);
  ctx.fillRect(px, py, 1, 1);
}
let x = 0;
let y = 0;

setInterval(() => {
  for (let i = 0; i < 10000; i++) {
    drawPoint(x, y);
    const nextValue = getNextValue(x, y);
    x = nextValue.x;
    y = nextValue.y;
  }
}, 100); //100=0.1sec
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 6546,
//   color: "red",
//   height: "180",
//   weight: "70",
//   child: {
//     firstChildName: "Joe",
//     secondChildName: "Katy",
//   },
//   fillName: function () {
//     return person.firstName + " " + person.lastName;
//   },
//   weightHeight: function () {
//     console.log(person.weight + "кг " + person.height + "см");
//   },
//   fisrtNameChildren: function () {
//     console.log(person.child);
//   },
// };
// person.weightHeight();

// let data = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 6546,
//   color: "red",
//   height: "180",
//   weight: "70",
//   child: {
//     firstChildName: "Joe",
//     secondChildName: "Katy",
//   },
//   fillName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   weightHeight: function () {
//     console.log(this.weight + "кг " + this.height + "см");
//   },
//   fisrtNameChildren: function () {
//     console.log(this.child);
//   },
// };
// data.weightHeight();

console.log(this);
let a = [1, 3, 2, 0, 5, 4, 8];
a.shift();
