/*
    enum(enumeration) : 열거형으로 표현되는 데이터를 저장하는 형식
        자동으로 인덱스가 할당된다
        기존의 객체요소(오브젝트리터럴)는 primitive 데이터타입만 가능했는데
        enum 에는 다양한데이터타입이 사용 가능하다

    정의 형식
    enum 객체명 {
        enumItem1,  // 인덱스0
        enumItem2,  // 인덱스 1
        ...
    }

    enum 의 좋은점
    - 얘는 오브젝트리터럴과는 다르게 바로 for문을 이용해서 바로 데이터에 접근이 가능하다
*/

// 기존의 오브젝트리터럴 정의 형식
const objLiteral = {
    name : '홍길동',
    age : 30
};
// enum 형식
enum objEnum {
    김철수,  // 실제 얘네(하얀글씨)는 값이 아니라 enum의 프로퍼티 값이다
    홍영희 = '홍홍홍'  // 이렇게 값을 넣을수도 있다.
};
console.log(objEnum.김철수); // 결과값 0
console.log(objEnum.홍영희); // 결과값 홍홍홍

// 출력형식의 차이점 !!
/*
    오브젝트리터럴 -> 직접적으로 for ..in 사용이 불가능하다   => 자바스크립트 정리해놓은거 봐!
    => 얘일때 for in 사용하는법은 object.keys() 라는 메소드를 사용해서 배열로 만든 후에 사용이 가능
    enum -> 직접적으로 for ..in 사용이 가능하다
*/
// 오브젝트리터럴 의 for문 사용 
const keys = Object.keys(objLiteral);
console.log(keys);  // 결과값 [name ,age ]
keys.forEach((data)=>{
    console.log(`${objLiteral[data as keyof typeof objLiteral]}`);   
    // 결과값 홍길동 30
})

// enum 의 for in 사용
for(const data in objEnum){
    console.log(`${data} : ${objEnum[data as keyof typeof objEnum]}`);    
};



