import "../assets/btn.css"

const Button = ({ clase, mensaje, nombre }) => {
const objeto =  {
    string: "hola",
    numero: 55,
    otroNumero: 585,
    array: [],
    booleano: true
    
}
// console.log(objeto.string)

const string = objeto.string
const numero = objeto.numero
const otroNumero = objeto.otroNumero
// const { string, numero, otroNumero } = objeto
// console.log(string)
// console.log(numero)
// console.log(otroNumero)

   return (
        <button className={`btn ${clase}`}>{mensaje}{nombre}</button>
    )
}

export default Button