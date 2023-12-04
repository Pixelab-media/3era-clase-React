import Card from "./Card"

const CardContainer = (props) =>{

  const producto = [
    {     
     id: 1,
     nombre: "colchón",
     precio: 100000,
     descuento: 0,
     cuotas: "en 12 cuotas",
     envioGratis: true
    },
    {
    id: 2,     
    nombre: "celular",
    precio: 80000,
    descuento: 20,
    cuotas: "en 6 cuotas",
    envioGratis: false
    },
    {
    id: 3,     
    nombre: "parlantes",
    precio: 60000,
    descuento: 10,
    cuotas: "en 3 cuotas",
    envioGratis: true
    },
    {
    id: 4,     
    nombre: "monitor",
    precio: 150000,
    descuento: 5,
    cuotas: "en 24 cuotas",
    envioGratis: false
    },
    {
    id: 5,     
    nombre: "computadora",
    precio: 125000,
    descuento: 15,
    cuotas: "en 18 cuotas",
    envioGratis: true
    },

]

  return (
    <div>
        <section>
            <h3>{props.titulo}</h3> 
            <a href="#">Ver historial</a>
        </section>

        <section>
            {producto.map (p =>
              <div key={p.nombre}>
              <Card 
                mensaje={props.superMensaje}
                clase = {props.superClase}                      C                className={"Card"}
                nombre = {p.nombre}
                precio = {p.precio}
                descuento = {p.descuento}
                cuotas = {p.cuotas}
                envioGratis = {p.envioGratis}
              />

              </div>
              )}

            
            {/* <Card />
            <Card />
            <Card />
            <Card /> */}
        </section>


    </div>
  )
}

export default CardContainer