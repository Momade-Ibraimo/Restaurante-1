import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { cartItemKey } from '../utils/format'

export const useCartStore = create(persist((set, get) => ({
  items: [], open:false,
  setOpen: (open) => set({ open }),
  addItem: (product, { modifiers=[], quantity=1, note='' }={}) => set((state) => {
    const key=cartItemKey(product.id, modifiers)
    const existing=state.items.find((item)=>item.key===key && item.note===note)
    const unitPrice=product.price+modifiers.reduce((sum,item)=>sum+(item.priceDelta||0),0)
    if(existing) return { items:state.items.map((item)=>item.key===key&&item.note===note?{...item,quantity:item.quantity+quantity}:item), open:true }
    return { items:[...state.items,{ key,productId:product.id,name:product.name,image:product.image,basePrice:product.price,unitPrice,quantity,modifiers,note }], open:true }
  }),
  removeItem: (key) => set((state)=>({items:state.items.filter((item)=>item.key!==key)})),
  updateQuantity: (key, quantity) => set((state)=>({items:quantity<1?state.items.filter((item)=>item.key!==key):state.items.map((item)=>item.key===key?{...item,quantity}:item)})),
  clear: () => set({items:[],open:false}),
  count: () => get().items.reduce((sum,item)=>sum+item.quantity,0),
  subtotal: () => get().items.reduce((sum,item)=>sum+item.unitPrice*item.quantity,0),
}), { name:'sabormoc-cart', partialize:(state)=>({items:state.items}) }))
