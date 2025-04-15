import './App.css';
import MenuList from './component/MenuList';
import EmployeeList from './component/EmployeeList';
import LunchList from './component/LunchList';

export default function App() {
  const menus = [
    {
      name: 'apple',
      emoji: '🍎',
      price: 100
    },
    {
      name: 'banana',
      emoji: '🍌',
      source: '필리핀'
    },
    {
      name: 'coconut',
      emoji: '🥥',
      price: 1000,
    }
  ];

  const employees = [
    { name: '홍길동', age: 25, department: '영업부', },
    { name: '김민지', age: 30, department: '경영지원부', },
    { name: '철수박', age: 55, department: '총무부', emoji: '👩‍🦳' }
  ]

  const foodList = [
    { name: '피자', emoji: '🍕', price: 2200 },
    { name: '샌드위치', emoji: '🥙', text: '존맛탱' },
    { name: '초밥', emoji: '🍣', price: 1000 },
    { name: '삼각김밥', emoji: '🍙', text: '모찌모찌 삼김' },
    { name: '라멘', emoji: '🥣', price: 10000 }
  ];


  return (
    <div className="App">
      <h1>하이 타입스크립트</h1><hr />
      <MenuList menus={menus} />
      <hr />
      <EmployeeList employees={employees} />
      <hr />
      <LunchList foodList={foodList}/>
    </div>
  );
}

