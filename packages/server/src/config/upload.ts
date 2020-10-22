import multer from 'multer'; // biblioteca para manipulação de arquivos
import path from 'path'; // forma de fazer caminhos alternativos na aplicação

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    },
  }),
};
