import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvent } from "react-leaflet";
import { SubmitBtn } from "./styles";
import {
    ContentDiv,
    ModalDiv,
    Grid,
    InforcacaoCursinho,
    Cadastrado,
    Atualizado,
    Map,
    Title,
    Forms,
    FormField,
    InputLabel,
    Input,
} from "./styles";
import statusRejected from "../../assets/icons/statusRejected.svg";
import StatusValidated from "../../assets/icons/statusValidated.svg";
import statusWaiting from "../../assets/icons/statusWaiting.svg";
import { theme } from "styles/theme";

function Modal({ handleClose, show, cursinho }) {
    const [selectedPositionData, setSelectedPositionData] = useState({});
    const [infos, setInfos] = useState({
        id: cursinho.id,
        latitude: selectedPositionData.latitude ?? cursinho.latitude,
        longitude: selectedPositionData.longitude ?? cursinho.longitude,
        name: cursinho.name,
        cep: cursinho.cep,
        state: cursinho.state,
        city: cursinho.city,
        neighborhood: cursinho.neighborhood,
        street: cursinho.street,
        number: cursinho.number,
        complement: cursinho.complement,
        phone: cursinho.phone,
        whatsapp: cursinho.whatsapp,
        email: cursinho.email,
        email_2: cursinho.email_2,
        category: cursinho.category,
        site: cursinho.site,
        linkedin: cursinho.linkedin,
        youtube: cursinho.youtube,
        facebook: cursinho.facebook,
        instagram: cursinho.instagram,
        twitter: cursinho.twitter,
        tiktok: cursinho.tiktok,
        user_fullname: cursinho.user_fullname,
        user_phone: cursinho.user_phone,
        user_connection: cursinho.user_connection,
        user_email: cursinho.user_email,
        created_at: cursinho.created_at,
        updated_at: cursinho.updated_at,
    });

    const [errors, setErrors] = useState({});
    const [initialPosition, setInitialPosition] = useState([-22.0184566, -47.9310767]);
    const [selectedPosition, setSelectedPosition] = useState([0, 0]);
    const [featching, setFeatching] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target);
        console.log(name);
        console.log(value);
        setInfos({ ...infos, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    function formatPhoneInput(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2")
            .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
            .replace(/(-\d{4})\d+?$/, "$1");
    }

    function formatDateInput(value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{4})\d+?$/, "$1");
    }

    function validateField(field, values) {
        const value = values[field];
        if (!value || (typeof value === "string" && value.trim() === "")) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Campo obrigatório" };
            });
            return false;
        } else if (field === "nascimento" && value.length < 10) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Data inválida" };
            });
            return false;
        } else if (field === "telefone" && value.length < 14) {
            setErrors((errors) => {
                return { ...errors, [field]: "*Telefone inválido" };
            });
            return false;
        } else {
            setErrors((errors) => {
                return { ...errors, [field]: undefined };
            });
            return true;
        }
    }

    async function handleMapClick(event) {
        setFeatching(true);
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;
        console.log(lat);
        console.log(lng);
        setSelectedPosition([lat, lng]);
        const nominatimRequestURL = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&addressdetails=1&format=json`;
        await fetch(nominatimRequestURL)
            .then((response) => response.json())
            .then((reverseGeolocationData) => {
                console.log(reverseGeolocationData);
                setSelectedPositionData({
                    ...selectedPositionData,
                    latitude: lat,
                    longitude: lng,
                    address: reverseGeolocationData.address,
                });
                setInfos({
                    ...infos,
                    latitude: lat,
                    longitude: lng,
                    state: reverseGeolocationData.address.state,
                    city: reverseGeolocationData.address.city,
                    cep: reverseGeolocationData.address.postcode,
                    street: reverseGeolocationData.address.road,
                    neighborhood: reverseGeolocationData.address.suburb,
                });
                setTimeout(() => {
                    setFeatching(false);
                }, 1000);
            })
            .catch((error) => {
                console.log("Catch: " + error.message);

                setTimeout(() => {
                    setFeatching(false);
                }, 1000);
            });
    }

    function EventHandlers() {
        useMapEvent("click", handleMapClick);
        return <Marker position={selectedPosition} alt="marcador"></Marker>;
    }

    const AtualizaStatus = () => {
        if (cursinho.status === "0") return StatusValidated;
        if (cursinho.status === "1") return statusWaiting;
        if (cursinho.status === "2") return statusRejected;
    };

    const Buttons = () => {
        if (cursinho.status === "0" || cursinho.status === "2") {
            return (
                <>
                    <SubmitBtn as="input" value="Editar" onClick={handleClose} />
                    <SubmitBtn as="input" value="Fechar" onClick={handleClose} />
                </>
            );
        }
        if (cursinho.status === "1") {
            return (
                <>
                    <SubmitBtn as="input" value="Aceitar" onClick={handleClose} color={theme.colors.green2} />
                    <SubmitBtn as="input" value="Rejeitar" onClick={handleClose} color={theme.colors.red} />
                    <SubmitBtn as="input" value="Fechar" onClick={handleClose} />
                </>
            );
        }
    };
    return (
        <ModalDiv block={show ? "block" : "none"}>
            <ContentDiv>
                <Grid>
                    <InforcacaoCursinho>
                        <Title>
                            Informação do Cursinho
                            <img src={AtualizaStatus()} alt="status" />
                        </Title>
                        <Forms>
                            <FormField>
                                <InputLabel>Nome do Cursinho:</InputLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={infos.name}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Whatsapp:</InputLabel>
                                <Input
                                    id="whatsapp"
                                    name="whatsapp"
                                    type="text"
                                    value={infos.whatsapp}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Tipo de Cursinho:</InputLabel>
                                <Input
                                    id="category"
                                    name="category"
                                    type="text"
                                    value={infos.category}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Email:</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={infos.email}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Cep:</InputLabel>
                                <Input
                                    id="cep"
                                    name="cep"
                                    type="text"
                                    value={infos.cep}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Site:</InputLabel>
                                <Input
                                    id="site"
                                    name="site"
                                    type="text"
                                    value={infos.site}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Logradouro:</InputLabel>
                                <Input
                                    id="street"
                                    name="street"
                                    type="text"
                                    value={infos.street}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Instagram:</InputLabel>
                                <Input
                                    id="instagram"
                                    name="instagram"
                                    type="text"
                                    value={infos.instagram}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Numero:</InputLabel>
                                <Input
                                    id="number"
                                    name="number"
                                    type="text"
                                    value={infos.number}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Youtube:</InputLabel>
                                <Input
                                    id="youtube"
                                    name="youtube"
                                    type="text"
                                    value={infos.youtube}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Complemento:</InputLabel>
                                <Input
                                    id="complement"
                                    name="complement"
                                    type="text"
                                    value={infos.complement}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Facebook:</InputLabel>
                                <Input
                                    id="facebook"
                                    name="facebook"
                                    type="text"
                                    value={infos.facebook}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Bairro:</InputLabel>
                                <Input
                                    id="neighborhood"
                                    name="neighborhood"
                                    type="text"
                                    value={infos.neighborhood}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Linkedin:</InputLabel>
                                <Input
                                    id="linkedin"
                                    name="linkedin"
                                    type="text"
                                    value={infos.linkedin}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Municipio:</InputLabel>
                                <Input
                                    id="city"
                                    name="city"
                                    type="text"
                                    value={infos.city}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Twitter:</InputLabel>
                                <Input
                                    id="twitter"
                                    name="twitter"
                                    type="text"
                                    value={infos.twitter}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Estado:</InputLabel>
                                <Input
                                    id="state"
                                    name="state"
                                    type="text"
                                    value={infos.state}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Tiktok:</InputLabel>
                                <Input
                                    id="tiktok"
                                    name="tiktok"
                                    type="text"
                                    value={infos.tiktok}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Telefone:</InputLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    value={infos.phone}
                                    onChange={handleInputChange}
                                ></Input>
                            </FormField>
                        </Forms>
                    </InforcacaoCursinho>
                    <Cadastrado>
                        <Title>Cadastrado Por</Title>
                        <Forms>
                            <FormField>
                                <InputLabel>Nome Completo:</InputLabel>
                                <Input
                                    id="user_fullname"
                                    name="user_fullname"
                                    type="text"
                                    value={infos.user_fullname}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Email:</InputLabel>
                                <Input id="user_email" name="user_email" type="text" value={infos.user_email}></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Celular/Whatsapp:</InputLabel>
                                <Input id="user_phone" name="user_phone" type="text" value={infos.user_phone}></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Relação com o Cursinho:</InputLabel>
                                <Input
                                    id="user_connection"
                                    name="user_connection"
                                    type="text"
                                    value={infos.user_connection}
                                ></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Cadastrado em:</InputLabel>
                                <Input id="created_at" name="created_at" type="text" value={infos.created_at}></Input>
                            </FormField>
                        </Forms>
                    </Cadastrado>
                    <Atualizado>
                        <Title>Última Edição Por</Title>
                        <Forms>
                            <FormField>
                                <InputLabel>Nome Completo:</InputLabel>
                                <Input id="created_at" name="created_at" type="text" value={infos.created_at}></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Cadastrado em:</InputLabel>
                                <Input id="created_at" name="created_at" type="text" value={infos.created_at}></Input>
                            </FormField>
                            <FormField>
                                <InputLabel>Editado em:</InputLabel>
                                <Input id="created_at" name="created_at" type="text" value={infos.created_at}></Input>
                            </FormField>
                        </Forms>
                    </Atualizado>
                    <Map>
                        <Title>Endereço do Cursinho</Title>
                        <MapContainer
                            center={[infos.latitude, infos.longitude]}
                            zoom={13}
                            scrollWheelZoom={true}
                            style={{ width: "100%", height: "35vh", cursor: "default" }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[infos.latitude, infos.longitude]} alt="marcador"></Marker>
                            {!featching && <EventHandlers />}
                        </MapContainer>
                        {Buttons()}
                    </Map>
                </Grid>
            </ContentDiv>
        </ModalDiv>
    );
}

export default Modal;
