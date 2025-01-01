import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    useEffect(() => {

    }, [])
    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}