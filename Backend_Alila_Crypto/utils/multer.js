import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from "./cloudinary.js";
import path from 'path';

// 1. Storage per Profilo
const avatarStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'profilo',
    format: async (req, file) => path.extname(file.originalname).slice(1).toLowerCase(),
    public_id: (req, file) => {
      const timestamp = Date.now();
      const baseName = path.parse(file.originalname).name.replace(/\s/g, "_");
      return `avatar_${baseName}_${timestamp}`;
    }
  }
});

// 2. Storage per Community
const communityStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'community_posts',
    resource_type: "auto", // immagini e video
    public_id: (req, file) => {
      const timestamp = Date.now();
      const baseName = path.parse(file.originalname).name.replace(/\s/g, "_");
      return `post_${baseName}_${timestamp}`;
    }
  }
});

// Filtro per Profilo
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    'image/jpeg', 'image/png', 'image/jpg', 'image/HEIC',
  ];
  if (allowedMimeTypes.includes(file.mimetype.toLowerCase())) {
    cb(null, true);
  } else {
    cb(new Error('❌ Formato file non supportato. Accettiamo solo jpg, jpeg e png.'), false);
  }
};

// Filtro per community (immagini e video)
const communityFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    'image/jpeg', 'image/png', 'image/jpg', 'image/HEIC',
    'video/mp4', 'video/quicktime', 'video/x-matroska'
  ];
  if (allowedMimeTypes.includes(file.mimetype.toLowerCase())) {
    cb(null, true);
  } else {
    cb(new Error('❌ Solo immagini (jpg/png) o video (mp4/mov/mkv)'), false);
  }
};

// Middleware multer per avatar
export const uploadMulter = multer({
  storage: avatarStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
});

// Middleware multer per community
export const uploadCommunity = multer({
  storage: communityStorage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB max
  fileFilter: communityFilter
});
