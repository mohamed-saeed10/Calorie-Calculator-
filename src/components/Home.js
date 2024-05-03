import Calories from './Calories'; // Import the Calories component correctly
import { useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { ScrollContext } from '../context/Scroll';



const Home = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const { scroll } = useContext(ScrollContext);
    const contactFormRef = useRef(null);

    useEffect(() => {
        if (location.pathname === "/" && location.search !== "?to=Contact") {
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.search]);

    useEffect(() => {
        const scrollTo = searchParams.get("to");
        if (scrollTo === "Contact") {
            contactFormRef.current.scrollIntoView();
        }
    }, [searchParams, scroll]);

    return (
        <main className="home">
            <Calories /> {/* Render the Calories component here */}
        </main>
    );
}

export default Home;
