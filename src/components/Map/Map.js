import { useState, useRef, useEffect } from "react";
import { TileLayer, Marker } from "react-leaflet";
import {
    FaLinkedin,
    FaTiktok,
    FaTwitterSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaEnvelopeSquare,
    FaWhatsappSquare,
    FaFacebookSquare,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Section, Box, BoxContainer, MapBox, Title, Paragraph, Subtitle, Button, SocialMedia } from "./styles";
import Geolocation from "./Geolocation";
import { Anchor } from "./../atoms";
import { Link } from "react-router-dom";

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
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/geolocations`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (response.status === 200) {
            const updatedMarkers = await response.json();

            setMarkers(
                updatedMarkers.map((course) => {
                    return {
                        ...course,
                        whatsapp: course.whatsapp.replace(/[^0-9]+/g, ""),
                    };
                })
            );
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
                        <Title>
                            <FaMapMarkerAlt color={"red"} size={30} /> Localiza Cursinho
                        </Title>
                        <Paragraph>{markers[markerActive]?.name}</Paragraph>
                        <Paragraph>
                            {markers[markerActive]?.street} - {markers[markerActive]?.number},{" "}
                            {markers[markerActive]?.complement}
                        </Paragraph>
                        <Paragraph>
                            {markers[markerActive]?.neighborhood}, {markers[markerActive]?.cep}
                        </Paragraph>
                        <Paragraph>
                            {markers[markerActive]?.city} - {markers[markerActive]?.state}
                        </Paragraph>
                        <Paragraph>{markers[markerActive]?.phone}</Paragraph>
                        <SocialMedia>
                            {markers[markerActive]?.whatsapp.length !== 0 && (
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        window.location.href = `https://api.whatsapp.com/send?phone=55${markers[markerActive]?.whatsapp}`;
                                        e.preventDefault();
                                    }}
                                >
                                    <FaWhatsappSquare color={"#707070"} size={40} />
                                </Link>
                            )}

                            {markers[markerActive]?.email.length !== 0 && (
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        window.location.href = `mailto:${markers[markerActive]?.email}`;
                                        e.preventDefault();
                                    }}
                                >
                                    <FaEnvelopeSquare color={"#707070"} size={40} />
                                </Link>
                            )}

                            {markers[markerActive]?.site.length !== 0 && (
                                <a href={markers[markerActive]?.site} target="_blank" rel="noreferrer">
                                    <MdOutlineTravelExplore color={"#707070"} size={40} />
                                </a>
                            )}

                            {markers[markerActive]?.linkedin.length !== 0 && (
                                <a href={markers[markerActive]?.linkedin} target="_blank" rel="noreferrer">
                                    <FaLinkedin color={"#707070"} size={40} />
                                </a>
                            )}

                            {markers[markerActive]?.youtube.length !== 0 && (
                                <a href={markers[markerActive]?.youtube} target="_blank" rel="noreferrer">
                                    <FaYoutubeSquare color={"#707070"} size={40} />
                                </a>
                            )}

                            {markers[markerActive]?.facebook.length !== 0 && (
                                <a href={markers[markerActive]?.facebook} target="_blank" rel="noreferrer">
                                    <FaFacebookSquare color={"#707070"} size={40} />
                                </a>
                            )}

                            {markers[markerActive]?.instagram.length !== 0 && (
                                <a href={markers[markerActive]?.instagram} target="_blank" rel="noreferrer">
                                    <FaInstagramSquare color={"#707070"} size={40} />
                                </a>
                            )}

                            {markers[markerActive]?.twitter.length !== 0 && (
                                <a href={markers[markerActive]?.twitter} target="_blank" rel="noreferrer">
                                    <FaTwitterSquare color={"#707070"} size={40} />
                                </a>
                            )}

                            {markers[markerActive]?.tiktok.length !== 0 && (
                                <a href={markers[markerActive]?.tiktok} target="_blank" rel="noreferrer">
                                    <FaTiktok color={"#707070"} size={30} />
                                </a>
                            )}
                        </SocialMedia>
                        <Subtitle>Conhece um cursinho popular?</Subtitle>
                        <Button to={ctaLink}>Cadastrar um Cursinho</Button>
                    </BoxContainer>
                </Box>
            </Section>
        </>
    );
}

export default Map;
