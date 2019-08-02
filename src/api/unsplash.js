import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID e5c6df3a4a122770b1a34cced6d1db8ed5e7ceadb949ff972924c078907f43e2"
    }
});
