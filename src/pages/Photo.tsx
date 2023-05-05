import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { PhotoType } from "../types/PhotoType";
import { api } from "../api";

export const PhotoPage = () => {
    const [photo, setPhoto] = useState<PhotoType>();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            getPhoto(params.id);
        }
    }, [])

    const getPhoto = async (id: string) => {
        setLoading(true);

        setPhoto(await api.getPhoto(id));

        setLoading(false);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div className="p-5">
            <button onClick={handleBackButton}>Voltar</button>

            {loading && 'Carregando...'}

            <div className="pt-4">
                {photo?.title}
                <img src={photo?.url} alt="" />
            </div>
        </div>
    )
}