import logo from '../images/logo.png';

const FirstInfo = () => {
    return (
        <div>
            <div className='minHead'>
                <img src={logo} className='logo' alt='logo'></img>
                <h2>Ministry of Justice</h2>
            </div>
            <div>
                <div className='flex'>
                    <h4 className='mt3'>Minister: </h4>
                    <p className='ml2'>Malam Abubakar Malami</p>
                </div>
                <div className='flex'>
                    <h4 className='mt3'>Minister of State:</h4>
                    <p className='ml2'>Dr James Ibori</p>
                </div>
            </div>
        </div>
    )
}

export default FirstInfo;