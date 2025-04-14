/*   
< 예제 >
동물병원 - 초코(개), 삐삐(고양이) 하양이(토끼)

부모 : Animal 클래스
속성: 이름, 혈액형, 색깔
행위: 먹는다, 잔다

    Dog(자식) extends Animal   => extends 뒤에 부모클래스를 적으면 Animal 의 자식이라는거임 
    속성, 행위는 부모한테 상속받아서 사용할수있음
    속성: 이름, 혈액형, 색깔
    행위: 먹는다, 잔다

    Cat(자식) extends Animal
    속성: 이름, 혈액형, 색깔
    행위: 먹는다, 잔다

    Rabbit(자식) extends Animal
    속성: 이름, 혈액형, 색깔
    행위: 먹는다, 잔다

    Dog choco = new Dog('🐶초코','A형','갈색');
    Cat bbibbi = new Cat('🐱삐삐','AB형','치즈색');
    Rabbit hayang = new Rabbit('🐰하양이','A형','흰색');

개 고양이 토끼의 공통점을 묶어서 부모클래스를 만든다 => Animal 클래스
*/

// 객체지향하는이유: 공통적인 속성을 뽑아 클래스로 만들고 그 클래스 재사용함
// 4. Animal 클래스는 직접적으로 호출이 안되는데 얘를 굳이 class 형태로 만들어야하나?
//  => 필요없는 부분을 지우고, 인터페이스 라는 이름으로 만든다
class Animal {
    name: string ;   
    bloodType: string ;
    color: string ;
    
    constructor(name: string, bloodType: string, color: string){ // 헤더
        this.name = name;  // 바디 // 이 부분이 별로 필요없댕
        this.bloodType = bloodType;
        this.color = color;
    }

    sleep(): void{
        console.log(`${this.name}가 잠을 잔다`); // 이 부분이 별로 필요없댕
    }
}

class Dog extends Animal {
    // 2. 개의 종류  -- 나머지 이름 혁액형,색깔, 함수 이런거는 다 부모한테 잇으니 자식한테서 삭제
    // 3. 자식한테만 잇는 거는 자식한테 적기
    type: string;

    constructor(name: string, bloodType: string, color: string, type:string){
        // 상속관계에서 자식생성자에서 부모생성자 호출할떄 사용하는 키워드 : super
        super(name, bloodType, color);
        this.type = type;
    }
}
//1. 상속관계일때  초코의 정보는 Dog 와 Animal 둘 다 들어있다  
    // 둘 다에 데이터가 중복으로 있으면 메모리가 비효율적으로 사용된다
    // 따라서 하나의 클래스에만 존재하면 된다 => 일반정보는 Animal 에 넣고
    // Dog 에는 속성만 넣는형태로 구성한다

// 상속 관계의 Dog 클래스 호출
const choco: Dog = new Dog('🐶초코','A형','갈색','푸들'); 
choco.sleep();

class Cat extends Animal{
    type: string;

    constructor(name: string, bloodType: string, color: string, type:string){
        super(name,bloodType,color);
        this.type = type;
    }
}

const bbibbi: Cat = new Cat('🐱삐삐','AB형','치즈색','코숏');
bbibbi.sleep();






