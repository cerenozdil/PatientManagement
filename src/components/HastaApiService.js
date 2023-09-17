import axios from 'axios';

const HASTA_API_BASE_URL = 'http://localhost:8080/api/hasta';

export const getAllHastalar = () => {
    return axios.get(HASTA_API_BASE_URL);
};

export const getHastaById = (hastaId) => {
    return axios.get(`${HASTA_API_BASE_URL}/${hastaId}`);
};

export const createHasta = (hasta) => {
    return axios.post(HASTA_API_BASE_URL, hasta);
};

export const retrieveHastaApi = (hasta) => {
    return axios.get(HASTA_API_BASE_URL, hasta);
};

export const updateHasta = (id, hasta) => {
    return axios.put(HASTA_API_BASE_URL, hasta);
};

export const deleteHasta = (hastaId) => {
    return axios.delete(`${HASTA_API_BASE_URL}/${hastaId}`);

};
