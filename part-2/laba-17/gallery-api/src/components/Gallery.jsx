import { useEffect, useState } from "react";
import { fetchPhotos } from "../api/photosApi";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

const Gallery = () => {
   const [photos, setPhotos] = useState([]);
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(1);

   useEffect(() => {
      const pendingPhotos = async () => {
         setLoading(true);
         const data = await fetchPhotos(page, 4);
         setPhotos(data);
         setLoading(false);
      };
      pendingPhotos();
   }, [page]);
   return (
      <div>
         <h1>Gallery</h1>
         <div className="gallery__container">
            <div className="gallery-wrapper">
               <ul>
                  {photos.map((photo) => (
                     <li key={photo.id}>
                        <img
                           src={photo.download_url}
                           width="450px"
                           height="300px"
                           alt=""
                        />
                        <p>{photo.author}</p>
                     </li>
                  ))}
               </ul>
               <span>{loading ? <CircularProgress /> : ""}</span>
            </div>
            <div className="button-wrapper">
               <Button
                  variant="contained"
                  disabled={page === 1 ? true : false}
                  onClick={() => setPage((prev) => (prev === 1 ? 1 : prev - 1))}
               >
                  Попередні
               </Button>
               <Button
                  variant="contained"
                  onClick={() => setPage((prev) => prev + 1)}
               >
                  Наступні
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Gallery;
