const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const BASE_URL = "https://res.cloudinary.com/";
const APPEND = "/video/upload/";

const ENDPOINTS = {
  MEMO: `${BASE_URL}${CLOUD_NAME}${APPEND}`,
};

const getCloudinaryVideoUrl = (publicId) => {
  return `${ENDPOINTS.MEMO}${publicId}`;
};

export { ENDPOINTS, getCloudinaryVideoUrl };
