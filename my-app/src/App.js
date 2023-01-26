import React from 'react'
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';

function App(){
    return(
        <div>
           <Card1 name = "Card1" desc = "this is Card1"/>
           <Card2/>
        </div>
    )
}

export default App;