import { useState } from "react"
import {AddCategory, GifGrid} from "./components"

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([  ])

    const onAddCategory = (newCategory) => {

        if ( categories.includes ( newCategory ) ) return;
        
        //categories.(push("Valorant")
        
        setCategories( [ newCategory , ...categories] )
        
        //setCategories(categories => [...categories, "Valorant"])
    }

    return (
       <>

        <h1>Gift Expert App</h1>
      

        <AddCategory 
        //setCategories={ setCategories } 
          onNewCategory={ onAddCategory } 
          >

        </AddCategory>
        

        { 
            categories.map( ( category ) => ( 

                <GifGrid 
                
                    key={category} 
                    
                    category={category}>

                </GifGrid>  
            ))
        }



        </>
    )
}

export default GifExpertApp