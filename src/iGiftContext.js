import React from 'react';

const iGiftContext = React.createContext({
    budget: 0,
    friends: [
        {
            id: 1,
            name: '',
            wishlist: [
                {
                    name: '',
                    cost: 0,
                    checked: false
                },
            ]
        },
    ],
    updateBudget: () => {},
    addItem: () => {},
    handleCheckboxChange: () => {}
    
})

export default iGiftContext;