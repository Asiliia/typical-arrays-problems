
exports.min = function min (array) {
  if(!array){
    return 0;
  }
  return array.length > 0 ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  if(!array){
    return 0;
  }
  return array.length > 0 ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
  if(!array){
    return 0;
  }
  return array.length > 0 ? (array.reduce((sum, item) => sum + item) / array.length).toFixed(3) : 0;
}
