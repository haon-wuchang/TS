import React from 'react';
import {Menus, MenusPrice, MenusSource} from '@interfaces/common';
//프롭스 타입 체크 는 컴포넌트에 넘어가기 전에 체크 해야해서 컴포넌트 위에서 진행 => interface, type
// interface MenuListPropsCheck {
//     menus: {
//         name: string;
//         emoji: string;
//         price?: number;
//         source?: string;
//     }[]
// }

// 방법2 interface + type    => 이 객체를 재사용하기 위해서 interface, type 으로 분리한다. => 이름도 좀 바꾸고 만들기
// interface Menus {
//         name: string;
//         emoji : string;
//         price? : number;
//         source? : string;
//         }
// type MenuListPropsCheck = {
//     menus: Menus[];
// }

// 방법3 : 객체를 상속하는형태로 인터페이스(부모,자식 관계도출해서 만들기 => 필수항목, 옵션항목으로 나누기 ) 만들기
// 타입스크립트는 OOP적으로 코드를 짜야한다  => 객체중복을 줄이고 재사용성 높이기
// interface Menus {
//     name: string;
//     emoji : string;
// }
// interface MenusPrice extends Menus {
//     price? : number;
// }
// interface MenusSource extends Menus {
//     source? : string;
// }

// type MenuListPropsCheck = {
//     menus: (Menus | MenusPrice | MenusSource)[];
// }

//4. 인터페이스 또는 타입을 별도의 파일로 만들고 필요할때 임포트 해서 사용
// tsconfig.json 파일에 저장된 파일의 경로를 path 와 별칭으로 추가한 후 임포트
// interfaces 폴더 생성 - common.ts 
type MenuListPropsCheck = {
    menus: (Menus | MenusPrice | MenusSource)[];
}

const MenuList: React.FC<MenuListPropsCheck> = ({ menus }) => {
    return (
        <div>
            <h1>MenuList</h1>
            <ul>
                {menus.map((item) => (
                    <li>{item.name},{item.emoji},
                        {'price' in item ? item.price : 'source' in item ? item.source : ''}
                    </li>
                ))
                }
            </ul>
        </div>
    );
}


export default MenuList;