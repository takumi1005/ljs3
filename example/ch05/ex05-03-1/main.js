let x = 3, y;
x += y = 6*5/2;
// 計算する部分を括弧で囲みながら、優先順位を確認していく
// 乗算と除算（優先レベル14、左から右）
//     x += y = (6*5)/2
//     x += y = (30/2)
//     x += y = 15
// 代入（優先順位レべル3、右から左）
//     x += (y = 15)
//     x += 15     （yの値は15になる。代入前のxの値は3）
//     18          （xの値は18になる）
console.log(x); // 18
