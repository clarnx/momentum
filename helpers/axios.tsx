// import axios from 'axios';
// import getConfig from 'next/config';

// const { publicRuntimeConfig } = getConfig();
// const BASE_URL = publicRuntimeConfig.BASE_URL;
// const TOKEN = typeof window !== 'undefined' ? '' : '';

// const instance = axios.create({
//   baseURL: BASE_URL,
//   headers: { Authorization: `Bearer ${TOKEN}` },
// });

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error?.response?.status === 401) {
//       console.log(error);
//       Promise.reject(error);
//       return;
//     }
//     return Promise.reject(error);
//   }
// );

// export default instance;
