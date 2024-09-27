
const Profile = () => {
    const location = useLocation();
    const userData = location.state;
    console.log("got me genius ")
    return ( 
        

        <h3 className="h-full bg-red-900">this is UserProfile</h3>
     );
}
 
export default Profile;