const path = require('path')
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve('./vision-key.json')
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
const vision = require('@google-cloud/vision')
const client = new vision.ImageAnnotatorClient()

exports.detect = url => {
  return client
    .annotateImage({
      image: { source: { imageUri: url } },
      features: [{ type: 'TEXT_DETECTION' }],
    })
    .then(results => {
      console.log(JSON.stringify(results))
      debugger
      return results
    })
    .catch(err => {
      console.error(err)
    })
}
