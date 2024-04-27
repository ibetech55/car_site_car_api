import { CreateCarAddressDto } from "../CarAddress/CreateCarAddressDtos";

export interface CreateCarDto {
  make: string;
  model: string;
  version: string;
  price: number;
  mileage: number;
  color: string;
  transmission: string;
  year: number;
  active: boolean;
  vin: string;
  address: CreateCarAddressDto | string;
}

export interface CreateCarDbDto {
    make: string;
    model: string;
    version: string;
    car_user_id: string;
    car_address_id: string;
    price: number;
    mileage: number;
    color: string;
    transmission: string;
    car_year: number;
    active: boolean;
    vin: string;
  }
