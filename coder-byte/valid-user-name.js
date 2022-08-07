function CodelandUsernameValidation (str) {
  function isValidLength (name) {
    let ret = false
    if (name.length >= 4 && name.length <= 25) {
      ret = true
    }
    return ret
  }

  function isValidStartChar (name) {
    const ch = name.charAt(0)
    let ret = false
    if (ch.toUpperCase() !== ch.toLowerCase()) {
      ret = true
    }
    return ret
  }

  function hasOnlyLetterNumberUnderScore (name) {
    return /^\w+$/.test(name)
  }

  function doesNotHaveLastLetterUnderScore (name) {
    let ret = true
    if (name.charAt(name.length - 1) === '_') {
      ret = false
    }
    return ret
  }
  const arr = Array.from(str)
  const isValid =
    str &&
    isValidLength(str) &&
    isValidStartChar(str) &&
    hasOnlyLetterNumberUnderScore(str) &&
    doesNotHaveLastLetterUnderScore(str)

  // const a = isValidLength('1122')
  // const b = isValidStartChar('a')
  // const c= hasOnlyLetterNumberUnderScore('pyyu')
  // const d = doesNotHaveLastLetterUnderScore('jjj_')

  // code goes here
  return isValid
}

CodelandUsernameValidation('aajkjjkjkjkjkc')
