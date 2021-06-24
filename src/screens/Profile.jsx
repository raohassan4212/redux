import { useParams } from "react-router";

const Profile = () => {

    let {id , userName} = useParams();

    return (
        <div>
            <h1>Profile Page</h1>
            <h1>{id}</h1>
            <h1>{userName}</h1>
        </div>
    );
}

export default Profile;