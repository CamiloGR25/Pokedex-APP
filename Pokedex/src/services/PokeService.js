import axios from 'axios';//realizar solicitudes HTTP

const API_URL = 'https://pokeapi.co/api/v2/';

//funcion con promesa
export const getPokemonList = async () => {
    try {
        // await: esperar la promesa de axios.get
        const response = await axios.get(`${API_URL}pokemon`); //peticion get
        return response.data; //devyelve los datos de la pedicion
    } catch (error) {
        console.error('---- Error: ----', error);
        throw error;
    }
};