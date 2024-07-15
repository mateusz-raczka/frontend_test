import * as types from './types';
import './styles.scss';

const PageLayout = (props: types.PageLayoutProps) => {
    return (
        <div className='layout'>
            {props.header}
            {props.children}
            {props.footer}
        </div>
    )
}

export default PageLayout;