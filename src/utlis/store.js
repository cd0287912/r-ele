import store from 'store'

const setStorage = (key, value) => {
  store.set(key, value)
}

const getStorage = key => {
  return store.get(key)
}
const removeStorage = key => {
  return store.remove(key)
}


export {
  setStorage,
  getStorage,
  removeStorage
}