import './styles.scss';
import * as types from './types';

const ButtonOutline = (props: types.ButtonOutlineProps) => {
    const style = props.style.border === "light" ? 'button-outline--light' : 'button-outline--dark';

    return (
        <button className={`${style} button-outline`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default ButtonOutline;