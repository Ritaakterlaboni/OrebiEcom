import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(persist((set) => ({
      items: [],    //initial value
      addToCart: (product) =>set((state) => {
        // search korbe same item ki na
          const existingItem = state.items.find(
            (item) => (item._id || item.id) === (product._id || product.id),
          );
          //same item thakle increment  hobe
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                (item._id || item.id) === (product._id || product.id)
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item,
              ),
            };
          } 
          //same item na hole item add hobe
          else {
            return {
              items: [...state.items, { ...product, quantity: 1 }],
            };
          }
        }),
    }),
  ),
);

export default useCart;
