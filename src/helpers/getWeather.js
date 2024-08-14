import { axios } from "axios";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.4647&longitude=-3.8044&hourly=temperature_2m&timezone=auto";

export const getTemperatura = async () => {
  const respuesta = await axios.get(API_URL);
  const nuevaTemperatura = respuesta.data.hourly.temperature_2m[0];
  return nuevaTemperatura;
};
