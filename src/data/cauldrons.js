import { v4 } from "uuid";

const cauldrons = [
  {
    name: "Red Potion",
    brand: "The Twinrova Sisters",
    price: 24.99,
    description: "Restores health.",
    magicConcentration: 0.1,
    pints: 124,
    id: v4()
  },
  {
    name: "Green Potion",
    brand: "Hyrule Market Town",
    price: 20.99,
    description: "Restores mana.",
    magicConcentration: 1.0,
    pints: 124,
    id: v4()
  },
  {
    name: "Blue Potion",
    brand: "Kakariko Village",
    price: 53.99,
    description: "Restores both health and mana.",
    magicConcentration: 0.8,
    pints: 124,
    id: v4()
  },
  {
    name: "Purple Potion",
    brand: "The Scarlet Witch",
    price: 102.99,
    description: "Unknown effect. Has a dangerously high magic concentration.",
    magicConcentration: 0.99,
    pints: 124,
    id: v4()
  }
]

export default cauldrons;