import './Time.css'

const Time = ( props ) => {
const Css = { backgroundColor: props.corSecundaria }

    return (

        <section className='Time' style={Css}>
            <h3>style={{ borderColor: props.corPrimaria }}{props.nome}</h3>

        </section>
    )
}

export default Time