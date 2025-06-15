import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

cloudinary.config({
  cloud_name: "dxf6aqqg6",
  api_key: "147265285393531",
  api_secret: "6ZcorKRaos2uFNUZRg6ZJqhiyjk",
});

export default cloudinary;
