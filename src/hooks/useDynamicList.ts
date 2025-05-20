"use client";

import { useState, useCallback } from 'react';

// Generates a simple unique ID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

export function useDynamicList<T_Item extends { id: string }>(
  createDefaultItem: () => Omit<T_Item, 'id'>,
  initialItemCount: number = 1
) {
  const [items, setItems] = useState<T_Item[]>(() => 
    Array.from({ length: initialItemCount }, () => ({ ...createDefaultItem(), id: generateId() } as T_Item))
  );

  const addItem = useCallback(() => {
    setItems(prevItems => [...prevItems, { ...createDefaultItem(), id: generateId() } as T_Item]);
  }, [createDefaultItem]);

  const removeItem = useCallback((id: string) => {
    setItems(prevItems => {
      if (prevItems.length <= 1) return prevItems; // Prevent removing the last item
      return prevItems.filter(item => item.id !== id);
    });
  }, []);

  const updateItem = useCallback((id: string, updates: Partial<Omit<T_Item, 'id'>>) => {
    setItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, ...updates } : item))
    );
  }, []);
  
  const resetItems = useCallback(() => {
    setItems(Array.from({ length: initialItemCount }, () => ({ ...createDefaultItem(), id: generateId() } as T_Item)));
  }, [createDefaultItem, initialItemCount]);

  return { items, addItem, removeItem, updateItem, resetItems };
}
