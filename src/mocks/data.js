const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=78`

export const categories = [
  { id:'all', name:'Todos' }, { id:'featured', name:'Destaques' }, { id:'frango', name:'Frango' }, { id:'carnes', name:'Carnes' }, { id:'peixe', name:'Peixe' }, { id:'hamburgueres', name:'Hambúrgueres' }, { id:'pizzas', name:'Pizzas' }, { id:'pratos', name:'Pratos' }, { id:'acompanhamentos', name:'Acompanhamentos' }, { id:'bebidas', name:'Bebidas' }, { id:'sobremesas', name:'Sobremesas' },
]

const commonModifiers = [
  { id:'size', name:'Escolha o tamanho', type:'single', required:true, minSelections:1, maxSelections:1, options:[{id:'small',name:'Individual',priceDelta:0},{id:'medium',name:'Médio',priceDelta:80},{id:'large',name:'Família',priceDelta:180}] },
  { id:'side', name:'Escolha o acompanhamento', type:'single', required:true, minSelections:1, maxSelections:1, options:[{id:'rice',name:'Arroz',priceDelta:0},{id:'xima',name:'Xima',priceDelta:0},{id:'fries',name:'Batata frita',priceDelta:40}] },
  { id:'extras', name:'Quer acrescentar?', type:'multi', required:false, minSelections:0, maxSelections:3, options:[{id:'cheese',name:'Queijo',priceDelta:50},{id:'egg',name:'Ovo',priceDelta:35},{id:'salad',name:'Salada',priceDelta:40}] },
]

export const products = [
  ['p1','frango-zambeziana','Frango à Zambeziana','Frango grelhado, leite de coco, limão e especiarias da casa.',520,'frango',true,true,'photo-1532550907401-a500c9a57435'],
  ['p2','matapa-com-camarao','Matapa com camarão','Folhas de mandioca, amendoim, coco e camarão.',480,'pratos',true,true,'photo-1547592180-85f173990554'],
  ['p3','peixe-grelhado','Peixe grelhado','Peixe fresco inteiro, molho de limão e ervas.',650,'peixe',true,false,'photo-1519708227418-c8fd9a32b7a2'],
  ['p4','picanha-na-brasa','Picanha na brasa','Corte tenro, grelhado no ponto e servido fatiado.',780,'carnes',true,true,'photo-1544025162-d76694265947'],
  ['p5','hamburguer-maputo','Hambúrguer Maputo','Carne 180 g, queijo, cebola caramelizada e molho da casa.',390,'hamburgueres',true,true,'photo-1568901346375-23c9450c58cd'],
  ['p6','hamburguer-frango','Hambúrguer de frango','Frango crocante, alface, tomate e maionese de alho.',340,'hamburgueres',true,false,'photo-1586190848861-99aa4a171e90'],
  ['p7','pizza-peri-peri','Pizza frango piri-piri','Mozzarella, frango, pimentos e piri-piri.',690,'pizzas',true,true,'photo-1574071318508-1cdbab80d002'],
  ['p8','pizza-margherita','Pizza Margherita','Tomate, mozzarella, manjericão e azeite.',590,'pizzas',true,false,'photo-1579751626657-72bc17010498'],
  ['p9','caril-de-caranguejo','Caril de caranguejo','Caranguejo, coco e especiarias servido com arroz.',720,'peixe',true,true,'photo-1603894584373-5ac82b2ae398'],
  ['p10','chamussas','Chamussas artesanais','Quatro unidades crocantes, carne ou vegetais.',220,'acompanhamentos',true,false,'photo-1601050690597-df0568f70950'],
  ['p11','batata-rustica','Batata rústica','Batata crocante com paprika e molho especial.',180,'acompanhamentos',true,false,'photo-1573080496219-bb080dd4f877'],
  ['p12','arroz-de-coco','Arroz de coco','Arroz perfumado preparado com coco fresco.',140,'acompanhamentos',true,false,'photo-1536304993881-ff6e9eefa2a6'],
  ['p13','salada-tropical','Salada tropical','Folhas, manga, abacate, tomate e sementes.',260,'pratos',true,false,'photo-1540420773420-3366772f4999'],
  ['p14','sumo-natural','Sumo natural','Manga, maracujá ou ananás. 400 ml.',150,'bebidas',true,false,'photo-1600271886742-f049cd451bba'],
  ['p15','refresco','Refrigerante','Coca-Cola, Fanta ou Sprite. 330 ml.',90,'bebidas',true,false,'photo-1629203851122-3726ecdf080e'],
  ['p16','pudim-de-coco','Pudim de coco','Cremoso, delicado e feito diariamente.',210,'sobremesas',true,true,'photo-1551024506-0bccd828d307'],
  ['p17','bolo-de-chocolate','Bolo de chocolate','Fatia generosa com ganache intensa.',240,'sobremesas',false,false,'photo-1578985545062-69928b1d9587'],
  ['p18','camarao-piri-piri','Camarão piri-piri','Camarão salteado, alho, limão e malagueta.',820,'peixe',true,true,'photo-1565680018434-b513d5e5fd47'],
].map(([id,slug,name,description,price,categoryId,available,featured,image]) => ({ id,slug,name,description,price,categoryId,available,featured,image:img(image),tags:[name,description,categoryId],modifierGroups:['bebidas','sobremesas','acompanhamentos'].includes(categoryId)?[]:commonModifiers }))

export const orders = [
  { id:'1058', customer:'Amélia Cossa', phone:'+258 84 456 7832', type:'DELIVERY', status:'READY_FOR_DELIVERY', total:1250, items:3, neighborhood:'Polana Cimento', reference:'Portão azul, perto da escola', receivedAt:'Há 4 min', courierId:null, payment:'M-Pesa', code:'4821' },
  { id:'1057', customer:'Júlio Mucavele', phone:'+258 86 112 0934', type:'PICKUP', status:'PREPARING', total:780, items:2, neighborhood:'Restaurante', reference:'', receivedAt:'Há 12 min', courierId:null, payment:'Dinheiro' },
  { id:'1056', customer:'Fátima Macamo', phone:'+258 87 090 4431', type:'DELIVERY', status:'OUT_FOR_DELIVERY', total:1640, items:5, neighborhood:'Sommerschield', reference:'Casa branca, nº 24', receivedAt:'Há 29 min', courierId:'c1', payment:'POS', code:'7359' },
  { id:'1055', customer:'Nelson Nhantumbo', phone:'+258 84 989 2311', type:'PREORDER', status:'CONFIRMED', total:920, items:2, neighborhood:'Restaurante', reference:'Chegada às 19:30', receivedAt:'Há 42 min', courierId:null, payment:'e-Mola' },
  { id:'1054', customer:'Sara Mondlane', phone:'+258 86 440 2188', type:'DELIVERY', status:'DELIVERED', total:860, items:2, neighborhood:'Coop', reference:'Bloco 7', receivedAt:'Ontem, 20:14', courierId:'c2', payment:'M-Pesa' },
]

export const couriers = [
  { id:'c1', name:'João Manuel', phone:'+258 84 765 1002', whatsapp:'+258 84 765 1002', status:'Em entrega', active:true, deliveries:84 },
  { id:'c2', name:'Carlos Bila', phone:'+258 86 322 4490', whatsapp:'+258 87 885 0011', status:'Disponível', active:true, deliveries:63 },
  { id:'c3', name:'Mateus Langa', phone:'+258 87 140 9087', whatsapp:'+258 87 140 9087', status:'Inativo', active:false, deliveries:41 },
]

export const reservations = [
  { id:'R-204', customer:'Teresa Chissano', time:'12:30', items:4, total:2200, status:'CONFIRMED' },
  { id:'R-205', customer:'Luís Matola', time:'13:15', items:2, total:960, status:'RECEIVED' },
  { id:'R-206', customer:'Eva Muianga', time:'19:00', items:6, total:3480, status:'PREPARING' },
]

export const team = [
  { id:'u1', name:'Sofia Mabote', role:'OWNER', phone:'+258 84 100 2000', status:'Ativo', permissions:['*'] },
  { id:'u2', name:'Maria Jamal', role:'ADMIN', phone:'+258 86 323 1290', status:'Ativo', permissions:['orders.view','orders.manage','products.view','products.manage','reservations.view'] },
  { id:'u3', name:'Tomás Sitoe', role:'ADMIN', phone:'+258 87 551 0762', status:'Ativo', permissions:['orders.view','customers.view'] },
]

export const auditEvents = [
  { id:1, date:'15 Ago 2026 • 14:30', actor:'Maria Jamal', action:'alterou permissões de Tomás Sitoe.', detail:'products.delete: removida' },
  { id:2, date:'15 Ago 2026 • 11:05', actor:'Sofia Mabote', action:'actualizou configurações de pagamento.', detail:'M-Pesa: activado' },
  { id:3, date:'14 Ago 2026 • 18:42', actor:'Maria Jamal', action:'marcou produto como indisponível.', detail:'Bolo de chocolate' },
]
