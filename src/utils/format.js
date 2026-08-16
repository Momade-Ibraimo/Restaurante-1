export const formatPrice = (value) => `${new Intl.NumberFormat('pt-MZ').format(value)} MT`
export const wait = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms))
export const classNames = (...values) => values.filter(Boolean).join(' ')
export const cartItemKey = (productId, modifiers = []) => `${productId}:${modifiers.map((item) => item.id).sort().join('-')}`
