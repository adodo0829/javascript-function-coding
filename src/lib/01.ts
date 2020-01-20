/**
 * existy: 表示是否存在这个值
 * 区分 null, undefined 和 其他对象
 */
function existy(v: any): boolean {
  return v != null
}

/**
 * truth: 是否是 js 的原始真值, 0也为真值
 */
function truth(v: any): boolean {
  return (v !== false) && existy(v)
}

export {
  existy,
  truth
}