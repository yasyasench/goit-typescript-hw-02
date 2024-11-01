import axios from "axios";
import { Data } from "./types";

export default async function fetchImages(query: string, page = 1): Promise<Data> {
    const response = await axios.get<Data>("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        orientation: "landscape",
      },
      headers: {
        Authorization: "Client-ID FEWGqNTCAxDs98Vlyi2KHLELNqgCy06xALHFQEBFWA4",
      },
    });
    return response.data;
}