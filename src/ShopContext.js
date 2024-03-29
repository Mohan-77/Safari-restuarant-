import { createContext, useContext, useReducer,  } from "react";
import shopReducer, { initialState } from "./shopReducer";
import { type } from "@testing-library/user-event/dist/type";


const ShopContext = createContext(initialState);

export const ShopProvider = ({ children  }) => {

    const [state, dispatch] = useReducer(shopReducer, initialState)

    const addToCart = (product)  => {

        const updatedProduct = state.products.concat(product);
        calculateTotal(updatedProduct);
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                products: updatedProduct
            }
        });
    };

    const removeFromCart = (product) => {
        const updatedProduct = state.products.filter(p => p.id !== product.id);
        calculateTotal(updatedProduct)
        dispatch({
            type:'REMOVE_FROM_CART',
            payload: {
                products: updatedProduct
        
            }
        })
    };
    
  const calculateTotal = (products) => {
    let total = 0;
    products.forEach(pro => {
        total += pro.price;
    });

    dispatch({
        type: "CALCULATE_TOTAL_PRICE",
        payload: total
    });
}

    const values = {
        products: state.products,
        total: state.total,
        addToCart,
        removeFromCart
    }

    return <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider>

};

const useSop = () => {
    const context = useContext(ShopContext);
    if (context === undefined){
        throw new Error('useShopping must be used within the Shopping Provider');
    } 
    return context;
};

export default  useSop;