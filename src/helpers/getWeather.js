import axios from "axios";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.4647&longitude=-3.8044&hourly=temperature_2m&timezone=auto";

export const getTemperatura = async () => {
  const respuesta = await axios.get(API_URL);
  //   alert(respuesta.data.hourly.temperature_2m);
  const nuevaTemperatura = respuesta.data.time.temperature_2m[1];
  return nuevaTemperatura;
};
