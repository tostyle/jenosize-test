import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export const PlaceSearchContext = createContext();
export const PlaceSearchProvider = PlaceSearchContext.Provider;
export const usePlaceSearchContext = () => useContext(PlaceSearchContext);

const PlaceSearchModule = ({ children }) => {
  const [placeSearch, changePlaceSearch] = useState(
    window.localStorage.getItem("placeSearch") || ""
  );
  const onChangePlaceSearch = useCallback(
    (e) => changePlaceSearch(e.target.value),
    [changePlaceSearch]
  );
  useEffect(() => {
    if (placeSearch) {
      window.localStorage.setItem("placeSearch", placeSearch);
    }
  }, [placeSearch]);
  return (
    <PlaceSearchProvider
      value={{
        placeSearch,
        onChangePlaceSearch,
      }}
    >
      {children}
    </PlaceSearchProvider>
  );
};

export default PlaceSearchModule;
