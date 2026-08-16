import { create } from 'zustand'

export const useUiStore = create((set) => ({
  toast:null, adminMenu:false,
  showToast:(message,tone='success')=>{ set({toast:{message,tone}}); window.setTimeout(()=>set({toast:null}),3000) },
  setAdminMenu:(adminMenu)=>set({adminMenu}),
}))
