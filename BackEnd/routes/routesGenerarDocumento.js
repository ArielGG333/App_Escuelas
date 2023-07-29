/*import express from 'express'
import { readFileSync } from "fs";
import path from "path";
import { createServer } from "http";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import ImageModule from 'docxtemplater-image-module-free';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


//const router = express.Router()

const router = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.use(express.json());

router.post("/", (req, res) => {
  const { usuarioId, escuela, direccion, telefono, grado, division, turno, anio, materia, profesor, datos } = req.body;

  // Cargar el archivo de plantilla de Word
  const templatePath = path.join(__dirname, "../PlantillaPlanilla1.docx");
  const content = readFileSync(templatePath, "binary");

  const zip = new PizZip(content);
//  const doc = new Docxtemplater(zip);

  const doc = new Docxtemplater();
  doc.loadZip(zip);

    // Agregar el módulo de imágenes a Docxtemplater
//    doc.attachModule(ImageModule);


     // Configurar la función getImage para cargar la imagen desde la URL
  const getImage = (tagValue) => {
    const imageUrl = `http://localhost:3000/uploadImages/${usuarioId}/resize-${encodeURIComponent(tagValue)}.jpg`;
    return { src: imageUrl, width: 100, height: 100 };
  };
  doc.setImageModule(ImageModule);
  ImageModule.prototype.getImage = getImage;

//  const encodedEscuela = encodeURIComponent(escuela);
  // Cargar la imagen desde su ubicación original
//  const imageSrc = `../../reactfront/public/uploadImages/${usuarioId}/resize-${encodedEscuela}.jpg`;
  /*

  const getImage = (imageSrc) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (error) => {
        reject(error);
      };
      image.src = imageSrc;
    });
  };

  getImage(imageSrc)
    .then((image) => {
      const imageWidth = image.width;
      const imageHeight = image.height;

      doc.setSize(imageWidth, imageHeight); // Establecer el tamaño del documento según las dimensiones de la imagen

      
//      const imageData = readFileSync(imageSrc);
//      const imageEncoded = imageData.toString("base64");
//const imageData = readFileSync(imageSrc);
//const imageEncoded = imageSrc.toString("base64");
      // Configurar los datos en la plantilla de Word
      const tableRows = datos.map((dato, index) => {
        return {
          index: index + 1,
          apellido: dato[0].apellido,
          nombre: dato[0].nombre,
          nota1: dato[0].nota,
          nota2: dato.length >= 3 ? dato[1].nota : "-",
          nota3: dato.length >= 4 ? dato[2].nota : "-",
          promedio:
            dato.length === 4
              ? dato[3].promedio
              : dato.length === 3
              ? dato[2].promedio
              : dato[1].promedio,
        };
      });

      doc.setData({
        escuela,
        direccion,
        telefono,
        grado,
        division,
        turno,
        anio,
        materia,
        profesor,
        rows: tableRows,
//        logo: imageData,
      });

      try {
        doc.render();
        const generatedDocument = doc.getZip().generate({ type: "nodebuffer" });

        // Enviar el documento de Word generado al cliente
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        res.setHeader("Content-Disposition", `attachment; filename="Notas ${escuela} - ${grado} - ${division} - ${anio}.docx"`);
        res.send(generatedDocument);
      } catch (error) {
        console.error("Error al generar el documento:", error);
        res.status(500).send("Error al generar el documento.");
      }
    })
    
//});

export default router
*/