import {axiosService} from "./axios.service";
import {apiKey} from "../constants/urls";

export const movieService = {
    getAll: () => axiosService.get(`/discover/movie?${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`).then(value => value.data.results)
}