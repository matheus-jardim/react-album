import { Link } from "react-router-dom";
import { PhotoType } from "../../types/PhotoType";
import styles from './Photo.module.css';

type Props = {
    data: PhotoType;
}

export const Photo = ({data}: Props) => {
    return(
        <Link to={`/photos/${data.id}`} className={styles.photoBox}>
            <img src={data.thumbnailUrl} alt="" />
        </Link >
    )

}