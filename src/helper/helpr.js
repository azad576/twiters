import { toast } from "react-toastify"


export const createtost=(msg,type='error')=>{

    return toast[type](msg)
}