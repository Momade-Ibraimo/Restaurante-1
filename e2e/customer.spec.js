import { expect, test } from '@playwright/test'

test('cliente entra, navega no produto e mantém carrinho',async({page,isMobile})=>{
  await page.goto('/')
  await expect(page.getByRole('heading',{name:/Comida que sabe/})).toBeVisible()
  await page.getByRole('link',{name:'Frango à Zambeziana'}).first().click()
  await page.getByText('Individual').click()
  await page.getByText('Arroz',{exact:true}).click()
  await page.getByRole('button',{name:/Adicionar/}).last().click()
  const cartIndicator=()=>isMobile?page.getByText(/1 item/):page.getByRole('button',{name:/1 · 520 MT/})
  await expect(cartIndicator()).toBeVisible()
  await page.reload()
  await expect(cartIndicator()).toBeVisible()
})
