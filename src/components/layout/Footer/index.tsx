import ButtonOutline from '../../buttons/ButtonOutline';
import LogoCss from '../../logos/LogoCss';
import LogoNabthat from '../../logos/LogoNabthat';
import MenuShowMore from '../../menus/MenuShowMore';
import './styles.scss';

const Footer = () => {
    return (
        <footer className="layout-footer">
            <LogoCss></LogoCss>
            <LogoNabthat></LogoNabthat>
            <div className='layout-footer__show-more'>
                <ButtonOutline style={{ border: "dark" }} onClick={() => {}}>
                    POKAŻ WIĘCEJ
                </ButtonOutline>
                <div className='show-more__content'>
                    <MenuShowMore></MenuShowMore>
                </div>
            </div>
        </footer>
    )
};

export default Footer;