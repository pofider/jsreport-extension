module.exports = (reporter, definition) => {
    reporter.beforeRenderListeners.add('myextension', async (req, res) => {      
        await reporter.executeMainAction('myextension.update', req.data.someValue, req)      
    })
  }
  