import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "abc12340",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be to create a car with exists license plante", async () => {
    await createCarUseCase.execute({
      name: "Car1",
      description: "Description car",
      daily_rate: 100,
      license_plate: "abc-12340",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });

    await expect(
      createCarUseCase.execute({
        name: "Car2",
        description: "Description car",
        daily_rate: 100,
        license_plate: "abc-12340",
        fine_amount: 60,
        brand: "brand",
        category_id: "category",
      })
    ).rejects.toEqual(new AppError("Car already exists!"));
  });

  it("should be able to create a car with avaliable true by default ", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Avaliable",
      description: "Description car",
      daily_rate: 100,
      license_plate: "abcd-12340",
      fine_amount: 60,
      brand: "brand",
      category_id: "category",
    });
    expect(car.available).toBe(true);
  });
});
