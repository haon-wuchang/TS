/*
기본함수 선언 방식
    function 함수명(파라미터: 파라미터타입):반환값 타입 {
        실행로직
        return 반환값;  // 반환값이 없으면 반환값타입도 안넣으면됨
    }
    // 파라미터가 필수입력이 아닌 선택옵션일때는
    (파라미터? :파라미터타입) 으로 작성한다
*/

// greet1('홍길동')  --> 화면출력 : 반갑습니다 홍길동님!
function greet1(name: string){
    console.log(`반갑습니다 ${name}님`);
}
greet1('홍길동');

// greet2('홍길동',30)  --> 화면출력 : 홍길동의 나이는 30 입니다, 반환값 화면출력
function greet2(name: string, age: number): string {
    return `${name}의 나이는 ${age}입니다.`; 
}
const str: string = greet2('홍길동',30);
console.log(str);
console.log(greet2('홍길동',30));

// greet3('홍길동','서울시 강남구') : 화살표함수를 통해 함수표현식으로 생성
// --> 화면출력 : 이름-홍길동, 주소-서울시 강남구
// age 나이를 입력받는 변수 매개변수 추가 단, 타입은 정해지지않음
// name과 address 는 필수입력이고 age는 선택옵션이다
const greet3 = (name :string, address: string, age?: any) => {
    age ? 
    console.log(`이름-${name}, 주소-${address}, 나이-${age}`) :
    console.log(`이름-${name}, 주소-${address}`)
}
greet3('홍길동','서울시 강남구');
greet3('홍길동','서울시 강남구',30);

// null 은 힙에 주소가 없을때 뜨고 undefined 는 값이 없을때 뜨는거임

// greet4(1,2,3,4,5) 값을 입력받아 배열객체로 화면 출력 -화살표함수
const greet4 = (...numbers: number[]) => {
    console.log(numbers);    
}
greet4(1,2,3,4,5);

// const greet4 = (numbers: number[]) => {
//     console.log(numbers);    
// }
// greet4([1,2,3,4,5]);  // 배열객체만 들어감

