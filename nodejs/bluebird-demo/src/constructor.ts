import {Promise} from 'bluebird'

const demo = (flag: boolean) => {
  return new Promise((resolve, reject) => {
    flag ? resolve('good') : reject('bad')
  })
}

export default demo
