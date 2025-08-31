import { Address } from './address.interface';

export interface CoffeeOrder {
  coffeeType: string;
  sugar: number;
  sugarLevel: string;
  milk: number;
  milkType: string;
}

export interface Customer {
  name: string;
  email: string;
  address: Address;
}

function coffeeOrder(coffee: CoffeeOrder): CoffeeOrder {
  return coffee;
}
