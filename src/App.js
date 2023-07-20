//create a component
// function App(){
//      return <input type="number" min = {10} max ={20}/>;
//      return <textarea autoFocus={true}/>;
//     return <input type="number" min = {10} max ={20} style={{border : '1px solid red'}}/>;
// }

import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  // return <textarea autoFocus={true}/>;
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">These are some common PDA's</p>
        </div>
      </section>
      
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana99"
                image={CortanaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri99" image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
