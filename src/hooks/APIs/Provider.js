import axios from "axios";
import Cryp from "@/hooks/Crypto/crypt";
const ls_token_key = 'CANCER_LOCAL_STORAGE_TOKEN';
let header_api = { [import.meta.env.VITE_HEADER_PRIVATE_KEY_API]: import.meta.env.VITE_SECRET_PRIVATE_KEY_API };

const Provider = {
  get: (endpoint) => {
    header_api.Authorization = `Bearer ${Cryp.decryptData(localStorage.getItem(ls_token_key))}`;
    axios.defaults.headers = header_api;
    return axios.get(endpoint);
  },
  post: (endpoint, obj = {}) => {
    header_api.Authorization = `Bearer ${Cryp.decryptData(localStorage.getItem(ls_token_key))}`;
    axios.defaults.headers = header_api;    
    return axios.post(endpoint, obj);
  },
  patch: (endpoint, obj = {}) => {
    header_api.Authorization = `Bearer ${Cryp.decryptData(localStorage.getItem(ls_token_key))}`;
    axios.defaults.headers = header_api;    
    return axios.patch(endpoint, obj);
  },
  delete: (endpoint) => {
    header_api.Authorization = `Bearer ${Cryp.decryptData(localStorage.getItem(ls_token_key))}`;
    axios.defaults.headers = header_api;    
    return axios.delete(endpoint);
  },
};

export { axios, Provider };
