import PropTypes from 'prop-types'
import './Item.css'

const Item = (prop) => {
    const {title, amount} = prop
    const status = amount < 0 ? "expense" : "income"
    const symbol = amount < 0 ? "-": "+"
    return (
        <li className={status}> {title}<span>{symbol}{Math.abs(amount)}</span></li>
    )
}

Item.prototype = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item