import {Promise} from 'bluebird'

const demo = (flag: boolean) => {
  return new Promise((resolve, reject) => {
    flag ? resolve('good') : reject('bad')
  })
}

demo(true).then(data => console.log(data)).catch(err => console.log(err))
demo(false).then(data => console.log(data)).catch(err => console.log(err))
