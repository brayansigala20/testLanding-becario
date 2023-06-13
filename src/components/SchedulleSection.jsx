
const SchedulleSection = () => {
    return (
        <section style={{ padding: '30px 100px' }}>
            <div style={{ backgroundColor: 'rgb(24, 31, 37)', color: 'white', padding: '40px', textAlign: 'center', borderRadius: '10px' }}>
                <h1 style={{ fontSize: '40px' }}>Agenda una consulta</h1>
            </div>
            <div style={{ display: 'flex', padding: '40px 0' }}>
                <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '80%' }} src="https://otorrinolaringologoenguadalupe.com/assets/img/dr-fernando-aguirre.jpg" alt="" />
                </div>
                <div style={{ width: '50%' }}>
                    <h1 style={{ fontWeight: '500', fontSize: '40px' }}>Otorrinolaringología</h1>
                    <h3 style={{ fontSize: '30px' }}>Dr. Juan Angel Ibarra Cantú</h3>
                    <div style={{ margin: '30px 0', fontSize: '25px' }}><b>El otorrinolaringólogo en Monterrey Jorge Treviño</b> es ahora uno de los médicos más importantes en su campo gracias a su contribución a la investigación y la prevención.</div>
                    <h5 style={{ fontSize: '20px' }}>Agenda una consulta por whatsapp al número  8115448285 <br />
                        O mediante una llamada al  8183475220 <br />
                        nuestro correo: jorgetrega@gmail.com <br />
                        Lunes a Sábado <br />
                        9:00 a 19:00 hrs
                    </h5>
                    <div>
                        Da clic en el botón de WhatsApp para contactarnos para saber más sobre el <b><u>otorrinolaringólogo en Monterrey.</u></b>
                    </div>
                    <button style={{ border: '1px solid black', borderRadius: '8px', padding: '15px', marginTop: '30px' }}>Whatsapp</button>
                </div>
            </div>
        </section>
    )
}

export default SchedulleSection