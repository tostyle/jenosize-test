import axios from "axios";
import qs from "query-string";

const GOOGLE_PLACE_API = "https://maps.googleapis.com/maps/api/place";
const TOKEN = process.env.REACT_APP_GOOGLE_API_TOKEN;

export const searchPlace = (searchQuery) => {
  return axios({
    method: "GET",
    url: `${GOOGLE_PLACE_API}/textsearch/json`,
    params: {
      query: searchQuery,
      key: TOKEN,
    },
  });
};

export const getPlacePhoto = (placeReference, maxWidth = 400) => {
  const params = {
    photoreference: placeReference,
    maxwidth: maxWidth,
    key: TOKEN,
  };
  const query = qs.stringify(params);
  return `${GOOGLE_PLACE_API}/photo?${query}`;
};
