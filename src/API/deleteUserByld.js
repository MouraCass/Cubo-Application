import axios from "axios"
import { BASE_URL } from "../Constants/BASE_URL"

export const deleteUserById = (id) => {
    const url = `${BASE_URL}/user/${id}`

    axios.delete(url)
        .then((resp) => {
            window.alert(resp.data)
        })
        .catch((error) => {
            window.alert(error.message)
        })
} 