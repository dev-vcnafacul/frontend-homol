import { useCallback, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvent } from "react-leaflet";
import { SubmitBtn } from "./styles";
import statusRejected from "../../assets/icons/statusRejected.svg";
import StatusValidated from "../../assets/icons/statusValidated.svg";
import statusWaiting from "../../assets/icons/statusWaiting.svg";
import { theme } from "styles/theme";
import { useSelector } from "react-redux";
import ModalConfirmCancel from "components/ModalConfirmCancel/ModalConfirmCancel";
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
    MaskInput,
} from "../CardCursinho/styles";
import { FormError } from "components/atoms";
import { MaskOptions } from "utils/ValidateContato";
import { validateEmail } from "utils/ValidateContato";

function ModalEditGeo({ handleClose, show, geo, setGeo, setStatus }) {
    const [selectedPositionData, setSelectedPositionData] = useState({});
    const [editando, setEditando] = useState(false);
    const [modified, setModified] = useState(false);
    const [cancelModified, setCancelModified] = useState(false);
    const [novoStatus, setNovoStatus] = useState(geo.status);
    const userToken = useSelector((state) => state.auth.token);
    const [infos, setInfos] = useState(geo);
    const [selectedPosition, setSelectedPosition] = useState([0, 0]);
    const [featching, setFeatching] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const [refuseAction, setRefuseAction] = useState(false);
    const [refuseReason, setRefuseReason] = useState("Teste");

    const messageNotSaved =
        "Suas alterações ainda não foram salvas. Se você sair agora, perderá todas as alterações. Deseja continuar?";

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInfos({ ...infos, [name]: value });
        if (name === "email") {
            validateEmail(value, setEmailError);
        }
        setModified(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    async function handleMapClick(event) {
        setFeatching(true);
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;
        setSelectedPosition([lat, lng]);
        const nominatimRequestURL = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&addressdetails=1&format=json`;
        await fetch(nominatimRequestURL)
            .then((response) => response.json())
            .then((reverseGeolocationData) => {
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

    const GetStatus = () => {
        if (novoStatus === "0") return StatusValidated;
        if (novoStatus === "1") return statusWaiting;
        if (novoStatus === "2") return statusRejected;
    };

    const SetStatus = (status) => {
        setInfos({ ...infos, status: status });
        setStatus(status);
    };

    const Salvar = useCallback(async (status) => {
        try {
            const url = `${process.env.REACT_APP_BASE_URL}/geolocation`;
            await fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${userToken}` },
                body: JSON.stringify(infos),
            });
            setGeo(infos);
            Validar(status === "0");
        } catch {
            console.log("Error....");
        }
    }, []);

    const Validar = useCallback(async (body) => {
        try {
            console.log(body);
            const url = `${process.env.REACT_APP_BASE_URL}/validatedgeolocation`;
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${userToken}` },
                body: JSON.stringify(body),
            });
            // eslint-disable-next-line no-undef
            setNovoStatus(body.validated ? "0" : "2");
            SetStatus(body.validated ? "0" : "2");
        } catch (error) {
            console.log("Error....");
            console.log(error);
        }
    }, []);

    const Continue = () => {
        setInfos(geo);
        setEditando(false);
        setCancelModified(false);
        handleClose();
    };

    const Cancel = () => {
        setCancelModified(false);
        setRefuseAction(false);
    };

    const ConfirmRefuse = () => {
        const body = {
            geolocationId: geo.id,
            validated: false,
            refuseReason: refuseReason,
        };
        Validar(body);
        setRefuseAction(false);
    };

    const Accept = () => {
        const body = {
            geolocationId: geo.id,
            validated: true,
        };
        Validar(body);
    };

    const Buttons = () => {
        if (!editando) {
            return (
                <>
                    <SubmitBtn
                        as="input"
                        value="Aceitar"
                        onClick={Accept}
                        disabled={novoStatus === "0"}
                        color={theme.colors.green2}
                    />
                    <SubmitBtn
                        as="input"
                        value="Rejeitar"
                        onClick={() => {
                            setRefuseAction(true);
                        }}
                        disabled={novoStatus === "2"}
                        color={theme.colors.red}
                    />
                    <SubmitBtn as="input" value="Editar" enable={true} onClick={() => setEditando(true)} />
                    <SubmitBtn as="input" value="Fechar" enable={true} onClick={handleClose} />
                </>
            );
        }
        return (
            <>
                <SubmitBtn
                    as="input"
                    value="Salvar"
                    enable={true}
                    onClick={() => {
                        Salvar(novoStatus);
                        handleClose();
                    }}
                />
                <SubmitBtn
                    as="input"
                    value="Voltar"
                    enable={true}
                    onClick={() => {
                        if (modified) {
                            setCancelModified(true);
                        } else {
                            setEditando(false);
                        }
                    }}
                />
            </>
        );
    };

    useEffect(() => {}, [novoStatus]);
    return (
        <>
            <ModalDiv block={show ? "block" : "none"}>
                <ContentDiv>
                    <Grid>
                        <InforcacaoCursinho>
                            <Title>
                                Informação do Cursinho
                                <img src={GetStatus()} alt="status" />
                            </Title>
                            <Forms>
                                <FormField>
                                    <InputLabel>Nome do Cursinho:</InputLabel>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={infos.name}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Whatsapp:</InputLabel>
                                    <Input
                                        id="whatsapp"
                                        name="whatsapp"
                                        type="text"
                                        value={infos.whatsapp}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Tipo de Cursinho:</InputLabel>
                                    <Input
                                        id="category"
                                        name="category"
                                        type="text"
                                        value={infos.category}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormError>{emailError}</FormError>
                                <FormField>
                                    <InputLabel>Email:</InputLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="text"
                                        value={infos.email}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                        error={emailError}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Cep:</InputLabel>
                                    <MaskInput
                                        id="cep"
                                        name="cep"
                                        type="text"
                                        value={infos.cep}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                        mask={MaskOptions.cep}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Site:</InputLabel>
                                    <Input
                                        id="site"
                                        name="site"
                                        type="text"
                                        value={infos.site}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Logradouro:</InputLabel>
                                    <Input
                                        id="street"
                                        name="street"
                                        type="text"
                                        value={infos.street}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Instagram:</InputLabel>
                                    <Input
                                        id="instagram"
                                        name="instagram"
                                        type="text"
                                        value={infos.instagram}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Numero:</InputLabel>
                                    <Input
                                        id="number"
                                        name="number"
                                        type="number"
                                        value={infos.number}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Youtube:</InputLabel>
                                    <Input
                                        id="youtube"
                                        name="youtube"
                                        type="text"
                                        value={infos.youtube}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Complemento:</InputLabel>
                                    <Input
                                        id="complement"
                                        name="complement"
                                        type="text"
                                        value={infos.complement}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Facebook:</InputLabel>
                                    <Input
                                        id="facebook"
                                        name="facebook"
                                        type="text"
                                        value={infos.facebook}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Bairro:</InputLabel>
                                    <Input
                                        id="neighborhood"
                                        name="neighborhood"
                                        type="text"
                                        value={infos.neighborhood}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Linkedin:</InputLabel>
                                    <Input
                                        id="linkedin"
                                        name="linkedin"
                                        type="text"
                                        value={infos.linkedin}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Municipio:</InputLabel>
                                    <Input
                                        id="city"
                                        name="city"
                                        type="text"
                                        value={infos.city}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Twitter:</InputLabel>
                                    <Input
                                        id="twitter"
                                        name="twitter"
                                        type="text"
                                        value={infos.twitter}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Estado:</InputLabel>
                                    <Input
                                        id="state"
                                        name="state"
                                        type="text"
                                        value={infos.state}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Tiktok:</InputLabel>
                                    <Input
                                        id="tiktok"
                                        name="tiktok"
                                        type="text"
                                        value={infos.tiktok}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Telefone:</InputLabel>
                                    <MaskInput
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        value={infos.phone}
                                        disabled={!editando}
                                        onChange={handleInputChange}
                                        mask={MaskOptions.phone}
                                    />
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
                                        disabled={true}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Email:</InputLabel>
                                    <Input
                                        id="user_email"
                                        name="user_email"
                                        type="email"
                                        value={infos.user_email}
                                        disabled={true}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Celular/Whatsapp:</InputLabel>
                                    <Input
                                        id="user_phone"
                                        name="user_phone"
                                        type="text"
                                        value={infos.user_phone}
                                        disabled={true}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Relação com o Cursinho:</InputLabel>
                                    <Input
                                        id="user_connection"
                                        name="user_connection"
                                        type="text"
                                        value={infos.user_connection}
                                        disabled={true}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Cadastrado em:</InputLabel>
                                    <Input
                                        id="created_at"
                                        name="created_at"
                                        type="text"
                                        value={infos.created_at}
                                        disabled={true}
                                    />
                                </FormField>
                            </Forms>
                        </Cadastrado>
                        <Atualizado>
                            <Title>Última Edição Por</Title>
                            <Forms>
                                <FormField>
                                    <InputLabel>Nome Completo:</InputLabel>
                                    <Input
                                        id="created_at"
                                        name="created_at"
                                        type="text"
                                        value={infos.created_at}
                                        disabled={true}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Cadastrado em:</InputLabel>
                                    <Input
                                        id="created_at"
                                        name="created_at"
                                        type="text"
                                        value={infos.created_at}
                                        disabled={true}
                                    />
                                </FormField>
                                <FormField>
                                    <InputLabel>Editado em:</InputLabel>
                                    <Input
                                        id="created_at"
                                        name="created_at"
                                        type="text"
                                        value={infos.created_at}
                                        disabled={true}
                                    />
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
            <ModalDiv block={show && modified && editando && cancelModified ? "block" : "none"}>
                <ContentDiv>
                    <ModalConfirmCancel
                        message={messageNotSaved}
                        show={show}
                        continueFunc={Continue}
                        cancelFunc={Cancel}
                    >
                        <span>
                            "Suas alterações ainda <b>não foram salvas</b>. Se você sair agora, perderá todas as
                            alterações. Deseja continuar?"
                        </span>
                    </ModalConfirmCancel>
                </ContentDiv>
            </ModalDiv>
            <ModalDiv block={show && refuseAction ? "block" : "none"}>
                <ContentDiv>
                    <ModalConfirmCancel
                        message={messageNotSaved}
                        show={show}
                        continueFunc={ConfirmRefuse}
                        cancelFunc={Cancel}
                    >
                        <div>
                            <b>Descreva o motivo da rejeição: </b>
                            <Input
                                id="created_at"
                                name="created_at"
                                type="text"
                                value={refuseReason}
                                onChange={(e) => setRefuseReason(e.target.value)}
                            />
                        </div>
                    </ModalConfirmCancel>
                </ContentDiv>
            </ModalDiv>
        </>
    );
}

export default ModalEditGeo;
