import React from 'react';
import { Lunchs, LunchsText, LunchsPrice } from '@interfaces/common';

type LunchListPropsCheck = {
    foodList: (Lunchs | LunchsText | LunchsPrice)[];
}

const LunchList: React.FC<LunchListPropsCheck> = ({ foodList }) => {
    return (
        <div>
            <ul>
                {foodList.map((food) => (
                    <li>
                        {food.name},
                        {food.emoji},
                        {'text' in food ? food.text : 'price' in food ? food.price : ''}
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default LunchList;