/*
import Item from "Item"

class ItemService {
    private items: Item[] = [];
  
    public async createItem(item: Item): Promise<void> {
      this.items.push(item);
    }
  
    public async getItem(id: string): Promise<Item | undefined> {
      return this.items.find((item) => item.id === id);
    }
  
    public async updateItem(id: string, item: Item): Promise<void> {
      const index = this.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.items[index] = item;
      }
    }
  
    public async deleteItem(id: string): Promise<void> {
      this.items = this.items.filter((item) => item.id !== id);
    }
  }
*/