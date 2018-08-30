const eventer = require('./eventer')
const imageLink = require('../examples/imageLink')
const imageUpload = require('../examples/imageUpload')
const textMessage = require('../examples/textMessage')

describe('eventer', () => {
  describe('link image', () => {
    it('find wvu in image texts', () => {
      const result = eventer.handle(imageLink.hasMatch)
      expect(result).toEqual(true)
    })
  })

  describe('file upload', () => {
    it('doesnt find match with non wvu text', () => {
      const result = eventer.handle(imageUpload.noMatch)
      expect(result).toEqual(false)
    })

    it('find wvu in file name', () => {
      const result = eventer.handle(imageUpload.hasName)
      expect(result).toEqual(true)
    })

    it('find wvu in file title', () => {
      const result = eventer.handle(imageUpload.hasTitle)
      expect(result).toEqual(true)
    })
  })

  describe('simple message', () => {
    it('doesnt find in non wvu text', () => {
      const result = eventer.handle(textMessage.noMatch)
      expect(result).toEqual(false)
    })

    it('find with country roads', () => {
      const result = eventer.handle(textMessage.hasText)
      expect(result).toEqual(true)
    })
  })
})
