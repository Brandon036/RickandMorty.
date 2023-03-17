import './App.css'
import Card from '../components/Card/Card.jsx'
import Card1 from '../components/Card1/Card1'
import Card2 from '../components/Card2/Card2'
import Card3 from '../components/Card3/Card3'


import { Rick, Morty, Summer, Beth} from './data.js'

//import characters from './data.js' **
function App () {
return (
  
  
     <div className='App' >

   
     <Card
          name={Rick.name} 
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
           onClose={() => alert('Emulamos que se cierra la card')} 
           />
           
     
    
     
        <Card1
          name={Morty.name} 
          species={Morty.species}
          gender={Morty.gender}
          image={Morty.image}
          onClose={() => alert('Emulamos que se cierra la card')} 
          />
        
          
     
      <Card2
          name={Summer.name} 
          species={Summer.species}
          gender={Summer.gender}
          image={Summer.image}
          onClose={() => alert('Emulamos que se cierra la card')} 
          />
       
       
     
        <Card3
          
          name={Beth.name} 
          species={Beth.species}
          gender={Beth.gender}
          image={Beth.image}
          
      onClose={() => alert('Emulamos que se cierra la card')} 

          />
         
      
     
    
</div>
  )
}

export default App
