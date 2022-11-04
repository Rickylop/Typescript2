import { InvalidArgument } from '../errors/invalid-arg'
import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols http and Query', () => {
  test(
    'Url Login', () => {
      const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')

      expect(parsedUrl.href).toBe('http://localhost:3000/login')
      expect(parsedUrl.port).toBe('3000')
    })

  test(
    'Response QRY', () => {
      const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')

      const expectAuth = {
        user: 'user',
        password: 'password'
      }
      expect(parsedUrl.query).toEqual(expectAuth)
    })

  test('Invalid Url', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
