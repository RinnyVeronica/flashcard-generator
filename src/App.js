import './App.css';
import FlashCardCreate from './Pages/FlashCardCreate';
import Cards from './Pages/Cards';
import AllCreatedCards from './Pages/AllCreatedCards';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


// dark mode
export const ThemeContext = createContext(null)

function App() {
    const [theme, setTheme] = useState("light");
    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    };
    return (

        <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
            <div id={theme} className={`w-full bg-white font-Montserrat flex items-center space-x-10 mb-3`}>
                <div className='px-5 xl:px-32 container mx-auto'>
                    <Home />
                    <Routes>
                        <Route path='/' element={<FlashCardCreate theme={theme} />} />
                        <Route path='/myflashcard' element={<Cards theme={theme} />} />
                        <Route path='/AllCreatedCards/:groupId' element={<AllCreatedCards theme={theme} />} />
                    </Routes>
                </div>
                <ToastContainer />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;