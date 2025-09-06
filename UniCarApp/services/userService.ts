import api from './api'

export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export const getUsers = async (): Promise<User[]> => {
    const response = await api.get<User[]>('/user');
    return response.data;
}

export const getUserById = async (id: number): Promise<User> => {
    const response = await api.get<User>(`/user/${id}`);
    return response.data;
}