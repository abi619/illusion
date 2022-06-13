module.exports.notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
  }
  
module.exports.errorHandler= (error, req, res, next) => {
  res.json({
    error: {
      message: error.message,
    }
  })
  }
  