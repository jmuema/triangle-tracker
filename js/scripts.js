function triangle() {
  var triangle = [length, height, hypotenuse];
  var length = parseInt(document.getElementById("length").value);
  var height = parseInt(document.getElementById("height").value);
  var hypotenuse = parseInt(document.getElementById("hypotenuse").value);


  if (length === height && height === hypotenuse && hypotenuse === length) {
    alert("Equilateral Triangle");
  }
  else if (length === height || length === hypotenuse || length === hypotenuse) {
    alert("Isosceles Triangle");
  }
  else if ((length + height) <= hypotenuse || (length + hypotenuse) <= height || (height + hypotenuse) <= length) {
    alert("NOT a Triangle");
  }
  else if (length !== height && height !== hypotenuse && length != hypotenuse) {
    alert("Scalene Triangle");
  }
  else {
    alert("error");
  }
}
