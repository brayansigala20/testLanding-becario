
const InfoPanel = () => {
    return (
        <aside style={{ padding: '30px 100px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                <h1 style={{
                    fontSize: '80px'
                }}>Dr. Jorge Treviño Garza </h1>
                <div style={{
                    width: '50%',
                    fontSize: '30px'
                }}>Otorrinolaringólogo en Monterrey que cuenta con especialidad en Cirugía Plástica Facial, es un médico que constantemente se actualiza con el  fin de mejorar sus servicios a los pacientes. </div>
                <button style={{ marginTop: '20px', borderRadius: '10px', color: 'white', width: '180px', height: '80px', backgroundColor: 'rgb(24, 31, 37)' }}>Contáctanos</button>
            </div>
            <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                <img style={{ height: '500px', width: '600px' }} src="https://drdavidbriones.com/wp-content/uploads/2019/11/Drupal-web_GettyImages-547016259.jpg" alt="Image of doctor" />
            </div>
        </aside>
    )
}

export default InfoPanel