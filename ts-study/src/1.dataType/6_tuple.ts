/*
배열(Array)이란 ? !동일한 데이터타입!을 가진 값들을 !물리적으로 연속해서 저장!해놓은 객체
    자바스크립트에서는 배열이 힙에 저장이 된다

튜플(Tuple) 이란?  !다양한 데이터타입!을 가진 값들을 !물리적으로 연속해서 저장!해놓은 객체 
    object type(객체)임 => 얘도 힙에 저장됨
    배열의 데이터타입을 다양하게 사용할때 쓰는게 튜플임
     인덱스별로 데이터 타입을 정의한다!
    튜플 정의 형식 : const,let 변수명: [데이터1의데이터타입, 데이터2의데이터타입, ...] = [데이터1, 데이터2, ...];
*/
const numTuple : [number, string, boolean, number] = [1,'홍',true,4];
const numTuple2  = [1,'홍',true,4];  // 데이터가 많을때(json 이나 db 연동해서 데이터 가져올 때)는 이렇게 사용해도 된다
console.log(numTuple);
console.log(numTuple2);

// const [] = 함수명 => 구조분해할당을 이용하여 인덱스별로 튜플에 저장함
const [a,b,c,d] = numTuple;  //numTuple 의 인덱스0이 a 가 되는거임
console.log(a);




