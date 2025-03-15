import Signup from "../features/auth/components/Signup";
import Footer from "../features/common/Footer";
import { Navbar } from "./About";

function SignupPage() {
    return ( 
        <div>
        <Navbar />
            <Signup></Signup>
            <Footer />
        </div>
     );
}

export default SignupPage;