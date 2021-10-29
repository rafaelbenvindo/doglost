import { Request, Response } from 'express';
import knex from '../database/connection';

class DogsController {
  async index(request: Request, response: Response) {
    const { name, gender } = request.query;

    const dogs = await knex('dogs')
      .select('dogs.*');

    return response.json(dogs);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      gender
    } = request.body;

    const trx = await knex.transaction();

    const dog = {
      name,
      gender
    };
  
    const insertedIds = await trx('dogs').insert(dog);
  
    const dog_id = insertedIds[0];
  
    await trx.commit();
  
    return response.json({ 
      id: dog_id,
      ...dog,
    });
  }
}

export default DogsController;