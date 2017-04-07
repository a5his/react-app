import React from 'react';


class MyApp extends React.Component{
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
      cat: 5
    };
  }

  update(e){
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
        <h1>{ this.state.txt }</h1>
        <b>Bold {this.state.cat} </b>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

MyApp.propTypes = {
  txt: React.PropTypes.string.isRequired,
  cat: React.PropTypes.number.isRequired
}

MyApp.defaultProps = {
  txt: 'This is defaul Text'
}

const Widget = (props) =>
  <input type="text" onChange={props.update.bind(this)} />
export default MyApp;
