import { auditEvents, categories, couriers, orders, products, reservations, team } from '../mocks/data'
import { PAYMENT_METHODS } from '../constants/app'
import { restaurantConfig } from '../config/restaurant'
import { wait } from '../utils/format'

const clone = (data) => structuredClone(data)
const respond = async (data) => { await wait(); return clone(data) }

export const productsService = {
  getProducts: ({ category = 'all', search = '' } = {}) => respond(products.filter((product) => {
    const categoryMatch = category === 'all' || (category === 'featured' ? product.featured : product.categoryId === category)
    const query = search.trim().toLowerCase()
    return categoryMatch && (!query || product.tags.join(' ').toLowerCase().includes(query))
  })),
  getProductBySlug: (slug) => respond(products.find((product) => product.slug === slug) || null),
}
export const categoriesService = { getCategories: () => respond(categories) }
export const restaurantService = { getRestaurant: () => respond(restaurantConfig) }
export const paymentsService = { getMethods: () => respond(PAYMENT_METHODS) }
export const ordersService = {
  getOrders: () => respond(orders), getOrder: (id) => respond(orders.find((order) => order.id === id) || orders[0]),
  createOrder: async (payload) => { await wait(700); return { ...payload, id:String(1060 + Math.floor(Math.random()*30)), status:'RECEIVED', code:'4821', createdAt:new Date().toISOString() } },
  updateStatus: async (id, status) => { await wait(); const order=orders.find((item)=>item.id===id); if(order) order.status=status; return clone(order) },
  assignCourier: async (id, courierId) => { await wait(); const order=orders.find((item)=>item.id===id); if(order) order.courierId=courierId; return clone(order) },
  acceptDelivery: async (id, courierId='c2') => { await wait(); const order=orders.find((item)=>item.id===id); if(order?.courierId) throw new Error('Esta entrega já foi atribuída a outro entregador.'); if(order) order.courierId=courierId; return clone(order) },
  confirmDelivery: async (id, code) => { await wait(); const order=orders.find((item)=>item.id===id); if(code!==order?.code) throw new Error('Código incorrecto. Tente novamente.'); order.status='DELIVERED'; return clone(order) },
}
export const reservationsService = { getReservations: () => respond(reservations) }
export const couriersService = { getCouriers: () => respond(couriers) }
export const teamService = { getTeam: () => respond(team) }
export const auditService = { getEvents: () => respond(auditEvents) }
export const settingsService = { getSettings: () => respond({ restaurant:restaurantConfig, deliveryActive:true, pickupActive:true, preorderActive:true, baseFee:80 }) }
export const customersService = { getCustomers: () => respond(orders.map(({customer,phone},index)=>({ id:index+1,name:customer,phone,orders:index+2,lastOrder:'15 Ago 2026' }))) }
export const authService = {
  login: async ({ phone }) => { await wait(600); const role=phone.endsWith('000')?'OWNER':phone.endsWith('111')?'ADMIN':phone.endsWith('222')?'COURIER':'CUSTOMER'; return { id:`demo-${role}`, name:role==='OWNER'?'Sofia Mabote':role==='ADMIN'?'Maria Jamal':role==='COURIER'?'Carlos Bila':'Amélia Cossa', phone, role, permissions:role==='OWNER'?['*']:['orders.view','orders.manage','products.view','products.manage'] } },
  register: async (payload) => { await wait(600); return { ...payload, id:'customer-new', role:'CUSTOMER' } },
  verifyOtp: async (code) => { await wait(); if(code!=='123456') throw new Error('Código inválido. Use 123456 no modo de demonstração.'); return true },
}
export const realtimeService = { subscribe: () => () => {}, transport:'mock-polling' }
export const analyticsService = { track: (event, payload={}) => { if(import.meta.env.DEV) console.info(`[analytics] ${event}`, payload) } }
export const locationsService = { resolveLocation: () => respond({ latitude:-25.9692, longitude:32.5732, label:'Maputo Cidade' }) }
export const modifiersService = { getGroups: () => respond(products.flatMap((product)=>product.modifierGroups)) }
export const cartService = { validate: (cart) => respond({ valid:cart.length>0, items:cart }) }
