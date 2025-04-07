/*
타입스크립트의 Primitive 데이터 타입 실습

변수 정의 : const,let 변수명: 타입정의 = 데이터값 ;
*/

// 정수형 데이터
let number1: number = 100 ;
number1 = 10;
console.log('number1',number1);

// 실수형 데이터
// let dnumber1: double = 1.2354; (X) 이런 실수형도 모두 number 에 속하기때문에 number 로 써야한다
let dnumber1: number = 1.2354; 
dnumber1 = 300;
console.log('dnumber1',dnumber1);
