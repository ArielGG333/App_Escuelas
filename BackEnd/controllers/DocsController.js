/*
import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";


import fs from "fs";

 const router = express.Router();
// const router = express();

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

export const createDocs =  (req, res) => {
  // Configurar el almacenamiento de archivos con Multer
  
  const storage = multer.diskStorage({
    destination: "../reactfront/public/uploadDocs",
    
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload =  multer({
    storage, 
    dest: "../../reactfront/public/uploadDocs",
    limits: { fileSize: 5000000 },
    fileFilter: (req, file, cb) => {
        
      const filetypes = /pdf|doc/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Error: El archivo debe ser  .pdf o .doc ");
    },
  });

  return upload.single("file")
  /*
   router.post("/uploadDocs", upload.single("file"), (req, res) => {
   res.send("todo bien");
});
*/

/*
};

export const getDocs = () => {
  router.get("/", (req, res) => {
    const folderPath = "../../reactfront/public/uploadDocs";
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error("Error al leer los archivos:", err);
        res.status(500).json({ error: "Error al leer los archivos" });
      } else {
        res.json({ files });
      }
    });
  });
};



//Eliminar una Escuela

export const deleteDocs = () => {
  router.delete("/:fileName", (req, res) => {
    const folderPath = "../reactfront/public/uploadDocs";
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error("Error al leer los archivos:", err);
        res.status(500).json({ error: "Error al leer los archivos" });
      } else {
        res.json({ files });
      }
    });
  });
};

// Configurar una ruta para servir archivos

// Configurar una ruta para cargar archivos


/*
router.get("/", (req, res)=>{
    res.send("todo bien");
} )

export default router;
*/
