'use client'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export type CartItem = {
  productId: number
  title: string
  price: number
  img: string
  quantity: number
  size?: string
}

type CartContextValue = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void
  removeItem: (productId: number, size?: string) => void
  updateQuantity: (productId: number, quantity: number, size?: string) => void
  clear: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

const STORAGE_KEY = 'cart:v1'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
      if (raw) {
        const parsed: CartItem[] = JSON.parse(raw)
        if (Array.isArray(parsed)) {
          setItems(parsed)
        }
      }
    } catch {}
  }, [])

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
      }
    } catch {}
  }, [items])

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    console.log('addItem called with:', { item, quantity });
    setItems(prev => {
      console.log('Previous items:', prev);
      const index = prev.findIndex(i => i.productId === item.productId && i.size === item.size)
      console.log('Found existing item at index:', index);
      if (index !== -1) {
        const copy = [...prev]
        copy[index] = { ...copy[index], quantity: copy[index].quantity + quantity }
        console.log('Updated existing item:', copy[index]);
        return copy
      }
      const newItem = { ...item, quantity };
      console.log('Adding new item:', newItem);
      return [...prev, newItem]
    })
  }, [])

  const removeItem = useCallback((productId: number, size?: string) => {
    setItems(prev => prev.filter(i => !(i.productId === productId && i.size === size)))
  }, [])

  const updateQuantity = useCallback((productId: number, quantity: number, size?: string) => {
    setItems(prev => prev.map(i => (i.productId === productId && i.size === size ? { ...i, quantity: Math.max(1, quantity) } : i)))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])

  const value = useMemo<CartContextValue>(() => ({ items, addItem, removeItem, updateQuantity, clear, totalItems, subtotal }), [items, addItem, removeItem, updateQuantity, clear, totalItems, subtotal])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


