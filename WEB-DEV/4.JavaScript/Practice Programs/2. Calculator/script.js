function arithmetic(operation) {
  var a = document.getElementById("A").value;
  var b = document.getElementById("B").value;
  a = Number(a);
  b = Number(b);
  if (operation == "add") {
    document.getElementById("res").value = a + b;
  }
  else if (operation == "sub") {
    document.getElementById("res").value = a - b;
  }
  else if (operation == "mul") {
    document.getElementById("res").value = a * b;
  }
  else if (operation == "div") {
    document.getElementById("res").value = a / b;
  }
  else{
    document.getElementById("A").value = "";
    document.getElementById("B").value = "";
    document.getElementById("res").value = "";
  }
}
