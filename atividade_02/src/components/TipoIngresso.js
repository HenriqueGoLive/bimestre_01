function TipoIngresso(props) {

    return(
        <div>
            <h1>{props.ingressos}</h1>
            <p><li><b> {props.ingressos1}</b>: {props.preco1}</li></p>
            <p><li><b> {props.ingressos2}</b>: {props.preco2}</li></p>
            <p><li><b> {props.ingressos3}</b>: {props.preco3}</li></p>
            <p><li><b> {props.ingressos4}</b>: {props.preco4}</li></p>
        </div>
    )
}

export default TipoIngresso
