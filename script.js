let app = document.getElementById('app');

class Drum extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: ['Heater - 1', 'Heater - 2', 'Heater - 3', 'Heater - 4', 'Clap', 'Open - HH', "Kick-n'-Hat", 'Kick', 'Closed-HH'],
      audios: [
     'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
],
      value: 'Press a key'
    }
    this.handleClick = this.handleClick.bind(this);
   }
    componentWillMount() {
      document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }      

  handleClick = event => {
    const value = event.target.textContent;
   const id = event.target.id; 
    const playId = id-1;
 document.getElementById(value).play();
    this.setState({value: this.state.index[playId]});
  }

  onKeyPressed = event => {
    const key = event.key.toUpperCase();
  if(key.match(/^[QWEASDZXC]$/)){
document.getElementById(key).play();
    const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    const playId = keys.indexOf(key);
    this.setState({value: this.state.index[playId]});
    clicked(playId+1)
  }
  }

  render(){
    return(
      <div id="drum-machine">
        <div id='numpad'>
          <button id="1" className="drum-pad" onClick={this.handleClick}>Q<audio id = 'Q' className='clip' src={this.state.audios[0]}>
          </audio>
          </button>
          <button id="2" className="drum-pad" onClick={this.handleClick}>W<audio id = 'W' className='clip' src={this.state.audios[1]}></audio></button>
          <button id="3" className="drum-pad" onClick={this.handleClick}>E<audio id = 'E' className='clip' src={this.state.audios[2]}></audio></button>
          <button id="4" className="drum-pad" onClick={this.handleClick}>A<audio id = 'A' className='clip' src={this.state.audios[3]}></audio></button>
          <button id="5" className="drum-pad" onClick={this.handleClick}>S<audio id = 'S' className='clip' src={this.state.audios[4]}></audio></button>
          <button id="6" className="drum-pad" onClick={this.handleClick}>D<audio id = 'D' className='clip' src={this.state.audios[5]}></audio></button>
          <button id="7" className="drum-pad" onClick={this.handleClick}>Z<audio id = 'Z' className='clip' src={this.state.audios[6]}></audio></button>
          <button id="8" className="drum-pad" onClick={this.handleClick}>X<audio id = 'X' className='clip' src={this.state.audios[7]}></audio></button>
          <button id="9" className="drum-pad" onClick={this.handleClick}>C<audio id = 'C' className='clip' src={this.state.audios[8]}></audio></button>
        </div>
        <div id="display">{this.state.value}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Drum />, app)

const clicked = event => {
  const id = '#'+event;
  $(id).animate({opacity: '0.5'}, 100)
  $(id).animate({opacity: '1'}, 100)
}