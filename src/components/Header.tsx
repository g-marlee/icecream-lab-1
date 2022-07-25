import './Header.css';

interface Props {
    user: String;
}

function Header({user}: Props) {
    return (<div style={{display: 'flex', justifyContent: 'space-around', boxShadow: '2px 2px 5px #8d918e'}}>
        <h1 className='caveat-font' style={{color: '#0e3c7e', padding: '12px'}}>Ice Cream Wars</h1>
        <p>Welcome, {user}</p>
        </div>)
}

export default Header;