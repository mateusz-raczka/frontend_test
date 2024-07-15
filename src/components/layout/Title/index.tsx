import * as types from './types.ts';
import './styles.scss';

const Title = (props: types.TitleProps) => {
    return (
        <section className='page-title'>
            <h1>{props.content}</h1>
            <hr />
        </section>
    )
}

export default Title;