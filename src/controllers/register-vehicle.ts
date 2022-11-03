import { HttpResponse, HttpRequest } from './../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const properties = ['name', 'model', 'year', 'color']

    for (const props of properties) {
      if (!httpRequest.body[props]) {
        return {
          statusCode: 400,
          body: new Error(`Error in the ${props}`)
        }
      }
    }
  }
}
