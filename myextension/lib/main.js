module.exports = (reporter, definition) => {
  reporter.renderErrorListeners.add('myextension', (req, res, err) => {
    console.log('listener error', err.message)
  })

  reporter.afterRenderListeners.add('myextension', (req, res) => {
    console.log('listener after render')
  })
}
