export function enableScrolling() {
  window.onscroll = function () {};
}

export function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}
