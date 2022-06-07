interface ButtonAttrs {
  class ?: 'mui-button',
  variant ?: 'text' | 'contained' | 'outlined',
  type ?: 'primary' | 'secondary' | 'tertiary' | 'cancel' | 'danger',
  size ?: 'small' | 'medium' | 'large'
}

class Button {
  private attrs: ButtonAttrs | any = {}
  constructor (
    public selector: HTMLElement
  ) {
    this.init()
  }

  init () {
    this.initAttrs()
    this.initClassList()
  }

  initEvents () {

  }

  initAttrs () {
    const attrs = this.selector.getAttributeNames()
    attrs.forEach(attr => {
      this.attrs[attr] = this.selector.getAttribute(attr)
    })
  }

  initClassList () {
    let classList = [`mui-button mui-button--${this.attrs.type}`]
    if (this.attrs.variant) {
      classList.push('mui-button--' + this.attrs.variant)
    }
    if (this.attrs.size) {
      classList.push('mui-button--' + this.attrs.size)
    }
    
    this.selector.className = classList.join(' ')
  }

  clickHandler () {
    // this.emit('click')
  }

  render () {

  }
}

export default Button