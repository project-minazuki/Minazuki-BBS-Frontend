import React, {CSSProperties, FC, memo} from 'react';
import '../styles/components/Card.scss';

interface IProps {
    className?: string | undefined;
    style?: Partial<CSSProperties> | undefined;
    children?: JSX.Element | never[];
}

const Card: FC<IProps> = memo((props) => {

    const $class = props.className ?? ''
    const $style = props.style ?? {};

    return (
        <div id='comp-card' className={$class} style={$style}>
            {props.children}
        </div>
    )
});

export default Card;
