import axios from "axios";

export const fetchPhotos = async (page, limit) => {
   try {
      const response = await axios.get(
         `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      return response.data;
   } catch (error) {
      console.error("Помилка:", error);
      throw error;
   }
};
