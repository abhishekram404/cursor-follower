var cont = document.querySelector("#container");
var cur = document.querySelector("#cursor");
// var el = document.createElement("div");

// cont.appendChild(el);

cont.addEventListener("mousemove", (event) => {
//  console.log(event.clientX, event.clientY);
  cur.style.left = event.clientX + "px";
  cur.style.top = event.clientY + "px";
//  newel();
});

/*
const newel = () => {
  var e = document.createElement("div");
  e.classList.add("expanded");
};
*/
// cur.addEventListener("click", (event) => {
//   cur.classList.add("expanded");
//   console.log("down");
// });
