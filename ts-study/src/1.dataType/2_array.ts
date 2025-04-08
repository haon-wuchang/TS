/*
    타입스크립트 배열 형식
    1. const,let 변수명: 타입[] = [];
    2. const,let 변수명: Array<타입> = new Array();  => 배열을만드는 Array 클래스 사용
                    =>  <> 이거를 제너릭이라고 부른다
*/

// 1,2,3,4,5 숫자를 저장하는 배열을 생성
const numberArray1: number[] = [1,2,3,4,5];
const numberArray3: Array<number> = [1,2,3,4,5];
console.log('1번',numberArray1[0]);

const numberArray2: Array<number> = new Array(1,2,3,4,5);
// Array 클래스에 데이터를 넣을 때는 push, get 으로 데이터 넣고 꺼내야함
console.log('2번',numberArray2[0]);
// console.log('2번',numberArray2.get(1));

// forEach, for ... in , map ... 사용해서 데이터 출력하는것은 자바스크립트와 방식이 동일하다
numberArray1.forEach(num =>  console.log('forEach11',num));  
numberArray2.forEach(num =>  console.log('forEach22',num));  
    
//for of
for(const nums of numberArray1){
    console.log('forof',nums);
}

