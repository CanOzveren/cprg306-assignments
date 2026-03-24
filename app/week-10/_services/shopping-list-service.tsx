import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export type Item = {
  id?: string;
  name: string;
  quantity: number;
  category: string;
};

export async function getItems(userId: string): Promise<Item[]> {
  const items: Item[] = [];

  const itemsCollection = collection(db, "users", userId, "items");
  const q = query(itemsCollection);
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...(doc.data() as Omit<Item, "id">),
    });
  });

  return items;
}

export async function addItem(
  userId: string,
  item: Omit<Item, "id">
): Promise<string> {
  const itemsCollection = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
}
