import { API_CONFIG } from "@/constants/Config";
import Axios from "axios";

const axios = Axios.create({
	baseURL: API_CONFIG.baseApiUrl,
	timeout: 10000, // 10 seconds
});

export default axios;
