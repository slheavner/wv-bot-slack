const detector = require('./imageDetector')

describe('detector', () => {
  describe('file_upload image', () => {
    it('annotates image', () => {
      expect.assertions(1)

      return expect(
        detector.detect('https://pbs.twimg.com/media/CrdAUswW8AApl2e.jpg')
      ).resolves.toBeTruthy()
    })
  })
})
