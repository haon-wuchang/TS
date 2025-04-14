/*
    인터페이스 : 클래스 형식의 객체 타입만 정의함, 
        바디 없이 헤더만 정의한다. 
        메모리에 생성이 불가하다(바디가 없어서 메모리에 생성 불가)
        인터페이스에는 생성자함수 사용x
*/

interface AnimalInterface {
    name: string;
    bloodType: string;
    color: string;

    sleep(): void;
}
// const at: AnimalInterface = new AnimalInterface(); 인터페이스 단독으로 객체 생성 불가!

// 인터페이스를 상속받는 경우에는 extends 가 아니라 implements 사용!
// 인터페이스의 속성과 함수를 반드시 모두 오버라이딩(Overriding) 해야한다💥
// 오버라이딩이란? 부모가 가지고 있는속성과 함수를 그대로 상속받아 구현하는 것을 의미함
// class CatInterface implements AnimalInterface{
//     type: string;
//     // name: string ;   // public 사용하면 얘네 안적어도됨
//     // bloodType: string ;
//     // color: string ;

//     constructor(public name: string, public bloodType: string, public color: string, type:string){        
//         this.type = type;
//         // this.name = name; // public 사용하면 얘네 안적어도됨
//         // this.bloodType = bloodType;
//         // this.color = color;
//     }

//     sleep(): void {
//         console.log(`${this.name}가 잠을 잔다.`);
//     };
// }

// const bbibb: CatInterface = new CatInterface('🐱삐삐','AB형','치즈색','코숏');
// bbibb.sleep();


// <예제 2>
// CatInterface를 class 가 아닌 인터페이스로 수정하기
// 자식 부모 둘다 인터페이스이면 extends 상속 받는거임
interface CatInterface extends AnimalInterface {
    type: string;
}
//  메모리에 올리기 위한구현 클래스 정의 
class InpClass implements CatInterface {
    //함수와 생성자 오버라이딩하기
    name: string;   
    bloodType: string;
    color: string;
    //CatInterface가 가지고 있는 type 을 가져오고싶음 => AnimalInterface대신 CatInterface 를 implements한다
    // 왜나면 CatInterface 는 AnimalInterface 얘를 상속받기때문에 AnimalInterface의 내용을 다 가지고잇음
    type: string;

    constructor(name: string, bloodType: string,color: string, type: string) {
        this.name = name; 
        this.bloodType = bloodType;
        this.color = color;
        this.type = type;
    }

    sleep(): void {
        console.log(`${this.name}가 잠을 잔다.`);
    };
}

const bbibb: CatInterface = new InpClass('🐱삐삐', 'AB형', '치즈색', '코숏');
bbibb.sleep();

// 타입스크립트에서 인터페이스를 메모리에 저장하고싶으면 구현클래스를 하나 만들어서 사용


