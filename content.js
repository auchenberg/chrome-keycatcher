var eventBuffer = []

function onKeyDown(e) {
  console.log('keycatcher.buffer.add')
  eventBuffer.push(e)
}

function onDOMReady() {
  document.removeEventListener('keydown', onKeyDown)
  console.log('keycatcher.buffer.reply')

  setTimeout(() => {
    eventBuffer.forEach((event) => {
      var e = new KeyboardEvent("keydown", {
        bubbles : event.bubbles, 
        cancelable : event.cancelable,
        keyCode : event.keyCode, 
        charCode : event.charCode,
        shiftKey : event.shiftKey,
        metaKey : event.metaKey,
        which : event.which
      })
      document.dispatchEvent(e)
    })
  }, 5000)
}

document.addEventListener('keydown', onKeyDown, false)
document.addEventListener('DOMContentLoaded', onDOMReady, false)