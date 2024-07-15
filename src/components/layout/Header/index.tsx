import LogoHtml5 from '../../logos/LogoHtml5';
import './styles.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';

const Header = () => {
    const { state } = useContext(GlobalContext);
    
    return (
        <header className='layout-header'>
            <LogoHtml5></LogoHtml5>
            <h2 className='layout-header__title'>
                <span>Zadanie <span className='bold'>rekrutacyjne</span></span>
                {state.isPersonalDataVisible && <span>Mateusz Rączka</span>}
            </h2>
        </header>
    )
}

export default Header;