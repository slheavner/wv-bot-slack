const checker = require('./checker')
const detector = require('./imageDetector')

const getChangedTexts = event => {
  const attach = event.message.attachments[0]
  return [event.text, attach.title, attach.text, attach.fallback, attach.image_url, attach.from_url]
}

const getFileText = event => {
  const file = event.files[0]
  return [event.text, file.name, file.title]
}

exports.handle = event => {
  let hasMatch = false
  if (event.subtype === 'file_share' && event.files) {
    const texts = getFileText(event)
    hasMatch = checker.checks(texts)
  } else if (event.subtype === 'message_changed' && event.message.attachments) {
    const texts = getChangedTexts(event)
    hasMatch = checker.checks(texts)
  } else {
    hasMatch = checker.check(event.text)
  }

  console.log(`has match : ${hasMatch}`)
  return hasMatch
}
