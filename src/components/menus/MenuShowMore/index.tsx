import './styles.scss';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { useContext } from 'react';

const MenuShowMore = () => {
    const { dispatch } = useContext(GlobalContext);

    const showPersonalData = () => {
        dispatch({
            type: "TOGGLE_PERSONAL_DATA_VISIBILITY"
        });
    };

    const resetAvailableStrings = () => {
        dispatch({
            type: "RESET"
        });
    };

    return (
        <>
            <ul className="menu-show-more">
                <li className="menu-show-more__option" onClick={resetAvailableStrings}>
                    {"> Zresetuj ustawienia"}
                </li>
                <li className="menu-show-more__option" onClick={showPersonalData}>
                    {"> Pokaż dane osobowe"}
                </li>
            </ul>
        </>
    )
}

export default MenuShowMore;