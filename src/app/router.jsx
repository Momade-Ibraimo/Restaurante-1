/* oxlint-disable react/only-export-components */
import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, Outlet, useLocation } from 'react-router-dom'
import { StoreLayout } from '../components/layout/StoreLayout'
import { AdminLayout } from '../components/layout/AdminLayout'
import { CourierLayout } from '../components/layout/CourierLayout'
import { useAuthStore } from '../stores/useAuthStore'
import { Skeleton } from '../components/ui'

const lazyNamed=(loader,name)=>lazy(()=>loader().then((module)=>({default:module[name]})))
const HomePage=lazy(()=>import('../pages/store/HomePage.jsx')),ProductPage=lazy(()=>import('../pages/store/ProductPage.jsx')),CheckoutPage=lazy(()=>import('../pages/store/CheckoutPage.jsx'))
const OrderConfirmedPage=lazyNamed(()=>import('../pages/store/OrderPages.jsx'),'OrderConfirmedPage'),OrderTrackingPage=lazyNamed(()=>import('../pages/store/OrderPages.jsx'),'OrderTrackingPage')
const LoginPage=lazyNamed(()=>import('../pages/auth/AuthPages.jsx'),'LoginPage'),RegisterPage=lazyNamed(()=>import('../pages/auth/AuthPages.jsx'),'RegisterPage'),VerifyPhonePage=lazyNamed(()=>import('../pages/auth/AuthPages.jsx'),'VerifyPhonePage'),RecoverPasswordPage=lazyNamed(()=>import('../pages/auth/AuthPages.jsx'),'RecoverPasswordPage')
const AccountHome=lazyNamed(()=>import('../pages/account/AccountPages.jsx'),'AccountHome'),ProfilePage=lazyNamed(()=>import('../pages/account/AccountPages.jsx'),'ProfilePage'),CustomerOrdersPage=lazyNamed(()=>import('../pages/account/AccountPages.jsx'),'CustomerOrdersPage'),CustomerOrderDetail=lazyNamed(()=>import('../pages/account/AccountPages.jsx'),'CustomerOrderDetail'),AddressesPage=lazyNamed(()=>import('../pages/account/AccountPages.jsx'),'AddressesPage'),SecurityPage=lazyNamed(()=>import('../pages/account/AccountPages.jsx'),'SecurityPage')
const DashboardPage=lazyNamed(()=>import('../pages/admin/AdminPages.jsx'),'DashboardPage'),AdminOrdersPage=lazyNamed(()=>import('../pages/admin/AdminPages.jsx'),'AdminOrdersPage'),AdminOrderDetail=lazyNamed(()=>import('../pages/admin/AdminPages.jsx'),'AdminOrderDetail'),ReservationsPage=lazyNamed(()=>import('../pages/admin/AdminPages.jsx'),'ReservationsPage'),ResourcePage=lazyNamed(()=>import('../pages/admin/AdminPages.jsx'),'ResourcePage'),ModifiersPage=lazyNamed(()=>import('../pages/admin/AdminPages.jsx'),'ModifiersPage'),TeamPage=lazyNamed(()=>import('../pages/admin/AdminPages.jsx'),'TeamPage'),AuditPage=lazyNamed(()=>import('../pages/admin/AdminPages.jsx'),'AuditPage'),SettingsPage=lazyNamed(()=>import('../pages/admin/AdminPages.jsx'),'SettingsPage')
const CourierHomePage=lazyNamed(()=>import('../pages/courier/CourierPages.jsx'),'CourierHomePage'),DeliveryDetailPage=lazyNamed(()=>import('../pages/courier/CourierPages.jsx'),'DeliveryDetailPage'),CourierHistoryPage=lazyNamed(()=>import('../pages/courier/CourierPages.jsx'),'CourierHistoryPage'),NotFoundPage=lazy(()=>import('../pages/NotFoundPage.jsx'))

