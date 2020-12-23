import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Ikinci from './components/Ikinci'
import Ucuncu from './components/Ucuncu'
import Sonn from './components/Sonn'
import Alt from './components/Alt'

function App() {
  return (
   <div >
     <Header />
     
     <div className="container mt-5">
       <div className="row">
         <div className="col-sm-12">
         <Ucuncu

          title="Carousel Title"
          body="lorem ipsum dolor"
          imgURL="https://i.hizliresim.com/WhKcZA.jpg" />
         
         </div>
       </div>
     </div>

     <div className="container"><hr className="mt-5" /></div>
     <div className="container mt-5">
       <div className="row">
      
{
  Sonn.map(
    item => (
      <div className="col-sm-3">
        <Ucuncu
          title={item.title}
          body={item.body}
          imgURL={item.imgURL}
           />
        
      </div>

    )
  )
   }       
       
       </div>
     </div>
     <div className="container"><hr className="mt-5" /></div>
     <Alt />




   </div>
  );
}

export default App;
