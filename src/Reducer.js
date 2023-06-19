export const initialState = {
    basket:[],
}

// selector - my way
export function getBasketTotal(basket) {
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
      total += basket[i].price;
    }
    return total;
  }
/* selector - professional way

export const getBasketTotal= (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
*/

const reducer = (state,action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            }
            default: return state;
    }
}

export default reducer;