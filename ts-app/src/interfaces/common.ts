/***************************
MenuList interfaces
********************************/
export interface Menus {
    name: string;
    emoji : string;
}
export interface MenusPrice extends Menus {
    price? : number;
}
export interface MenusSource extends Menus {
    source? : string;
}
/*********************************
 EmployeeList interfaces
******************************/
export interface employees {
    name: string;
    age: number;
    department: string;
}
export interface employeesEmoji extends employees{
    emoji?: string;
}
/***************************
 LunchList interfaces
****************************/
export interface Lunchs {
    name: string;
    emoji: string;
}
export interface LunchsText extends Lunchs{
    text?: string;
}
export interface LunchsPrice extends Lunchs {
    price?: number;
}
