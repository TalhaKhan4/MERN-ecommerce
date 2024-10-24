import multer from "multer";

const MAX_FILE_SIZE = 1.5 * 1024 * 1024; // 1.5MB in bytes

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const uploadFileUsingMulter = multer({
  storage: storage,
});

export { uploadFileUsingMulter };
