import CardContainer from "../components/CardContainer"

const Main = (props) =>{

  return (
    <>
      <CardContainer 
        titulo="BASADO EN TU ULTIMA VISITA "
        superMensaje={props.mensaje}
        superClase = {props.clase}
      />
      <CardContainer 
        titulo = "OFERTAS"
        superMensaje={props.mensaje}
        superClase = {props.clase}
      />
      <CardContainer 
        titulo = "LO MAS VISTO"
        superMensaje={props.mensaje}
        superClase = {props.clase}
      />
    </>
  )
}

export default Main