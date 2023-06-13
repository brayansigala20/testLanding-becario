
const Header = () => {
    return (
        <header style={{
            width: "100%",
            backgroundColor: 'rgb(24, 31, 37)',
            padding: '20px 100px',
            height: '120px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <h1 style={{ fontSize: '30px', color: 'white' }}>
                <b>Otorrinolaringólogo en Monterrey</b>
            </h1>
            <button style={{ padding: '5px', borderRadius: '10px', color: 'black', width: '130px', height: '70px', backgroundColor: 'white' }}>Nuestros servicios</button>
        </header>
    )
}

export default Header