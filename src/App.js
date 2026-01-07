import { Component } from 'react';
import './App.css';

//class stat extends React.component 
class App extends Component {
   constructor() {
     super();
     this.state = {
       Personne: {
         fullName: 'black scorpion',
         bio: 'je suis calme mais dangereux.',
         imgSrc: 'https://www.shutterstock.com/image-vector/scorpion-tattoo-design-vector-artwork-260nw-2469456375.jpg',
         profession: 'developpeur'
       },
      montre: false,
      tempsEcoule: 0
    };
    this.timer = null;
  }

  basculerAffichage = () => {
     this.setState(prevState => ({ montre: !prevState.montre })); // this.setstate({montre: !this.state.montre})
   };
 
   componentDidMount() {
     this.timer = setInterval(() => {
       this.setState(prevState => ({
         tempsEcoule: prevState.tempsEcoule + 1
       }));
     }, 1000); // Mise à jour chaque seconde
   }
 
   componentWillUnmount() {
     clearInterval(this.timer);
   }
 
   render() {
     return (
       <div className="app-container">
         <div className="header">
          <h1 className="title">Mon Profil React</h1>
        </div>
         <button onClick={this.basculerAffichage}>
           {this.state.montre ? 'Cacher le profil' : 'Afficher le profil'}
         </button>
         {this.state.montre && (
          <div className="profil">
             <img src={this.state.Personne.imgSrc} alt="profil" />
             <h2>{this.state.Personne.fullName}</h2>
             <h4>{this.state.Personne.profession}</h4>
             <p>{this.state.Personne.bio}</p>
         </div>
         )}

        <hr />
         <p>Temps écoulé depuis le montage : <strong>{this.state.tempsEcoule} secondes</strong></p>
       </div>
     );
   }
 }

 export default App;
