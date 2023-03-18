import Star from "./Star";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'//библиотека, которая  генерирует уникальный id

export default function Stars(props) {
    const { count } = props;
    if (!Number.isInteger(count) || typeof count !== 'number' || isNaN(count) || count < 1 || count > 5) {
        return null;
    };

    const starsItem = [];
    for (let i = 0; i < count; i++) {
        starsItem.push(<Star key={nanoid(10)} />);
    }

    console.log(starsItem);

    return (
        <ul className="card-body-stars u-clearfix">
            {starsItem}
        </ul>
    );
}

Stars.defaultProps = {
    count: 0,
};

Star.propTypes = {
    count: PropTypes.number,
};