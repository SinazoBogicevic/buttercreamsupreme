import { getStorage, ref } from "firebase/storage";

const sendMultipleImagestoStorage = (files: [], e) => {
  e.preventDefault(); // prevent page refreshing
  const promises = [];
  const storage = getStorage();
};

export { sendMultipleImagestoStorage };
