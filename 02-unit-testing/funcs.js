function isFive(num) {
return num == 5;
}

function isOdd(number) {
  if (typeof(number) != 'number') throw new TypeError('Not a Number!')
  return (Math.abs(number) % 2 == 1);
}

function myRange(min, max, step = 1) {
  let res = [];
  if (max < min) return res;

  for(let i = min; i <= max; i += step) {
    res.push(i);
  }
  return res;
}


module.exports = { isFive, isOdd, myRange };
