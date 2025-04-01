import Login from "../features/auth/components/Login";
import Footer from "../features/common/Footer";
import Navbar from "../features/common/Navbar";
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../features/auth/authSlice';

function LoginPage() {
    const user = useSelector(selectLoggedInUser);
    
    // Dummy scroll functions to pass to Navbar
    const scrollToSection = () => {};
    const scrollToFaqSection = () => {};
    const scrollToMentorsSection = () => {};
    
    return ( <div>
    <Navbar 
        isLoggedIn={!!user} 
        scrollToFaqSection={scrollToFaqSection} 
        scrollToProductsSection={scrollToSection} 
        scrollToMentorsSection={scrollToMentorsSection} 
    />
        <Login></Login>
        <Footer />
    </div>  );
}

export default LoginPage;