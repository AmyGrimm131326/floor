// this is where i am importing axios
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4001/',
})
// exporting my apis
export const getMessages = () => api.get('messages');
export const viewMessage = (id) => api.get(`messages/viewMessage/${id}`);
export const login = (payload) => api.post('admin/login', payload)
export const newMessage = (payload) => api.post('newMessage', payload)
export const deleteMessage = (id) => api.delete(`/messages/delete/${id}`)
export const completeMessage = (id) => api.put(`/messages/complete/${id}`)

const apis = {
    login,
    getMessages,
    viewMessage,
    newMessage,
    deleteMessage,
    completeMessage
}

export default apis;