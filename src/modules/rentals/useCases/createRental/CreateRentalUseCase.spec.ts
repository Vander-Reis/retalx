import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/In-memory/RentalsRepositoryInMemory";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsReponsitoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsReponsitoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsReponsitoryInMemory);
  });

  it("should be able to create a new rental", async () => {
    await createRentalUseCase.execute({
      user_id: "12345",
      car_id: "121212",
      expected_return_date: new Date(),
    });
  });
});
