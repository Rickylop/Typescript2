export class MissingFormalParameter extends Error {
  constructor (public name: string) {
    super(`Error In the parameter: ${name}`)
  }
}
