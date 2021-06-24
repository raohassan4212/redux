import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = () => {

    const state = useSelector(state => state);
    const history = useHistory();
    const gotoContact = () => {
        history.push('./contact')
    }

   

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='notFound'>Not Found</Link></li>
            </ul>

            <button onClick={gotoContact}>Contact Page</button>
            {state.name}

            



        </div>
    );
}

export default Home;
