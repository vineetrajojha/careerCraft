import Login from "../features/auth/components/Login";
import Footer from "../features/common/Footer";
import { Navbar } from "./About";


function LoginPage() {
    
    return ( <div>
    <Navbar />
        <Login></Login>
        <Footer />
    </div>  );
}

export default LoginPage;