import axios from "axios"
import { BASE_URL } from "../Constants/BASE_URL"

export const getAllUsers = (set_data) => {
    const url = `${BASE_URL}/user`

    axios.get(url)
        .then((resp) => {
            set_data(resp.data.results)
        })
        .catch((error) => {
            window.alert(error.message)
        })
} 