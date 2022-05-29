import './assets/styles/styles.scss'
import {
  Button
} from './components/index'

function init (): void {
  button()
}

function button () {
  const button = new Button({
    type: 'primary'
  })

  return button
}

function initEvents (): void {

}

init()