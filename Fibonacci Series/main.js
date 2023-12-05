const fibonacci_series = function (n) {
  if (n == 1) {
    var loop = [0, 1];
    document.getElementById("output").innerHTML = loop;
    return loop;
  } else {
    const s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    document.getElementById("output").innerHTML = s;
    return s;
  }
};
