import express, { Request, Response } from 'express';
//import { createItem, getItem, updateItem, deleteItem } from '../controllers/items';

export const router = express.Router();

router.get('/:id', (req: Request, res: Response) => {
  const itemId = req.params.id;
//  const item = getItem(itemId);
 // res.send(item);
});

router.post('/', (req: Request, res: Response) => {
  const itemData = req.body;
//  const newItem = createItem(itemData);
//  res.send(newItem);
});

router.put('/:id', (req: Request, res: Response) => {
  const itemId = req.params.id;
 // const updatedItem = updateItem(itemId, req.body);
  //res.send(updatedItem);
});

router.delete('/:id', (req: Request, res: Response) => {
  const itemId = req.params.id;
 // deleteItem(itemId);
  res.send({ message: 'Item deleted' });
});

//wait for req/res message (2ndday!)