import axios from "axios"
import { BASE_URL } from "../Constants/BASE_URL"

export const createUser = (body) => {
    const url = `${BASE_URL}/user/create`

    axios.post(url, body)
        .then((resp) => {
            window.alert(resp.data)
        })
        .catch((error) => {
            window.alert(error.message)
        })
} 