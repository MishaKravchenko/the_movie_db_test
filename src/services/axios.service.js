import axios from "axios";
import baseURL from "../constants/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjljYzgxYThlZTkxNzFhZWNhOWU2M2Y2NjJkZDMxYiIsInN1YiI6IjYzNWUzNjA5MGY1MjY1MDA3OTlmODIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sAUAJzu-EOvW-TAVBVFsD9MuhzlMGCMp-48GVYqZ2HM'
    }
});