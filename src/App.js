import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import ListaProdB from './Components/ListaProdB'

const url_api = 'http://3.145.127.177:9000/api';

function App() {
  const [prodBs, setProdBs] = useState([])
  useEffect(() => {
    const getProdBs = () => {
      fetch(url_api)
      .then(res => res.json())
      .then(res => setProdBs(res))
    }
    getProdBs()
  },[])

  return (
    <Fragment>
      <Navbar brand='Bodega App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAling: 'center'}}>Lista de productos</h2>
             <ListaProdB prodBs={prodBs}/>
          </div>
          <div className='col -5'>
            <h2 style={{textAling: 'center'}}>Editar Producto</h2> 
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
