import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const {titulo, colorPrimario, colorSecundario, id}= props.datos
    const {colaboradores, eliminarColaborador, actualizarColor}= props
    const obj ={backgroundColor: hexToRgba(colorPrimario, 0.1)}
    const estiloTitulo = {borderColor:colorPrimario}

    return <>
    {colaboradores.length > 0 &&
      <section className ="equipo" style={obj}>
       <input
        type="color"
        className="input-color"
        value={hexToRgba(colorPrimario, 0.1)}
        onChange={(event) => {
          actualizarColor (event.target.value, id)
        }}
       /> 

        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className = "colaboradores">
          {
            colaboradores.map ( (colaborador, index ) => <Colaborador 
                datos= {colaborador} 
                key ={index} 
                colorPrimario = {colorPrimario}
                eliminarColaborador = {eliminarColaborador}
              />)
             }
         </div>
      </section>
  } </>
}
export default Equipo