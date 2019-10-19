import React from 'react';
import About from '../Components/About';
import Results from '../Components/Results';
import Search from '../Components/Search';


const App = ()=>{
    const data = useGetData(api);
console.log(data);
return data.length ===0 ? <h1>...Cargando</h1> : 
    (
        <Main>
            
            <div>
                <div
                //logo = 
                //description = 
                //social=
                 />
                 
            </div>
           
        </Main>
    )
}


export default App;