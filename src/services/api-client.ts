import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "49ba5d9c54fc45cabccd96dca0a4e083",
    }
})