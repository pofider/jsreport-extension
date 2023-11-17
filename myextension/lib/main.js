module.exports = (reporter, definition) => {
  reporter.registerMainAction('myextension.update', async (spec, originalReq) => {
    originalReq.context.someValue = spec
  })

  reporter.renderErrorListeners.add('myextension', (req, res, err) => {
    console.log('listener error', req.context.someValue)
  })

  reporter.afterRenderListeners.add('myextension', (req, res) => {
    console.log('listener after render', req.context.someValue)
  })
}
