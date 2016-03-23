/*
 * str-repeat
 */

module.exports = function strRepeat(string, num) {
  var tmp = '';

  for (var i = 0; i < num; i++)
    tmp += string;

  return tmp;
};
