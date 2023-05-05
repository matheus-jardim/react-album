import { Link } from "react-router-dom";
import { AlbumType } from "../../types/AlbumType";

type Props = {
    data: AlbumType;
}

export const AlbumItem = ({ data }: Props) => {
    return (
        <Link to={`/album/${data.id}`} className="block text-inherit p-4 ml-2 my-2 border-2 border-black hover:bg-slate-100 hover:text-black cursor-pointer">
            {data.title}
        </Link>
    )
}