//META{"name":"PasteSend","website":"https://github.com/cmd430/PasteSend","source":"https://github.com/cmd430/PasteSend/blob/master/PasteSend.plugin.js"}*//

class PasteSend {

  getName() { return 'PasteSend' }
  getDescription() { return 'Ctrl+Shift+V Paste and Send' }
  getVersion() { return '0.0.1' }
  getAuthor() { return 'cmd430' }

  load () {}
  start () {
    this.debounce = false
    document.addEventListener('keydown', this.handleEventDown.bind(this))
    document.addEventListener('keyup', this.handleEventUp.bind(this))
  }
  stop () {
    document.removeEventListener('keydown', this.handleEventDown.bind(this))
    document.removeEventListener('keyup', this.handleEventUp.bind(this))
  }

  handleEventDown (e) {
    if (this.debounce === true) return
    if (e.keyCode !== 86) return
    if (e.ctrlKey === false) return
    if (e.shiftKey === false) return

    this.debounce = true

    let inputBox = $('.da-channelTextArea .da-textArea')
    inputBox.focus()
    inputBox.select()

    const press = new KeyboardEvent('keydown', {
      key: 'Enter',
      code: 'Enter',
      which: 13,
      keyCode: 13,
      bubbles: true
    })
    Object.defineProperties(press, {
      keyCode: {
        value: 13
      }, which: {
        value: 13
      }
    })

    setTimeout(() => $('.da-slateTextArea')[0].dispatchEvent(press), 100)

  }

  handleEventUp (e) {
    this.debounce = false
  }
}
