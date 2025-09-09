import { create } from 'zustand'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (id: string, size: string, color: string) => void
  updateQuantity: (id: string, size: string, color: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  setIsOpen: (isOpen: boolean) => void
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (item) => {
    const { items } = get()
    const existingItem = items.find(
      (i) => i.id === item.id && i.size === item.size && i.color === item.color
    )
    
    if (existingItem) {
      set({
        items: items.map((i) =>
          i.id === item.id && i.size === item.size && i.color === item.color
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        )
      })
    } else {
      set({
        items: [...items, { ...item, quantity: item.quantity || 1 }]
      })
    }
  },
  
  removeItem: (id, size, color) => {
    set({
      items: get().items.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      )
    })
  },
  
  updateQuantity: (id, size, color, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id, size, color)
      return
    }
    
    set({
      items: get().items.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    })
  },
  
  clearCart: () => set({ items: [] }),
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
  },
  
  setIsOpen: (isOpen) => set({ isOpen })
}))