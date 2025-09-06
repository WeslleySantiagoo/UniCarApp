import api from './api'

export interface Carona {
    id: number;
    origin: string;
    destination: string;
    date: string;
    horario_saida: string;
    availableSeats: number;
    price?: number;
    createdAT: string;
    updatedAT: string;
}

export const getCaronas = async (): Promise<Carona[]> => {
    const response = await api.get<Carona[]>('/Ride');
    return response.data;
}