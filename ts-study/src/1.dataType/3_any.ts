/*
    any 타입은 타입을 제한하지 않고, 동적으로 값을 입력받을 수 있음
*/

let obj: any = {x: 100};  
console.log(typeof(obj)); // 객체타입
// obj 라는 변수는 any 타입이기 때문에 변수의 값은 나중에 바뀔수있다 => 동적
obj = 200;  
console.log(typeof(obj)); // primitive 타입
console.log('obj',obj);







