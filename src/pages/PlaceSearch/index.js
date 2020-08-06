import React, { useEffect, useState, useCallback } from "react";
import { Card } from "react-bootstrap";
import debounce from "lodash/debounce";
import Body from "components/Body";
import Loading from "components/Loading";
import * as api from "helpers/api";
import { usePlaceSearchContext } from "./placeSearchModule";

function PlaceSearch() {
  const [loading, setLoading] = useState(false);
  const [placeList, setPlaceList] = useState([]);
  const { placeSearch } = usePlaceSearchContext();
  const debounceSearchPlace = useCallback(
    debounce(async (search) => {
      try {
        setLoading(true);
        const { data } = await api.searchGooglePlace(search);
        setPlaceList(data);
      } catch (error) {
        console.error(error);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }, 1000),
    [setPlaceList]
  );
  useEffect(() => {
    debounceSearchPlace(placeSearch);
  }, [debounceSearchPlace, placeSearch]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Body>
      {placeList.map((place) => {
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
