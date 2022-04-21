import { addDoc, collection, Timestamp } from "firebase/firestore";
import { Product } from "../data-types/product-types";
import { db } from "../firebase";

const sendCakesData = (data: Product[]) => {
  data.map(async ({ type, name, imageUrl, pricing }) => {
    try {
      await addDoc(collection(db, "cakes"), {
        type: type,
        name: name,
        imageUrl: imageUrl,
        pricing: pricing,
        added: Timestamp.now(),
      });
    } catch (err) {
      console.log(err);
    }
  });
};

const sendCupCakesData = (data: Product[]) => {
  data.map(async ({ type, name, imageUrl, pricing }) => {
    try {
      await addDoc(collection(db, "cupCakes"), {
        type: type,
        name: name,
        imageUrl: imageUrl,
        pricing: pricing,
        added: Timestamp.now(),
      });
    } catch (err) {
      console.log(err);
    }
  });
};

const sendMixedCupCakesData = (data: Product[]) => {
  data.map(async ({ type, name, imageUrl, pricing }) => {
    try {
      await addDoc(collection(db, "mixedCupCakes"), {
        type: type,
        name: name,
        imageUrl: imageUrl,
        pricing: pricing,
        added: Timestamp.now(),
      });
    } catch (err) {
      console.log(err);
    }
  });
};

const sendDonutsData = (data: Product[]) => {
  data.map(async ({ type, name, imageUrl, pricing }) => {
    try {
      await addDoc(collection(db, "donuts"), {
        type: type,
        name: name,
        imageUrl: imageUrl,
        pricing: pricing,
        added: Timestamp.now(),
      });
    } catch (err) {
      console.log(err);
    }
  });
};

export const sendProductsToDatabase = (AllProductData: {
  // cakeData: Product[];
  // cupCakeData: Product[];
  // cupCakeMixData: Product[];
  donutData: Product[];
}) => {
  // sendCakesData(AllProductData.cakeData);
  // sendCupCakesData(AllProductData.cupCakeData);
  // sendMixedCupCakesData(AllProductData.cupCakeMixData);
  sendDonutsData(AllProductData.donutData);
};
