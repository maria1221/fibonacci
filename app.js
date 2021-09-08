// // フィボナッチ数列を40番目まで出力する

// 'use strict';
// function fib(n) {
//   if (n === 0) {
//     return 0;
//     // 0の時は0を返す
//   }
//   else if (n === 1) {
//       return  1;
//     //  1の時は1を返す
//   }
//   return fib(n - 1) + fib(n - 2);
//     //  それ以外の時は、前と、前の前のフィボナッチ数を足し合わせた数を返す
// }
// // fib関数の中でfib関数自身を呼び出す　関数の定義の中で関数自身を呼び出すこと→再帰
// const length = 40;
// for (let i = 0; i <= length; i++) {
//     console.log(fib(i));
// }


'use strict';
const memo = new Map();
// memoという名前のMapを作る。変数名をmemoにするのは、計算結果を保存しておく方法を「メモ化」というから
memo.set(0, 0);
memo.set(1, 1);
// もしMapがnをキーとした答えを持っていればその値を関数の値として返す
// そうでない場合は、再帰関数を計算した値をMapに格納した後に返す
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}