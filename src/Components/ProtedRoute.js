import { Outlet,Navigate} from "react-router-dom";

function ProtedRoute(){

    return(
        localStorage.getItem("token")
        ?
        <Outlet/>
        :
        <Navigate to='/'/>

    )

}
export default ProtedRoute;