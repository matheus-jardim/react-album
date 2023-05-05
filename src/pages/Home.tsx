import { useEffect, useState } from "react";

import { AlbumItem } from "../components/Album";
import { api } from "../api";
import { AlbumType } from "../types/AlbumType";


export const Home = () => {
    const [album, setAlbum] = useState<AlbumType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAlbums();
    }, [])

    const loadAlbums = async () => {
        setLoading(true)
        let json = await api.getAllAlbums();
        setAlbum(json);
        setLoading(false);
    }

    return (
        <div>
            {loading && 'Carregando...'}

            {
                album.map((item, index) => (
                    <AlbumItem key={index} data={item} />
                ))
            }
        </div>
    )
}