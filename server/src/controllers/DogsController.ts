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

    const dog = {
      name,
      gender
    };

    const trx = await knex.transaction();

    try {
      const insertedIds = await trx('dogs').insert(dog);

      const dog_id = insertedIds[0];

      await trx.commit();

      return response.json({
        id: dog_id,
        ...dog,
      });
    } catch (e) {
      await trx.rollback();
      console.log("Error: ", e);
      return response.status(400).json({error: e});
    }
  }

  async clean(request: Request, response: Response) {
    console.log('Começou o clean');
    const trx = await knex.transaction();
    console.log('criou transacao');
    try {
      await trx('dogs').del();
      console.log('chamou delete');
      await trx.commit();
      console.log('chamou commit');
      return response.status(200).send('');
    } catch(e) {
      await trx.rollback();
      console.log(e);
    }
  }
}

export default DogsController;