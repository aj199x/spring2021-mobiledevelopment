import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      //Takes each item from menu and wraps it around <li></li>
      responseHTML += '<li>' + item + '</li>'; 
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });
    //Takes everything that is printed from "this.props.menu.forEach( (item)" and wraps it around <ul></ul>
    responseHTML = '<ul>' + responseHTML + '</ul>';
    

    return responseHTML;
    
  }
}

export default Sidebar;
