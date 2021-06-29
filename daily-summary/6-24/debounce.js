function debounce(fn, wait) {
  let timeout = null;
  return function () {
    // N.B. 这里是重点
    if (!timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  }
}

function handle() {
  console.log('trigger')
}

window.addEventListener('scroll', debounce(handle, 1000))

/**
 * debounce
 * 利用了 尾调用, 宏任务:setTimeout.
 * 将回调封装为防抖函数的参数, 只有当等待时间内不再触发事件时, 才会触发回调.
 */
