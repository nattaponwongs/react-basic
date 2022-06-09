const Item = (prop) => {
    return (
        <li>{prop.title} <span>{prop.amount}</span></li>
    )
}

export default Item