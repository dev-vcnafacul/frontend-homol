import { useEffect } from "react";
import { useMap } from "react-leaflet";

function Geolocation() {
    const map = useMap();

    useEffect(() => {
        function handleSuccessGeoLocation(position) {
            const coords = position.coords;
            map.setView([coords.latitude, coords.longitude], 8);
        }

        navigator.geolocation.getCurrentPosition(handleSuccessGeoLocation);
    }, [map]);

    return null;
}

export default Geolocation;
