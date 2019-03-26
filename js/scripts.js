function triangle() {
  var triangle = [length, height, hypotenuse];
  var length = parseInt(document.getElementById("length").value);
  var height = parseInt(document.getElementById("height").value);
  var hypotenuse = parseInt(document.getElementById("hypotenuse").value);


  if (length === height && height === hypotenuse && hypotenuse === length) {
    output.innerHTML = ("Equilateral Triangle")
  }
  else if (length === height || length === hypotenuse || length === hypotenuse) {
    output.innerHTML = ("Isosceles Triangle")
  }
  else if ((length + height) <= hypotenuse || (length + hypotenuse) <= height || (height + hypotenuse) <= length) {
    output.innerHTML = ("NOT a Triangle")
  }
  else if (length !== height && height !== hypotenuse && length != hypotenuse) {
    output.innerHTML = ("Scalene Triangle")
  }
  else {
    output.innerHTML = ("error");
  }
}
