//  Work with DOM
import webpackLogo from '../images/webpack-logo.svg'

const example = () => {

  const logo = document.createElement('img')
  logo.src = webpackLogo

  const heading = document.createElement('h1')
  heading.textContent = 'version 5'

  const page = document.getElementById('root')

  if (page) {
    page.append(logo, heading)
  }
}

//  Work with testing
export const sum = (a, b) => a + b

//  ESLint ecmascript 2018+
const obj = { a: 1, b: 2, c: 3 }
const obj2 = { ...obj, d: 4 }

console.table(obj2)

export default example
