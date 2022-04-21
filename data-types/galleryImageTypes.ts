import { Timestamp } from "firebase/firestore";

export interface GalleryImage {
  timeStamp: Timestamp;
  imageUrl: string;
}
