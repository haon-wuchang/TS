import React from 'react';
import {employees, employeesEmoji} from '@interfaces/common';
// 1.
// interface EmployeePropsCheck {
//     employees:{
//             name: string;
//             age: number;
//             department: string;
//             emoji?: string;
//             }[]
// }

// 2.
// interface employees {
//     name: string;
//     age: number;
//     department: string;
//     emoji?: string;
// }
// type EmployeePropsCheck = {
//     employees: employees[];
// }

// 3. 
// interface employees {
//     name: string;
//     age: number;
//     department: string;
// }
// interface employeesEmoji extends employees{
//     emoji?: string;
// }
// type EmployeePropsCheck = {
//     employees: (employees | employeesEmoji)[];
// }

//4. 
type EmployeePropsCheck = {
    employees: (employees | employeesEmoji)[];
}

const EmployeeList: React.FC<EmployeePropsCheck> = ({ employees }) => {

    return (
        <div>
            <ul>
                {employees.map((employee) => (
                    <li>
                        {employee.name},
                        {employee.age},
                        {employee.department},
                        {'emoji' in employee && employee.emoji}
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default EmployeeList;