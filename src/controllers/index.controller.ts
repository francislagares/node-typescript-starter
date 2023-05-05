import { Request, Response } from 'express';

class IndexController {
  public getIndex = async (req: Request, res: Response) => {
    try {
      res.status(200).send('Hello World!');
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  };

  public getApibyId = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ id: req.params.id });
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      }
    }
  };
}

export default IndexController;
