import './assets/styles/styles.scss'
import Button from './components/Button'

export default class Mui {
 constructor (
   public container: Element
 ) {}

 button (selector: HTMLElement) {
   return new Button(selector)
 }
}

export {
  Button
}