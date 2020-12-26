import React from 'react';

const iGiftContext = React.createContext({
    users: [],
    profiles: [],
    wishlists: [],
    updateBudget: () => {},
    addItem: () => {},
    handleCheckboxChange: () => {}
    
})

export default iGiftContext;