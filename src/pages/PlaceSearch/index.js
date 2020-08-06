import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Body from "components/Body";
import { usePlaceSearchContext } from "./placeSearchModule";
import * as api from "helpers/api";

function PlaceSearch() {
  const [placeList, setPlaceList] = useState([]);
  const { placeSearch } = usePlaceSearchContext();
  useEffect(() => {
    const loadPlace = async () => {
      try {
        const { data } = await api.searchGooglePlace(placeSearch);
        setPlaceList(data);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    };
    if (!placeSearch || placeSearch.length <= 3) {
      return;
    }
    setTimeout(function () {
      loadPlace();
    }, 1000);
  }, [placeSearch]);
  return (
    <Body>
      {placeList.map((place) => {
        // const [photo] = place.photos;
        // const photoUrl = photo
        //   ? api.getPlacePhoto(photo.photo_reference)
        //   : null;
        return (
          <Card
            key={place.id}
            style={{ flexDirection: "row", marginBottom: "1.5rem" }}
          >
            <Card.Img
              variant="top"
              src={place.thumbnail}
              width={400}
              alt={place.id}
              style={{ maxWidth: "400px", rowGap: "1rem" }}
            />
            <Card.Body>
              <Card.Title> {place.name}</Card.Title>
              <Card.Text> {place.formatted_address}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Body>
  );
}

export default PlaceSearch;
