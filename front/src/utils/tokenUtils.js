import { useDefaultStore } from '@/stores/index'
import Cookie from 'js-cookie'

export const checkToken = () => {
  const Store = useDefaultStore()
  return !!(Store.getToken || Cookie.get('token'))
}

export function getToken() {
  const Store = useDefaultStore()
  return Store.getToken || Cookie.get('token')
}

export function clearToken() {
  const Store = useDefaultStore()
  Store.clearToken()
  Cookie.remove('token')
}

export function setToken(token) {
  const Store = useDefaultStore()
  Store.setToken(token)
  Cookie.set('token', token)
}
