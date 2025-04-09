/*
타입스크립트의 클래스 타입
    클래스는 객체타입으로 OOP의 Encapsulation(캡슐화)가 적용된 타입이다
    클래스간의 상속이 가능하며, 이를 통해 확장성이 높다. 단, 메모리효율성이 좋지 않다
    클래스의 실행은 인스턴스를 생성하여 사용되며, new 라는 키워드를 통해 실행된다.

    클래스 정의형식 : 변수 + 함수가 같이 사용됨
    💥 class를 정의하기 전 생성할 클래스에 대한 객체 설계가 반드시 필요하다
    클래스명의 첫글자는 대문자!
    class 클래스명 {
        fields(필드명) 선언
        constructor(생성자 함수) 선언  -> 필드값 초기화하는 역할을 한다
        function(함수) 선언
    }

    인스턴스 생성 형식
    class의 인스턴스명 = new class의 생성자함수();
    💥class의 생성자함수는 클래스명과 동일하다!!

    객체 설계(모델링) 
    : 객체는 현실세계를 기준으로 정해지는 구체적인 값을 일반화하여 추상화하는 개념 
    ex) 아이돌 - 이름,나이,대표곡,노래를 부른다, 춤을춘다
*/

// 홍길동씨는 출근 전에 메가커피에서 아이스아메리카노 한잔을 주문하여 사무실에 들어간다.
// -> 고객은 출근 전에 카페에서 메뉴를 주문하여 건물에 들어간다.  
//  => 고객, 카페, 메뉴   
// 고객 : 이름,나이,주문메뉴, 돈, 주문한다 얘네를 캡슐화하는거임
// 카페 : 카페명 , 메뉴리스트, 음료를 만든다
// 메뉴 : 메뉴명, 가격

//메뉴 클래스 
class Menu {
    name: string;
    price: number;

    constructor(name: string,price: number){
        this.name = name;
        this.price = price;
    }
}

//고객 클래스 
class Customer {
    //fields 선언
    name: string;
    age: number;
    menu: Menu;
    money: number;
    //constructor 선언 
    constructor(name: string, age: number, menu: Menu, money: number){
        // name(field 에서 사용되는 이름) = name(컨스트럭터의 파라미터의 이름)
        // 이렇게 둘다 name 이면 뭐가 누구껀지 햇갈리므로 필드에 있는 이름은 this 를 붙여서 사용한다
        this.name = name;
        this.age = age;
        this.menu = menu;
        this.money = money;
    }
    //function 선언
    order() : void{
        console.log(`${this.name}이 ${this.menu.name}을/를 주문을 한다.`);        
    } ;
}
// 고객 인스턴스 생성
// const hong: Customer = new Customer('홍길동', 30, null, 10000);
const hong: Customer = new Customer('홍길동', 30, new Menu('카페라떼', 7000), 10000);  // new Menu('카페라떼', 7000) 얘가 여기에서만 사용되면 인스턴스 여기서 만들어도됨
console.log(hong.name);
console.log(hong.age);
console.log(hong.menu);
console.log(hong.money);
hong.order();


//카페 클래스
class Cafe {
    name: string;
    menu: Menu;

    constructor(name: string, menu: Menu){
        this.name = name;
        this.menu = menu;
    }
}








// UML - 위키백과 찾아서 뭔지는 알아두셈