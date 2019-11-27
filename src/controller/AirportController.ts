import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Airport} from "../entity/Airport";

export class AirportController {

    private airportRepository = getRepository(Airport);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.airportRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {

        return this.airportRepository.findOneOrFail(request.params.airportCode)
        .then((resolve) => {
            response.status(200).json(resolve);
        })
        .catch((reject) => {
            // console.log(reject);
            response.status(404).json();
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.airportRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.airportRepository.findOneOrFail(request.params.airportCode)
        .then((resolve) => {
            this.airportRepository.remove(resolve);
            response.status(204).json();
        })
        .catch((reject) => {
            // console.log(reject);
            response.status(404).json();
        });
    }
}