import './App.css';
import MenuList from './component/MenuList';
import EmployeeList from './component/EmployeeList';

export default function App() {
  const menus = [
      {
      name : 'apple',
      emoji : '🍎',
      price: 100
    },
    {
      name : 'banana',
      emoji : '🍌',
      source : '필리핀'
    },
    {
      name : 'coconut',
      emoji : '🥥',
      price: 1000,
    },
  ];

  const employees = [
      {
      name: '홍길동',
      age : 25,
      department : '영업부',
    },
    {
      name: '김민지',
      age : 30,
      department : '경영지원부',
    },
    {
      name: '철수박',
      age : 55,
      department : '총무부',
      emoji : '👩‍🦳'
    },
  ]

  return (
    <div className="App">
      <h1>하이 타입스크립트</h1><hr />
      <MenuList menus={menus}/>
      <hr />
      <EmployeeList employees= {employees}/>
    </div>
  );
}

