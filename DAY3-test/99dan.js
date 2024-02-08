var container = document.getElementById("container");
for (var i = 2; i <= 9; i++) {
  var div = document.createElement("div");
  var header = document.createElement("div");
  var header_num = document.createElement("span");
  var header_dan = document.createElement("span");
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
  var main = document.createElement("div");

  header_num.classList.add("header_num");
  header_num.style.color = rgbColor;
  header_num.style.fontSize = "60px";
  header_num.style.fontWeight = "600";
  header_num.textContent = `${i}`;
  header_dan.textContent = `단`;
  header_dan.style.fontSize = "40px";
  header_dan.style.fontWeight = "800";

  div.appendChild(header);
  header.appendChild(header_num);
  header.appendChild(header_dan);
  div.appendChild(main);
  for (var j = 1; j <= 9; j++) {
    var line = document.createElement("div");
    line.textContent = `${i} X ${j} = ${i * j} `;
    main.appendChild(line);
  }

  div.classList.add("grid-item"); // CSS 클래스 추가
  main.style.borderColor = rgbColor;
  main.style.borderWidth = "2px";
  main.style.borderStyle = "dashed";
  main.style.padding = "13px";
  container.appendChild(div); // container에 div 요소 추가
}
