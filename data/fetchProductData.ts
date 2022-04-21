import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

/**
 * function that fetch all product data from database in realtime
 */

const getProductsFromDatabase = (productType: string) => {
  let data: [];

  const q = query(collection(db, productType), orderBy("created", "desc"));
  onSnapshot(q, (QuerySnapshot) => {
    //   data = QuerySnapshot.docs.map((doc) => {
    //   })
  });
  if (data) {
    return data;
  }
};

export { getProductsFromDatabase };
