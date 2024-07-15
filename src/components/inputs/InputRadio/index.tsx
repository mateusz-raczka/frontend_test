import './styles.scss';
import * as types from './types';

const InputRadio = (props: types.InputRadioProps) => {
    return (
        <div className='input-radio-wrapper'>
            <input type='radio' name={props.name} value={props.value} id={props.id} onChange={props.onChange}/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
};

export default InputRadio;