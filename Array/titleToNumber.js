const titleToNumber = function(s) {
  // 先把 S 拆分成单个的char
  // 然后 再把每个char按照它的位数来*26 累加得到值
  let num = 0;
  // s.split("").forEach((valu, index) => {
  //   let b =
  //     (valu.charCodeAt(0) - 64) * Math.pow(26, s.split("").length - index - 1);

  //   num += b;
  // });
  const base = s.split("");
  for (let index = 0; index < base.length; index++) {
    num +=
      (base[index].charCodeAt(0) - 64) * Math.pow(26, base.length - index - 1);
  }
  return num;
};
