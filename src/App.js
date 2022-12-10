import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App(){
const [mode, setmode] = useState('light');    //wether dark mode is enable or not
const [alert,SetAlert] = useState(null);

const showAlert =(massage, type)=>{            //function method
  SetAlert({
    msg:massage,                               //alert object
    type:type
  })
  setTimeout(() => {
    SetAlert(null);
  }, 2000);


}
const toggleMode= ()=>{
  if(mode==='light'){
    setmode('dark');
    showAlert("Dark Mode has been enabled","success");
  }
  else{
    setmode('light');
   showAlert("light Mode has been enabled","success");
  }
}
  return(
  
    <>

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>                                           
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the textform to analyse below" mode={mode}/>

 {/*   <about/>  */}
</div>
  </>
  );
}

export default App;
