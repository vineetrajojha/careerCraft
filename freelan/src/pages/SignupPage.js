import Signup from "../features/auth/components/Signup";
import Footer from "../features/common/Footer";
import Navbar from "../features/common/Navbar";
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../features/auth/authSlice';

function SignupPage() {
    const user = useSelector(selectLoggedInUser);
    
    // Dummy scroll functions to pass to Navbar
    const scrollToSection = () => {};
    const scrollToFaqSection = () => {};
    const scrollToMentorsSection = () => {};
    
    return ( 
        <div>
        <Navbar 
            isLoggedIn={!!user} 
            scrollToFaqSection={scrollToFaqSection} 
            scrollToProductsSection={scrollToSection} 
            scrollToMentorsSection={scrollToMentorsSection} 
        />
            <Signup></Signup>
            <Footer />
        </div>
     );
}

export default SignupPage;