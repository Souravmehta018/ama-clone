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
            case 'REMOVE_FROM_BASKET':
                /*return{
                    ...state, basket: state.basket.filter(item => item.id !== action.id)
                }
                // this is deleting all items in basket with same id*/
                
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

                let newBasket = [...state.basket];
                if (index >= 0){
                    newBasket.splice(index, 1);
                }
                else{
                    console.warn(
                        'Cant remove the product as its not in basket!'
                    )
                }
                console.log(index);
                return{...state, basket: newBasket}


            default: return state;
    }
}

export default reducer;