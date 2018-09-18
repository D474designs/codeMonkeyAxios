import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Tutorial from './components/tutorial/tutorial.js';
import Contact from './components/SummitTutorial/SummitTutorial.js'
import Home from './components/Home/Home.js'
import Foro from './components/Foro/Foro.js'
import Footer from './components/Footer/Footer.js'
import './App.css';

const app = new Clarifai.App({
 apiKey: '90d1a395efcb48259c110118c84899f1'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  componentDidMount(){
    fetch('http://localhost:300')
      // .then(response => response.json())
      .then(data => console.log(data))
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
      //there are two states on the sign out
    } else if (route === 'home' || route === 'tutorial' || route === 'foro' || route === 'pedidos' ||  route === 'ChangitoAI') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />

        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'ChangitoAI'
          ? <div>
            <logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <a href="http://vision-explorer.reactive.ai/">Una nube de imagenes</a>
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
            <div className='footer'>
              <Footer />
            </div>
            </div>

            :(route === 'sugerencias'
              ? <div>
                <logo />
                <Contact />
                </div>

                  :(route === 'foro'
                    ? <div>
                      <logo />
                      <Foro />
                      <Footer />
                      </div>

                    :(route === 'tutorial'
                        ? <div>
                            <Logo />
                            <Tutorial />
                            <p> Tutorial </p>
                            <Footer />
                          </div>

                      :(route === 'home'
                      ? <div>
                          <Logo />
                          <Home />
                          <Footer />
                        </div>
                        : (
                           route === 'signin'
                           ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                           : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                          )
                        )
                      )
                    )
                  )
         }
      </div>
    );
  }
}

export default App;
