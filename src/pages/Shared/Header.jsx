import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt=""/>
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;