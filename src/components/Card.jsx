import Button from "./Button"

const Card = (props) =>{

    
    
    return (
        <div className="card-container">

            {/* <img src="https://http2.mlstatic.com/D_NQ_NP_2X_789055-MLA45766971610_042021-F.webp" alt="" /> */}
            <p>{props.nombre} </p>
            <p>{props.precio} </p>
            <p>{props.descuento} </p>
            <p>{props.cuotas} </p>
            {props.envioGratis && <p>Envio Gratis </p>}

            <Button 
                mensaje={props.mensaje}
                clase = {props.clase}
                nombre = "Rodrigo Roberto"
            />
            {/* <Button mensaje="Agregar al carrito" clase="btn-secundario"/> */}
        </div>

    )
  }
  
  export default Card