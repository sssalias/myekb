import axios from "axios";

export default new class {
    async getAllByOrg(data) {
        return await axios.post('https://backend.umom.pro/order/get/by/organization', JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}