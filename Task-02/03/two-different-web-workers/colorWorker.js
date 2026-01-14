self.onmessage = function (e) {
  if (e.data === "start") {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    self.postMessage(randomColor);
  }
};
