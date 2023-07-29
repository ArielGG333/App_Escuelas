import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import sharp from "sharp";
import fs from "fs";
const router = express.Router();

// const app = express();
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:escuela", (req, res) => {
  const escuela = req.params.escuela;
  //res.send( escuela);
  //console.log(escuela+'123')
  return escuela;
});

// Configurar el almacenamiento de archivos con Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const usuarioId = req.params.usuarioId;
    const folderPath = `../reactfront/public/uploadImages/${usuarioId}`;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    cb(null, folderPath);
  },
  filename: function (req, file, cb) {
    //const filetypes = /jpg|jpeg|png/;
    //const mimetype = filetypes.test(file.mimetype);
    //const extname = filetypes.test(path.extname(file.originalname));
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  // dest: "./uploadImages",
  // dest: "reactfront/public/uploadImages",
  limits: { fileSize: 5000000 },
  fileFilter: (req, file, cb) => {
    const escuela = req.params.escuela;
    const filetypes = /jpg|jpeg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: El archivo debe ser  .jpg, .jpeg o .png ");
  },
});

// Configurar una ruta para cargar las imagenes
router.post("/:usuarioId/:escuela", upload.single("file"), (req, res) => {
  const usuarioId = req.params.usuarioId;
  const { filename, path } = req.file;
  const escuela = req.params.escuela;

  const helperImg = (filePath, fileName, size = 50) => {
    return sharp(filePath)
      .resize(size)
      .toFile(`../reactfront/public/uploadImages/${usuarioId}/${fileName}`);
  };

  if (helperImg(req.file.path, `resize-${req.file.filename}`, 155)) {
    res.send("todo bien");
   // fs.unlink(`../reactfront/public/uploadImages/${usuarioId}/${req.file.filename}`)
   
  } else {
    res.status(403);
  }

  
});

//Eliminar una Imagen

router.delete("/:usuarioId/:escuela", (req, res) => {
  const usuarioId = req.params.usuarioId;
  const escuela = req.params.escuela;
  const rutaArchivo = `../reactfront/public/uploadImages/${usuarioId}/${escuela}`;
  fs.unlink(rutaArchivo, (error) => {
    if (error) {
      console.error("Error al iminar la imagen:", error);
      res.status(500).send("Error al eliminar la imagen");
    } else {
      console.log("Imagen eliminada", escuela);

      res.status(200).send(" Imagen eliminada");
    }
  });
});

/*
router.get("/", (req, res)=>{
    res.send("todo bien");
} )
*/

export default router;
