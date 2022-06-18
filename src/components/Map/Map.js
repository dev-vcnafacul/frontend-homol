import { useState, useRef, useEffect } from "react";
import { TileLayer, Marker } from "react-leaflet";
import { Section, Box, BoxContainer, MapBox, Title, Paragraph, Subtitle, Button } from "./styles";
import Geolocation from "./Geolocation";
import { API_URL } from "../../constants";
import { Anchor } from "./../atoms";

function Map({ ctaLink, className }) {
    const [markerActive, setMarkerActive] = useState(0);
    const [markers, setMarkers] = useState([]);
    const [mapCenter, setMapCenter] = useState([-21.4712828, -47.0439503]);
    const boxRef = useRef(null);

    function handleClickMarker(index) {
        boxRef.current.scrollIntoView();
        setMarkerActive(index);
    }

    async function handleLoadMakers() {
        const response = await fetch(`${API_URL}/geolocations`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (response.status === 200) {
            const updatedMarkers = await response.json();
            setMarkers(updatedMarkers);
            const center = updatedMarkers.reduce(
                (acc, coord, i, arr) => [acc[0] + coord.latitude / arr.length, acc[1] + coord.longitude / arr.length],
                [0.0, 0.0]
            );
            setMapCenter(center);
        } else {
            setMarkers([]);
        }
    }

    useEffect(() => {
        handleLoadMakers();
    }, []);

    return (
        <>
            <Anchor id="map"></Anchor>
            <Section className={className}>
                <MapBox center={mapCenter} zoom={4} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markers.map((marker, index) => {
                        return (
                            <Marker
                                key={marker.id}
                                position={[marker.latitude, marker.longitude]}
                                eventHandlers={{
                                    click: () => handleClickMarker(index),
                                }}
                            ></Marker>
                        );
                    })}
                    <Geolocation />
                </MapBox>
                <Box ref={boxRef}>
                    <BoxContainer>
                        <Title>Localiza Cursinho</Title>
                        <Paragraph>{markers[markerActive]?.name}</Paragraph>
                        <Paragraph>
                            {markers[markerActive]?.street}, {markers[markerActive]?.number}
                        </Paragraph>
                        <Paragraph>{markers[markerActive]?.neighborhood}</Paragraph>
                        <Subtitle>Conhece um cursinho popular?</Subtitle>
                        <Button target="_blank" href={ctaLink}>
                            Cadastrar um Cursinho
                        </Button>
                    </BoxContainer>
                </Box>
            </Section>
        </>
    );
}

export default Map;
