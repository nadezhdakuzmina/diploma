import axios from 'axios';

import { BACKEND_BASE_STATIC_URL } from '@constants';

import type { ApiExtraParams, City, Image } from '@types';

type UploadStaticResponse = {
  success: boolean;
  image: Image;
} | {
  error: string;
};

export const uploadImage = async (file: File, extraParams?: ApiExtraParams): Promise<Image | null> => {
  const formData = new FormData();
  formData.append('image', file);

  return axios(`${BACKEND_BASE_STATIC_URL}/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as UploadStaticResponse)
    .then((data) => 'success' in data ? data.image : null);
};
