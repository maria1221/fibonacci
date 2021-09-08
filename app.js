// フィボナッチ数列を40番目まで出力する

'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
    // 0の時は0を返す
  }
  else if (n === 1) {
      return  1;
    //  1の時は1を返す
  }
  return fib(n - 1) + fib(n - 2);
    //  それ以外の時は、前と、前の前のフィボナッチ数を足し合わせた数を返す
}
// fib関数の中でfib関数自身を呼び出す　関数の定義の中で関数自身を呼び出すこと→再帰
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}