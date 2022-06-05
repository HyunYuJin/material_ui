import Button from './components/Button'

export default class Mui {
 constructor () {}

 button (selector: string) {
   return new Button(selector)
 }
}

export {
  Button
}