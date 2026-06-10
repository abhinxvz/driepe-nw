// Centralized Shipping Rates (Prices in INR)
export const SHIPPING_METHODS = {
  SPEEDY_OFFICE: {
    id: 'SPEEDY_OFFICE',
    name: 'SPEEDY (TO OFFICE)',
    price: 532.50,
    estimatedDays: '1-2 business days',
    courier: 'SPEEDY'
  },
  SPEEDY_ADDRESS: {
    id: 'SPEEDY_ADDRESS',
    name: 'SPEEDY (TO ADDRESS)',
    price: 763.00,
    estimatedDays: '1-2 business days',
    courier: 'SPEEDY'
  },
  ECONT_OFFICE: {
    id: 'ECONT_OFFICE',
    name: 'ECONT (TO OFFICE)',
    price: 432.50,
    estimatedDays: '1-2 business days',
    courier: 'ECONT'
  },
  ECONT_ADDRESS: {
    id: 'ECONT_ADDRESS',
    name: 'ECONT (TO ADDRESS)',
    price: 332.50,
    estimatedDays: '1-2 business days',
    courier: 'ECONT'
  },
  IN_STORE: {
    id: 'IN_STORE',
    name: 'IN-STORE PICKUP (VIKASNAGAR)',
    price: 0.00,
    estimatedDays: 'Ready in 24 hours',
    courier: 'IN_STORE'
  }
} as const;

export type ShippingMethodId = keyof typeof SHIPPING_METHODS;

// Helper to get an array of all methods for mapping in the UI
export const getShippingOptions = () => Object.values(SHIPPING_METHODS);