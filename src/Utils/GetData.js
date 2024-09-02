import Api from "./Api";

export const getData = async (endpoint, setter) => {
  try {
    const response = await Api.get(endpoint);
    setter(response.data);
  } catch (error) {
    console.error('Erro na requisição:', error.message);
  }
};
