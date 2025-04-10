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

-------------------------------------------
    아이돌클래스 -> 메모리 생성x
            |
            |
     이용복, 황현진, 방찬 ...  ---> 객체 = 인스턴스 -> 메모리에 생성됨

    객체는 메모리에 생성이 되어지는 각각의 주소이름을 이용복, 황현진 이렇게 부르는거임
    용복,현진,방찬 얘네 각각 클래스를 만들면 너무 많아지자나
    그래서 객체의 공통점을 찾아서 아이돌 이라는 클래스 하나만 정의를 한다
    클래스는 객체를 만들기위한 하나의 틀이다
    클래스 정의 형식은 언어마다 조금씩 다르다.
*/

/* 예제 2
고객클래스 -> 메모리 생성x
            |
            |
이용복, 황현진, 방찬 ...  ---> 객체 = 인스턴스 -> 메모리에 생성됨
고객이 출근 전 메가커피에서 카페라떼를 주문한다.

1. 카페가 영업시작을 한다  => 객체로 생성이 되서 메모리에 올라가야한다(new 연산자 사용)
2. 메뉴판 출력 
3. 고객이 커피숍에 들어간다
4. 고객이 메뉴를 선택 후 주문을 한다.
5. 주문확인 - 결제금액, 주문메뉴 확인
    => 결제금액이 부족할 때 -> 금액 부족 메세지 전달
    => 결제금액이 맞을경우 => 6번 실행
6. 주문메뉴 제조하기
7. 고객에게 주문메뉴 완료 메세지 전달
8. 고객이 주문메뉴를 받는다 - 카페를 나간다
0. 고객이 여러명이면 순서대로 주문하게 해야한다  => 3번부터 8번까지 반복해야함
------
5번은 여러번 사용될수있다 . 이떄 사용해야할것은? for문인가 while문 인가
    => while 문 사용
- 반복횟수가 정확히 정해져있을때 for문 사용
- while문은 while문 안에 조건이 false가 될떄까지 돈다
*/

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
        this.name = name;
        this.age = age;
        this.menu = menu;
        this.money = money;
        console.log(`**************************************************`);  //4.
        console.log(`-------------------------->>${this.name}님이 입장`);  //4.
        console.log(`**************************************************`);  //4.
        
    }
    //function 선언
    order() : void{
        console.log(`${this.name}이 ${this.menu.name}을/를 주문을 한다.`);        
    } ;
    //9.
    addExtraCharge(extraCharge: number): void {
        this.money += extraCharge;  // +=을 풀어쓰면 이거임   => this.money + extraCharge ; 
        console.log(`${this.name}이 금액충전을 완료했습니다.`);       
    }
    //11-1.
    receiveOrderMenu(OrderMenu: string): void {
        console.log(`${this.name}이 메뉴를 가지고 나간다.`);        
    }
}

//카페 클래스
class Cafe {
    name: string;
    menus: Menu[];
    orderMenu? : Menu; //10-1. 얘는 처음 가게 열었을때는 주문이 없으니까 있어도되고없어도 되니까 ? 사용

    constructor(name: string, menus: Menu[]){
        this.name = name;
        this.menus = menus;
        console.log(`********************************`); //2.
        console.log(`\t\t영업 시작`);
        console.log(`********************************`);
        this.showMenu(); //2.
    }
    showMenu(): void { //2.
        console.log(`--------------${this.name}메뉴리스트------------------`);
        console.log(`번호\t메뉴명\t메뉴가격`);
        console.log(`-----------------------------------------`);
        this.menus && this.menus.map((menu,index)=>{
            menu.name.length>5 ? console.log(`${index+1}\t${menu.name}\t${menu.price}`):
            console.log(`${index+1}\t${menu.name}\t${menu.price}`);                    
        })
        console.log(`-----------------------------------------`);  
    }
    //6. 주문처리하는 함수 선언   takeOrder함수는 고객이 저 주문할게요 요청했을떄 그 처리를받는거임
        // takeOrder(고객의 주문사항): void {// }    
    takeOrder(name: string, orderMenu: Menu, payment: number): boolean {  
        this.orderMenu = orderMenu; //10-2.
        //7. 주문확인 - 결제금액, 주문메뉴 확인 => // 주문클래스 따로 만들어서 사용해도 된다
        let orderCheckResult: boolean = false;
        const omenu = this.menus.find((menu)=> menu.name === orderMenu.name);        
        if(payment >= orderMenu.price){
            console.log(`${name}님 주문이 완료되었습니다. 잠시만 기다려주세요.`);
            this.makeMenu(name);  
            orderCheckResult = true;        
        }else{
            console.log(`${this.name}  =>> ${name}님 결제금액이 부족합니다.`);   
        }   
        return orderCheckResult;  
    }
    //8. 주문메뉴 제조하기
    makeMenu(name: string): void {
        console.log(`...............................................`);      
        console.log(`.............메뉴를 제조 중 입니다...............`);      
        console.log(`...............................................`);      
        console.log(`${name}님 음료가 준비되었습니다. 가져가세요.`); 
    }
    //10. 고객한테 음료주기
    getOrderMenu(): string{
        const menuName: string = this.orderMenu ? this.orderMenu.name : '';//10-3.
        return menuName;
    };  
}

//인스턴스 생성
//0. 메뉴판 리스트 생성
const menuData: {name:string, price:number}[] = [
    {name:'아이스아메리카노',price: 5000},
    {name:'카페라떼',price: 6000},
    {name:'아인슈페너',price: 8000},
    {name:'민트초코프라푸치노',price: 10000},
];
const menus :Menu[] = menuData.map((menu)=> new Menu(menu.name, menu.price));  // map의 리턴타입은 배열이다

//1. 카페영업 시작
const megaCoffee: Cafe = new Cafe('메가커피🥤',menus);

 //고객 입장  12-1. 고객리스트 생성
const customers:{name: string ,age: number , menu: Menu, money: number}[] = [
    { name:'이용복', age:26, menu: new Menu(menuData[1].name,menuData[1].price), money:5000 },
    { name:'황현진', age:26, menu: new Menu(menuData[2].name,menuData[2].price), money:10000 },
    { name:'방찬', age:28, menu: new Menu(menuData[0].name,menuData[0].price), money:5000 },
];
    customers.map((customerData)=>{
        const customer: Customer = new Customer(customerData.name, customerData.age,
                                                customerData.menu, customerData.money); 
    //메뉴선택 후 주문 : 고객 < ---- > 카페 
    let orderFlag = true;
    while (orderFlag) {
        if(megaCoffee.takeOrder(customer.name, customer.menu, customer.money)){
            // 음료 제조 중
            orderFlag = false;
        } else{
            // 결제 금액 부족 시        
            customer.addExtraCharge(500);
        };
    }

    //고객이 주문메뉴를 받고 카페를 나간다
    customer.receiveOrderMenu(megaCoffee.getOrderMenu());
    });












