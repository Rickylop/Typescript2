export class RegisterVehicle {
  handle (httpRequest: any): any {
    const properties = ['name', 'model', 'year']

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
