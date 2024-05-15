let numbers = {
  "first": -1,
  "second": -1,
  "third": -1,
  "fourth": -1,
  "fifth": -1,
  "sixth": -1,
  "seventh": -1,
  "eight": -1,
  "ninth": -1,
}
// Global Variables
let arr = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let i = 0;
let count = 0;
let ans;
let winner_1 = 0;
let winner_2 = 0;
let tied = 0;
function Edit1(x) {
  let name = prompt("Enter a Name of Player ");
  if (name != null) {
    document.getElementById("P1").innerHTML = name;
  }
}
function Edit2(x) {
  let name = prompt("Enter a Name of Player ");
  if (name != null) {
    document.getElementById("P2").innerHTML = name;
  }
}
function winner() {
  let win;
  // For Zero(0) Rules :
  if (arr[0] == 0 && arr[1] == 0 && arr[2] == 0) { // 0 1 2
    arr[0] = arr[1] = arr[2] = 100;
    win = 0;
  } else if (arr[3] == 0 && arr[4] == 0 && arr[5] == 0) { // 3 4 5
    arr[3] = arr[4] = arr[5] = 100;
    win = 0;
  } else if (arr[6] == 0 && arr[7] == 0 && arr[8] == 0) { // 6 7 8
    arr[6] = arr[7] = arr[8] = 100;
    win = 0;
  } else if (arr[0] == 0 && arr[3] == 0 && arr[6] == 0) { // 0 3 6
    arr[0] = arr[3] = arr[6] = 100;
    win = 0;
  } else if (arr[1] == 0 && arr[4] == 0 && arr[7] == 0) { // 1 4 7
    arr[1] = arr[4] = arr[7] = 100;
    win = 0;
  } else if (arr[2] == 0 && arr[5] == 0 && arr[8] == 0) { // 2 5 8
    arr[2] = arr[5] = arr[8] = 100;
    win = 0;
  } else if (arr[0] == 0 && arr[4] == 0 && arr[8] == 0) { // 0 4 8
    arr[0] = arr[4] = arr[8] = 100;
    win = 0;
  } else if (arr[2] == 0 && arr[4] == 0 && arr[6] == 0) { // 2 4 6
    arr[2] = arr[4] = arr[6] = 100;
    win = 0;
  }
  // For Cross(X) Rules :
  else if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1) { // 0 1 2
    arr[0] = arr[1] = arr[2] = 100;
    win = 1;
  } else if (arr[3] == 1 && arr[4] == 1 && arr[5] == 1) { // 3 4 5
    arr[3] = arr[4] = arr[5] = 100;
    win = 1;
  } else if (arr[6] == 1 && arr[7] == 1 && arr[8] == 1) { // 6 7 8
    arr[6] = arr[7] = arr[8] = 100;
    win = 1;
  } else if (arr[0] == 1 && arr[3] == 1 && arr[6] == 1) { // 0 3 6
    arr[0] = arr[3] = arr[6] = 100;
    win = 1;
  } else if (arr[1] == 1 && arr[4] == 1 && arr[7] == 1) { // 1 4 7
    arr[1] = arr[4] = arr[7] = 100;
    win = 1;
  } else if (arr[2] == 1 && arr[5] == 1 && arr[8] == 1) { // 2 5 8
    arr[2] = arr[5] = arr[8] = 100;
    win = 1;
  } else if (arr[0] == 1 && arr[4] == 1 && arr[8] == 1) { // 0 4 8
    arr[0] = arr[4] = arr[8] = 100;
    win = 1;
  } else if (arr[2] == 1 && arr[4] == 1 && arr[6] == 1) { // 2 4 6
    arr[2] = arr[4] = arr[6] = 100;
    win = 1;
  } else {
    win = -1;
  }
  return win;
}
function conveter(x) {
  let k = "";
  if (x == 0) {
    k = k + "first";
  } else if (x == 1) {
    k = k + "second";
  } else if (x == 2) {
    k = k + "third";
  } else if (x == 3) {
    k = k + "fourth";
  } else if (x == 4) {
    k = k + "fifth";
  } else if (x == 5) {
    k = k + "sixth";
  } else if (x == 6) {
    k = k + "seventh";
  } else if (x == 7) {
    k = k + "eight";
  } else if (x == 8) {
    k = k + "ninth";
  }
  return k;
}
function zero() {
  i = 1;
  let pos = {
    "0": "P1",
    "1": "tie",
    "2":"Player1_score",
    "3":"Tied_score",
    "4":"P2",
    "5":"Player2_score"
  }
  for(let k = 0; k < 4; k++) {
    let tiedElement = document.getElementById(pos[k]);
    if (tiedElement) {
      tiedElement.style.color = "grey";
    }
  }
  for(let k2 = 4; k2 < 6; k2++) {
    let tiedElement = document.getElementById(pos[k2]);
    if (tiedElement) {
      tiedElement.style.color = "white";
    }
  }
}
function cross() {
  i = 0;
  let pos = {
    "0": "P2",
    "1": "tie",
    "2":"Player2_score",
    "3":"Tied_score",
    "4":"P1",
    "5":"Player1_score"
  }
  for(let k = 0; k < 4; k++) {
    let tiedElement = document.getElementById(pos[k]);
    if (tiedElement) {
      tiedElement.style.color = "grey";
    }
  }
  for(let k2 = 4; k2 < 6; k2++) {
    let tiedElement = document.getElementById(pos[k2]);
    if (tiedElement) {
      tiedElement.style.color = "white";
    }
  }
}
let restart_count = 0;
function restart() {
  restart_count++;
  for (let j = 0; j < 9; j++) {
    document.getElementById(conveter(j)).innerHTML = "";
    document.getElementById(conveter(j)).clicked = false;
    arr[j] = -1;
  }
  count = 0;
  if(restart_count % 2 != 0) {
    zero();
  } else {
    cross();
  }
  numbers["first"] = -1;
  numbers["second"] = -1;
  numbers["third"] = -1;
  numbers["fourth"] = -1;
  numbers["fifth"] = -1;
  numbers["sixth"] = -1;
  numbers["seventh"] = -1;
  numbers["eight"] = -1;
  numbers["ninth"] = -1;
}
function stoper() {
  document.getElementById("first").clicked = true;
  document.getElementById("second").clicked = true;
  document.getElementById("third").clicked = true;
  document.getElementById("fourth").clicked = true;
  document.getElementById("fifth").clicked = true;
  document.getElementById("sixth").clicked = true;
  document.getElementById("seventh").clicked = true;
  document.getElementById("eight").clicked = true;
  document.getElementById("ninth").clicked = true;
  // document.querySelectorAll(".container").onclick = restart(arr);
  // setTimeout(restart(arr),100000);
  setTimeout(function () { restart(); }, 1000);
}
function afterdeclaration() {
  if (ans == 0) {
    for (let g = 0; g < 9; g++) {
      if (arr[g] != 100 && arr[g] != -1) {
        document.getElementById(conveter(g)).childNodes[0].style.opacity = 0.5;
        // document.getElementById(conveter(g)).style.opacity = 0.5;
      } else if (arr[g] == 100) {
        document.getElementById(conveter(g)).childNodes[0].setAttribute("class", "hello");
      }
    }
  } else if (ans == 1) {
    for (let g = 0; g < 9; g++) {
      if (arr[g] != 100 && arr[g] != -1) {
        document.getElementById(conveter(g)).childNodes[0].style.opacity = 0.5;
        // document.getElementById(conveter(g)).style.opacity = 0.5;
      } else if (arr[g] == 100) {
        document.getElementById(conveter(g)).childNodes[0].setAttribute("class", "hello");
      }
    }
  } else {
    for (let g = 0; g < 9; g++) {
      document.getElementById(conveter(g)).childNodes[0].style.opacity = 0.5;
    }
  }
  stoper();
}
let first = 0;
function draw(position) {
  let a = document.getElementById(position);
  // Check if the element has already been clicked
  if (!a.clicked) {
    let html;
    let h1;
    if (i == 0) {
      h1 = `<audio src="Ad.mp3" autoplay></audio>`;
      html = `<img src="${"o.png"}" alt="404">`;
      i = 1;
      zero();
      numbers[position] = 0;
      count++;
    } else {
      h1 = `<audio src="Ad.mp3" autoplay></audio>`;
      html = `<img src="${"Cross.png"}" alt="404">`;
      i = 0;
      cross();
      numbers[position] = 1;
      count++;
    }
    a.innerHTML = html + h1;
    // Mark the element as clicked
    a.clicked = true;
    let idx = 0;
    for (let ij in numbers) {
      arr[idx] = numbers[ij];
      idx++;
    }
    // Score Updation start;
    let html1;
    if (count >= 5 && count < 9) {
      ans = winner(arr);
      if (ans == 0) { // Winner 1
        winner_1++;
        html1 = `<audio src="winner_sound.mp3" autoplay></audio>`;
        document.getElementById("Player1_score").innerHTML = winner_1 + html1;
        afterdeclaration(arr);
      }
      else if (ans == 1) { // Winner 2
        winner_2++;
        html1 = `<audio src="winner_sound.mp3" autoplay></audio>`;
        document.getElementById("Player2_score").innerHTML = winner_2 + html1;
        afterdeclaration(arr);
      }
    }
    if (count >= 9) {
      ans = winner(arr);
      if (ans == 0) {
        winner_1++;
        html1 = `<audio src="winner_sound.mp3" autoplay></audio>`;
        document.getElementById("Player1_score").innerHTML = winner_1 + html1;
        afterdeclaration(arr);
      } else if (ans == 1) {
        winner_2++;
        html1 = `<audio src="winner_sound.mp3" autoplay></audio>`;
        document.getElementById("Player2_score").innerHTML = winner_2 + html1;
        afterdeclaration(arr);
      }
      if (ans == -1) {
        tied++;
        document.querySelector("#Tied_score").innerHTML = tied;
        afterdeclaration(arr);
      }
    }
  }
}
