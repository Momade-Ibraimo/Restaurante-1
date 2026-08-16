import { describe, expect, it } from 'vitest'
import { authService, ordersService, productsService } from './api'

describe('serviços mockados',()=>{
  it('filtra produtos por categoria e pesquisa',async()=>{const products=await productsService.getProducts({category:'peixe',search:'camarão'});expect(products.length).toBeGreaterThan(0);expect(products.every((item)=>item.categoryId==='peixe')).toBe(true)})
  it('resolve papel pelo login único',async()=>{expect((await authService.login({phone:'+258 84 000 000'})).role).toBe('OWNER');expect((await authService.login({phone:'+258 84 000 222'})).role).toBe('COURIER')})
  it('não confirma entrega com código errado',async()=>{await expect(ordersService.confirmDelivery('1058','0000')).rejects.toThrow('Código incorrecto')})
})
