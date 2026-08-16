export const ROLES = { OWNER: 'OWNER', ADMIN: 'ADMIN', COURIER: 'COURIER', CUSTOMER: 'CUSTOMER' }
export const ORDER_STATUS = { RECEIVED:'RECEIVED', CONFIRMED:'CONFIRMED', PREPARING:'PREPARING', READY_FOR_DELIVERY:'READY_FOR_DELIVERY', OUT_FOR_DELIVERY:'OUT_FOR_DELIVERY', DELIVERED:'DELIVERED', CANCELLED:'CANCELLED' }
export const statusLabels = { RECEIVED:'Novo', CONFIRMED:'Confirmado', PREPARING:'Em preparação', READY_FOR_DELIVERY:'Pronto', OUT_FOR_DELIVERY:'Em entrega', DELIVERED:'Entregue', CANCELLED:'Cancelado', READY:'Pronto', COMPLETED:'Finalizada' }
export const statusTones = { RECEIVED:'amber', CONFIRMED:'blue', PREPARING:'orange', READY_FOR_DELIVERY:'green', OUT_FOR_DELIVERY:'violet', DELIVERED:'green', CANCELLED:'red', READY:'green', COMPLETED:'green' }
export const PAYMENT_METHODS = [
  { id:'mpesa', name:'M-Pesa', note:'Pagamento pelo telemóvel' }, { id:'emola', name:'e-Mola', note:'Pagamento pelo telemóvel' }, { id:'cash', name:'Dinheiro', note:'Pague no momento da entrega' }, { id:'pos', name:'POS', note:'Cartão na entrega ou retirada' },
]
export const mozambiqueLocations = { Maputo:['Maputo Cidade','Matola','Boane','Marracuene'], Gaza:['Xai-Xai','Chókwè','Bilene'], Inhambane:['Inhambane','Maxixe','Vilankulo'], Sofala:['Beira','Dondo'], Manica:['Chimoio','Manica'], Tete:['Tete','Moatize'], Zambézia:['Quelimane','Mocuba'], Nampula:['Nampula','Nacala'], 'Cabo Delgado':['Pemba','Montepuez'], Niassa:['Lichinga','Cuamba'] }
