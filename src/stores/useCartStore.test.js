import { beforeEach, describe, expect, it } from 'vitest'
import { useCartStore } from './useCartStore'

const product={id:'p1',name:'Frango',price:500,image:'food.jpg'}
beforeEach(()=>{localStorage.clear();useCartStore.setState({items:[],open:false})})
describe('carrinho',()=>{
  it('soma itens iguais sem personalização',()=>{useCartStore.getState().addItem(product);useCartStore.getState().addItem(product);expect(useCartStore.getState().items).toHaveLength(1);expect(useCartStore.getState().count()).toBe(2);expect(useCartStore.getState().subtotal()).toBe(1000)})
  it('mantém personalizações diferentes como itens distintos',()=>{useCartStore.getState().addItem(product,{modifiers:[{id:'cheese',name:'Queijo',priceDelta:50}]});useCartStore.getState().addItem(product,{modifiers:[{id:'bacon',name:'Bacon',priceDelta:70}]});expect(useCartStore.getState().items).toHaveLength(2);expect(useCartStore.getState().subtotal()).toBe(1120)})
  it('remove item quando quantidade chega a zero',()=>{useCartStore.getState().addItem(product);const key=useCartStore.getState().items[0].key;useCartStore.getState().updateQuantity(key,0);expect(useCartStore.getState().items).toHaveLength(0)})
})
