import type {
  ButtonType
} from './types'

class Button {
  public config: ButtonType
  public nodes: NodeListOf<Element>

  constructor (
    config: ButtonType
  ) {
    this.config = config
    this.nodes = document.querySelectorAll('mui-button')

    this.init()
  }

  init () {
    console.log(this.nodes)
  }

  initEvents () {

  }

  initDOM () {

  }

  initClassList () {

  }

  clickHandler () {

  }

  render () {

  }
}

export default Button