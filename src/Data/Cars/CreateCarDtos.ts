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
  address: string;
  city: string;
  state: string;
  zipCode: string;
  exteriorColor: string;
  interiorColor: string;
  condition: string;
  numberOwners: number;
  accident: boolean;
  drivetrain: string;
  engine: string;
  comment: string;
  cleanHistoryReport: boolean;
  hasIssue: boolean;
  numberKeys: number;
  hasPayments: boolean;
  status: string;
  features: string;
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
  exterior_color: string;
  interior_color: string;
  condition: string;
  number_owners: number;
  accident: boolean;
  drive_train: string;
  engine: string;
  seller_notes: string;
  clean_history_report: boolean;
  has_issue: boolean;
  number_keys: number;
  has_payments: boolean;
  status: string;
}
