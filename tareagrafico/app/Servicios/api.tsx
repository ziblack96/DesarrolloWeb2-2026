import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchPromedioCodigoMarca = async () => {
  const response = await axios.get(`${API_URL}/total-brandcode`);
  return response.data;
};

export const fetchPromedioTipoMoneda = async () => {
  const response = await axios.get(`${API_URL}/promedio-tipomoneda`);
  return response.data;
};

export const fetchPromedioMarcaCategoria = async () => {
  const response = await axios.get(`${API_URL}/promedio-categoriacode`);
  return response.data;
};
