import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];
  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    category_id,
    brand,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      category_id,
      brand,
    });

    this.cars.push(car);
  }
}

export { CarsRepositoryInMemory };
