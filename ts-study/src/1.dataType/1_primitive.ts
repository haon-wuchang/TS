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

// 불린 
let flag: boolean = false;
flag = !flag;
console.log('flag',flag);

// 배열안의 요소를 문자열타입으로 지정 
const names: string[] = ['홍길동','홍길순','홍길영']; // 얘는 배열안에 값들의 데이터타입을 string 으로 한다는거임
// const names2: string = ['홍길동','홍길순','홍길영']; 
// names,names2 에는 객체의주소가 들어가게된다 근데 이 객체가 들어가는주소인 names는 타입이 정해져있어서 내가 맘대로 string 바꾸면 안됨 
console.log('names',names);

// 초기값 : undefined(원시데이터의 초기값) , null(참조 객체 데이터의 초기값)
// const initName: undefined = undefined; 
// const initArray: null = null;
const initName = undefined; // 위에 처럼 써도 되긴하는데 똑같은값 두번쓰니까 비효율이라 이렇게 많이 사용한다
const initArray = null;
console.log(initName);
console.log(initArray);

// typeof
const x: number = 1000;
const y: number = 100;

console.log('값의 비교',x === y);
console.log('타입의 비교',typeof(x) === typeof(y));



