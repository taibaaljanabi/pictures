import React, {useState, useEffect} from 'react'
const Context = React.createContext()

function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, 
    [])
    console.log(allPhotos)

    function toggleFavorite(id){
        const updatedPhotos = allPhotos.map( photo => {
            if (photo.id === id){
                console.log(id)
                console.log( !photo.isFavorite)
                return {
                    ...photo,
                    isFavorite : !isFavorite
                }
            }
            return photo
            
        })
       setAllPhotos(updatedPhotos)

    }
    return (
        <Context.Provider value = {{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}
export  {ContextProvider, Context}