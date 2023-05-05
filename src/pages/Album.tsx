import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../api";

import { AlbumType } from "../types/AlbumType";
import { PhotoType } from "../types/PhotoType";
import { Photo } from "../components/PhotoItem";

export const Album = () => {
    const [album, setAlbum] = useState<AlbumType>();
    const [photos, setPhotos] = useState<PhotoType[]>([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            getAlbumTitle(params.id);
            getAlbumPhotos(params.id);
        }
    }, []);

    const getAlbumTitle = async (id: string) => {
        let albumTitle = await api.getAlbum(id);
        setAlbum(albumTitle);

    }

    const getAlbumPhotos = async (id: string) => {
        setLoading(true);

        let albumPhotos = await api.getPhotos(id);
        setPhotos(albumPhotos);

        setLoading(false);

    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div className="p-5">
            <button onClick={handleBackButton}>Voltar</button> <br />

            <h2 className="font-semibold text-4xl mb-4">{album?.title}</h2>

            {loading && 'Carregando...'}

            <div>
                {photos.map((item, index) => (
                    <Photo key={index} data={item} />
                ))}
            </div>
        </div>
    )
}