// 我的理解：防抖函数debounce意义是防止多次加载执行事件，给事件一个时间，时间还没到，重新执行下一次事件，只需执行一次
    // 其他理解：如果我们直接执行refresh，refresh函数会被执行30次，我们通过防抖函数把refresh函数传入到debounce函数中执行，生成一个函数，最终执行了一次
    // 防抖动事件
export function debounce (func, delay) {
  let time = null
  return function (...args) {
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
