import './styles.scss';
import * as types from './types';

const ContainerTitled = (props: types.ContainerProps) => {
    return (
        <section className='container-titled'>
            <h3 title={props.croppedTitleIfTooLong ? props.title : ""} className={props.croppedTitleIfTooLong ? "cropped-text" : ""}>{props.title}</h3>
            {props.children}
        </section>
    )
}

export default ContainerTitled;