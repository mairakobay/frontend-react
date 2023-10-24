import { create } from 'zustand'

const useUserStore = create((set) => ({
  name: '',
  email: '',
  photo: '',
  isLogged: false,
  /*changeEmail: (email) => set({email:email}),*/

  login: (user) => set({ 
    name: user.name,
    email: user.email,
    photo: user.photo,
    isLogged: true,
  }),
  logout: () => set({ 
    name: '',
    email: '',
    photo: '',
    isLogged: false,
   }),
}))

export default useUserStore