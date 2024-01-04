/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text, size) => {
  return `${text.split(' ').slice(0, size).join(' ')}...`
}

const idGenerator = (events, length = 1) => {
  const arrayData = []
  events.map((data) => {
    return arrayData.push(parseInt(data.id, 10))
  })
  const number = (Math.max(...arrayData) + 1).toString()
  return number.length < length ? `${'0'.repeat(length - number.length)}${number}` : number
}

const validImageTypes = (file) => {
  const fileType = file.type
  const types = ['image/jpeg', 'image/png', 'application/pdf']
  if (!types.includes(fileType)) {
    return false
  }
  return true
}

const checkPasswordValid = (value, setState) => {
  const checkPassword = value
  if (checkPassword.length >= 8) {
    setState((state) => {
      return { ...state, minimumChar: true }
    })
  } else {
    setState((state) => {
      return { ...state, minimumChar: false }
    })
  }
  if (/\d/.test(checkPassword)) {
    setState((state) => {
      return { ...state, numberValid: true }
    })
  } else {
    setState((state) => {
      return { ...state, numberValid: false }
    })
  }
  if (/[@$!%*#?&]/.test(checkPassword)) {
    setState((state) => {
      return { ...state, specialCharValid: true }
    })
  } else {
    setState((state) => {
      return { ...state, specialCharValid: false }
    })
  }
  if (/[A-Z]/.test(checkPassword)) {
    setState((state) => {
      return { ...state, uppercaseValid: true }
    })
  } else {
    setState((state) => {
      return { ...state, uppercaseValid: false }
    })
  }
  if (/[a-z]/.test(checkPassword)) {
    setState((state) => {
      return { ...state, lowercaseValid: true }
    })
  } else {
    setState((state) => {
      return { ...state, lowercaseValid: false }
    })
  }
}

export { ellipsis, idGenerator, validImageTypes, checkPasswordValid }
