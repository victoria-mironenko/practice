import { Component } from "./core/Component.js";
import './Button.js'

export class App extends Component {
  constructor() {
    super();
    this.state = {
        count: 1,
        buttonPlusContent: '+',
        buttonMinusContent: '-',
    };
    this.props = {};
  }

  increase() {
    this.setState((state) => {
        return {
            ...state,
            count: state.count + 1
        }
    })
  }
  decrease() {
    this.setState((state) => {
        return {
            ...state,
            count: state.count - 1
        }
    })
  }


  componentDidMount() {
    this.addEventListener('increase', this.increase)
    this.addEventListener('decrease', this.decrease)
  
  }

  componentWillUnmount() {
    this.removeEventListener('increase', this.increase)
    this.removeEventListener('decrease', this.decrease)
  }

  static get observedAttributes() {
    return ['title-content'];
  }

  render() {
    return `
    <my-button eventtype="increase" content="+"></my-button>
    <span>${this.state.count}</span>
    <my-button eventtype="decrease" content="-"></my-button>
    `
  }


}

customElements.define("my-app", App);
