import axios from "axios"

export const getAllUsers = async () => {
    try{
        const res = await axios.get('/user')
        return res.data;
    }catch(err){
        throw err
    }
}

export const addUser = async (data) => {
    try{
        const res = await axios.post('/user', data)
        return res.data;
    }catch(err){
        throw err
    }
}

export const deleteUser = async (id) => {
    try{
        const res = await axios.delete(`/user/${id}`)
        return res.data;
    }catch(err){
        throw err
    }
}