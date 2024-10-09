import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';

const links = [
    "https://mern-blog-2-0ql1.onrender.com",
    "https://mern-blog-1-q0z8.onrender.com",
    "https://mern-blog-cagn.onrender.com",
    "https://blog-website-91vr.onrender.com",
    "https://mern-blogwebsite.onrender.com"
];

const AppWrapper = () => {
    const [currentLink, setCurrentLink] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [timeoutReached, setTimeoutReached] = useState(false);

    useEffect(() => {
        const linkCheckTimeout = setTimeout(() => {
            // Set timeout reached to true after 1 minute
            setTimeoutReached(true);
        }, 60000); // 60 seconds

        // Function to check the link
        const checkLink = (link) => {
            const img = new Image();
            img.src = link;
            img.onload = () => {
                // If the link loads successfully, navigate to it
                window.location.href = link;
            };
            img.onerror = () => {
                // If the link fails to load, move to the next link
                if (!timeoutReached) {
                    setCurrentLink(prev => prev + 1);
                }
            };
        };

        // Start checking the current link
        checkLink(links[currentLink]);

        // Cleanup function
        return () => {
            clearTimeout(linkCheckTimeout);
        };
    }, [currentLink, timeoutReached]);

    // If all links are exhausted, we could handle that case (optional)
    if (currentLink >= links.length) {
        return <h1>No available links to redirect to.</h1>;
    }

    return (
        <div>
            <h1>Loading... {links[currentLink]}</h1>
            <p>If you are not redirected automatically, <a href={links[currentLink]} target="_blank" rel="noopener noreferrer">click here</a>.</p>
            {isLoading && <p>Loading...</p>} {/* Show loading indicator if needed */}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <PersistGate persistor={persistor}>
        <Provider store={store}>
            <ThemeProvider>
                <AppWrapper />
            </ThemeProvider>
        </Provider>
    </PersistGate>
);