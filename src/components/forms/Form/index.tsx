import './styles.scss';
import InputRadio from '../../inputs/InputRadio';
import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';

const Form = () => {
    const { dispatch } = useContext(GlobalContext);

    const chooseOption = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "CHOOSE_OPTION",
            payload: parseInt(e.target.value)
        })
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className='form-options'>
            <InputRadio
              name="options"
              label="Opcja pierwsza"
              value="1"
              id="option-1"
              onChange={chooseOption}
            />
            <InputRadio
              name="options"
              label="Opcja druga"
              value="2"
              id="option-2"
              onChange={chooseOption}
            />
            <InputRadio
              name="options"
              label="Opcja losowa"
              value="3"
              id="option-random"
              onChange={chooseOption}
            />
        </form>
    )
}

export default Form;