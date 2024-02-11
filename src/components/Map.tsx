export function Map() {
  // const coord = {
  //   lat: 37.91203917178996,
  //   lng: -4.810810089111328,
  // };

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  // });

  // const [map, setMap] = useState<google.maps.Map | null>(null);

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(coord);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return {
    /* {isLoaded && (
        <section className="flex relative flex-col h-screen w-screen items-center justify-center">
          <GoogleMap
            center={coord}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
          ></GoogleMap>
        </section>
      )} */
  };
}
