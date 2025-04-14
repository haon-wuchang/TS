/*
    타입 별칭 : 객체의 타입을 정의함. 인터페이스와 같은 역할로 사용됨
    얘는 타입스크립트에만 있음, 단독으로 메모리에 올라갈수없음.
    메모리에 올리기위해서 클래스 필요

    정의형식:
    type AnimalType = {

    };
*/
type AnimalType = {
    name: string;
    color: string;
    bloodType: string;

    sleep(): void;
};

// 타입을 구현하기 위한 클래스 정의
class typeClass implements AnimalType{
    name: string;
    color: string;
    bloodType: string;

    constructor(name: string, color: string, bloodType: string){
        this.name = name;
        this.color = color;
        this.bloodType = bloodType;
    }

    sleep(): void {
        // sleep 함수를 사용하지 않아도 오버라이딩 전부 해야한다
    }
    info(): void{
        console.log(`${this.name}의 혈액형은 ${this.bloodType}이고 색깔은 ${this.color}이다.`);        
    };
}

//AnimalType의 객체 생성
// 객체의 타입이 AnimalType info() 함수 호출 불가능
// const haru: AnimalType = new typeClass('하루','삼색','B형'); 

const haru: typeClass = new typeClass('하루','삼색','B형');
haru.info();  //info함수는 typeClass에만 있으니까 haru의 타입도 typeClass로 줘야한다 
                // 타입이 typeClass 면 => 메모리에 있는 모든 typeClass를 레퍼런스 할 수 있다
// 객체의 타입이 typeClass이므로 info() 함수 호출 가능
