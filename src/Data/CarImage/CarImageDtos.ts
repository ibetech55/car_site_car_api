export interface CreateCarImageDto {
  filename: string;
  carId: string;
  position: number;
}

export interface CreateCarImageDbDto {
  filename: string;
  car_id: string;
  position: number;
  default_image: boolean;
}
