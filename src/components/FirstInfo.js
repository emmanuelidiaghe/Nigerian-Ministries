import logo from '../images/logo.png';

const FirstInfo = () => {
    return (
        <div>
            <div className='minHead'>
                <img src={logo} className='logo' alt='logo'></img>
                <h2>Ministry of Justice</h2>
            </div>
            <div>
                <p>Minister: Malam Abubakar Malami</p>
                <p>Minister of State: Malam Abubakar Malami</p>
                <p>Address: </p>
                <p>
                Federal Secretariat Towers, Shehu Shagari Way
                Central Area, P.M.B. 192, Garki
                Abuja Nigeria.
                </p>
                <p>Website: <a href='www.justice.gov.ng'>www.justice.gov.ng</a></p>
            </div>
        </div>
    )
}

export default FirstInfo;