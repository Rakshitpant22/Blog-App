import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';

const links = [
  "https://mern-blog-cagn.onrender.com",
    "https://mern-blog-2-0ql1.onrender.com",
    "https://mern-blog-1-q0z8.onrender.com",
    "https://blog-website-91vr.onrender.com",
    "https://mern-blogwebsite.onrender.com"
];

const AppWrapper = () => {
    useEffect(() => {
        let currentLinkIndex = 0;

        const tryLinks = () => {
            if (currentLinkIndex < links.length) {
                const link = links[currentLinkIndex];

                // Open the link
                window.location.href = link;

                // Set a timeout to switch to the next link after 60 seconds
                setTimeout(() => {
                    currentLinkIndex++;
                    tryLinks(); // Try the next link
                }, 40000); // 40000 ms = 40 seconds
            }
        };

        tryLinks(); // Start trying links

        // Optionally, clean up if the component unmounts
        return () => {
            currentLinkIndex = links.length; // Prevent further attempts
        };
    }, []);

    return (
        <div>
            <h1>Redirecting...</h1>
            <p>If you are not redirected automatically, <a href="#" onClick={() => window.location.href = links[0]}>click here</a>.</p>
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