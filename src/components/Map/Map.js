import { useState, useRef } from "react";
import { TileLayer, Marker } from "react-leaflet";
import { Section, Box, BoxContainer, MapBox, Title, Paragraph, Subtitle, Button } from "./styles";
import Geolocation from "./Geolocation";

function Map({ markers, ctaLink, className }) {
    const [markerActive, setMarkerActive] = useState(0);
    const boxRef = useRef(null);

    function handleClickMarker(index) {
        boxRef.current.scrollIntoView();
        setMarkerActive(index);
    }

    return (
        <Section className={className}>
            <Box ref={boxRef}>
                <BoxContainer>
                    <Title>Localiza Cursinho</Title>
                    <Paragraph>{markers[markerActive]?.name}</Paragraph>
                    <Paragraph>{markers[markerActive]?.address}</Paragraph>
                    <Subtitle>Conhece um cursinho popular?</Subtitle>
                    <Button href={ctaLink}>Cadastrar um Cursinho</Button>
                </BoxContainer>
            </Box>
            <MapBox center={[-15.7745457, -48.3575684]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker, index) => {
                    return (
                        <Marker
                            key={marker.name}
                            position={[marker.latitude, marker.longitude]}
                            eventHandlers={{
                                click: () => handleClickMarker(index),
                            }}
                        ></Marker>
                    );
                })}
                <Geolocation />
            </MapBox>
        </Section>
    );
}

export default Map;
