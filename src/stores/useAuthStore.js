import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(persist((set, get) => ({
  user:null, returnTo:null,
  setUser:(user)=>set({user}), setReturnTo:(returnTo)=>set({returnTo}), logout:()=>set({user:null}),
  hasPermission:(permission)=>{ const user=get().user; return user?.role==='OWNER'||user?.permissions?.includes('*')||user?.permissions?.includes(permission) },
}), { name:'sabormoc-session', partialize:(state)=>({user:state.user}) }))
