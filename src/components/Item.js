import PropTypes from 'prop-types'

const Item = (prop) => {
    const {title, amount} = prop
    return (
        <li>{title} <span>{amount}</span></li>
    )
}

Item.prototype = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item