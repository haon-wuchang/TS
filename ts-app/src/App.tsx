import './App.css';
import MenuList from './component/MenuList';
import EmployeeList from './component/EmployeeList';
import LunchList from './component/LunchList';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [menus, setMenus] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [foodList, setFoodList] = useState([]);
  
  useEffect(()=>{
    axios('data/ts.json')
      .then((res)=>{
        setMenus(res.data.menus);
        setEmployees(res.data.employees);
        setFoodList(res.data.foodList);
      })
      .catch(error => console.log(error));
  },[]);
  
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

