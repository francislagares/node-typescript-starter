import { Request, Response } from 'express';

class Controller {
  public getIndex = async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).send({ health: 'OK!' });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  };

  public getApibyId = async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).json({ id: req.params.id });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  };
}

export default Controller;
