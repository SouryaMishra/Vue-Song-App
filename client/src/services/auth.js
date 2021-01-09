import api from "./api";

export default function(credentials) {
    return api().post("/register",credentials);
}