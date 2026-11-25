// Categorías de gasto con su icono y color. El color identifica la categoría en listas y gráficos;
// no se usan el verde de ingresos, el ámbar de previsto ni el rojo de «te pasas», para no confundir.
import {
  Banknote, Bus, Ellipsis, Gift, HandCoins, HeartPulse, House, ReceiptText, Shirt, ShoppingCart, Tag, Ticket, UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
}

export const CATEGORIES: Category[] = [
  { id: 'vivienda', name: 'Vivienda', icon: House, color: '#4f63d2' },
  { id: 'supermercado', name: 'Supermercado', icon: ShoppingCart, color: '#e07b1f' },
  { id: 'facturas', name: 'Facturas', icon: ReceiptText, color: '#b8900a' },
  { id: 'transporte', name: 'Transporte', icon: Bus, color: '#1c94b8' },
  { id: 'ocio', name: 'Ocio', icon: Ticket, color: '#9a4fd0' },
  { id: 'restaurantes', name: 'Restaurantes', icon: UtensilsCrossed, color: '#d4537e' },
  { id: 'salud', name: 'Salud', icon: HeartPulse, color: '#13a39a' },
  { id: 'ropa', name: 'Ropa', icon: Shirt, color: '#6b7a99' },
  { id: 'regalos', name: 'Regalos', icon: Gift, color: '#b84fa0' },
  { id: 'otros', name: 'Otros', icon: Ellipsis, color: '#8a93a3' },
];

/** Categorías de ingresos sueltos. */
export const INCOME_CATEGORIES: Category[] = [
  { id: 'reembolso', name: 'Su parte', icon: HandCoins, color: '#2f8f6b' },
  { id: 'venta', name: 'Venta', icon: Tag, color: '#5b7c2e' },
  { id: 'extra', name: 'Extra', icon: Banknote, color: '#1f7a8c' },
  { id: 'otros-ingreso', name: 'Otros', icon: Ellipsis, color: '#7d8a83' },
];

export const categoriesFor = (kind: 'expense' | 'income' = 'expense') => (kind === 'income' ? INCOME_CATEGORIES : CATEGORIES);

export const category = (id: string) =>
  CATEGORIES.find((c) => c.id === id) ?? INCOME_CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[CATEGORIES.length - 1];
export const categoryName = (id: string) => category(id).name;
