`Ситуация при которой конвертнутые разные значения равны между собой
let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!
`