function Loading(){return <div className="page-shell py-10"><Skeleton className="h-12 w-1/3"/><Skeleton className="mt-6 h-80"/></div>}
function Lazy({children}){return <Suspense fallback={<Loading/>}>{children}</Suspense>}
export function AuthenticatedRoute(){const user=useAuthStore((s)=>s.user);const location=useLocation();return user?<Outlet/>:<Navigate to="/login" replace state={{from:location.pathname}}/>}
export function AdminRoute(){const user=useAuthStore((s)=>s.user);return ['OWNER','ADMIN'].includes(user?.role)?<Outlet/>:<Navigate to="/login" replace/>}
export function OwnerRoute(){const user=useAuthStore((s)=>s.user);return user?.role==='OWNER'?<Outlet/>:<Navigate to="/admin" replace/>}
export function CourierRoute(){const user=useAuthStore((s)=>s.user);return user?.role==='COURIER'?<Outlet/>:<Navigate to="/login" replace/>}
export function PermissionRoute({permission}){const allowed=useAuthStore((s)=>s.hasPermission(permission));return allowed?<Outlet/>:<Navigate to="/admin" replace/>}
export function PublicRoute(){return <Outlet/>}

const withLazy=(element)=><Lazy>{element}</Lazy>
export const router=createBrowserRouter([
  {element:<StoreLayout/>,children:[
    {path:'/',element:withLazy(<HomePage/>)},{path:'/produto/:slug',element:withLazy(<ProductPage/>)},{path:'/pedido/:id',element:withLazy(<OrderTrackingPage/>)},{path:'/pedido/:id/confirmado',element:withLazy(<OrderConfirmedPage/>)},
    {element:<AuthenticatedRoute/>,children:[{path:'/checkout',element:withLazy(<CheckoutPage/>)},{path:'/conta',element:withLazy(<AccountHome/>)},{path:'/conta/perfil',element:withLazy(<ProfilePage/>)},{path:'/conta/pedidos',element:withLazy(<CustomerOrdersPage/>)},{path:'/conta/pedidos/:id',element:withLazy(<CustomerOrderDetail/>)},{path:'/conta/enderecos',element:withLazy(<AddressesPage/>)},{path:'/conta/seguranca',element:withLazy(<SecurityPage/>)}]},
  ]},
  {element:<PublicRoute/>,children:[{path:'/login',element:withLazy(<LoginPage/>)},{path:'/cadastro',element:withLazy(<RegisterPage/>)},{path:'/verificar-telefone',element:withLazy(<VerifyPhonePage/>)},{path:'/recuperar-senha',element:withLazy(<RecoverPasswordPage/>)}]},
  {element:<AdminRoute/>,children:[{path:'/admin',element:<AdminLayout/>,children:[
    {index:true,element:withLazy(<DashboardPage/>)},{path:'pedidos',element:withLazy(<AdminOrdersPage/>)},{path:'pedidos/:id',element:withLazy(<AdminOrderDetail/>)},{path:'reservas',element:withLazy(<ReservationsPage/>)},{path:'cardapio/produtos',element:withLazy(<ResourcePage type="products"/>)},{path:'cardapio/categorias',element:withLazy(<ResourcePage type="categories"/>)},{path:'cardapio/complementos',element:withLazy(<ModifiersPage/>)},{path:'entregadores',element:withLazy(<ResourcePage type="couriers"/>)},{path:'entregadores/:id',element:withLazy(<ResourcePage type="couriers"/>)},{path:'clientes',element:withLazy(<ResourcePage type="customers"/>)},{path:'equipe',element:withLazy(<TeamPage/>)},{path:'auditoria',element:withLazy(<AuditPage/>)},{path:'configuracoes/restaurante',element:withLazy(<SettingsPage section="restaurante"/>)},{path:'configuracoes/funcionamento',element:withLazy(<SettingsPage section="funcionamento"/>)},{path:'configuracoes/entregas',element:withLazy(<SettingsPage section="entregas"/>)},{path:'configuracoes/reservas',element:withLazy(<SettingsPage section="reservas"/>)},{path:'configuracoes/pagamentos',element:withLazy(<SettingsPage section="pagamentos"/>)},
  ]}]},
  {element:<CourierRoute/>,children:[{path:'/delivery',element:<CourierLayout/>,children:[{index:true,element:withLazy(<CourierHomePage/>)},{path:':orderId',element:withLazy(<DeliveryDetailPage/>)},{path:'history',element:withLazy(<CourierHistoryPage/>)}]}]},
  {path:'*',element:withLazy(<NotFoundPage/>)},
])
