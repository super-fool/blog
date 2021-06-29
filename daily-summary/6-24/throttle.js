function throttle(cb, wait) {
  var flag = true;
  return function () {
    if (flag) {
      cb();
      flag = false;
      setTimeout(() => flag = true, wait)
    }
  }
}

/**
 * throttle, 指定的时间内只会触发一次回调.
 */