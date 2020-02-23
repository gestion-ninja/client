import { environment } from 'src/environments/environment';

export abstract class BaseService {

  private base: string

  constructor(base: string) {
    this.base = base
  }

   /**
   *
   * @param path default = '', the uri to the ressource, path variables cant be marked by adding ':' before the variable name
   * @param params a optionnal list for param containing
   * * name (the path variable name without the ':' before)
   * * value (the value that must be written in the uri)
   */
  url(path = '', ...params: { name: string, value: string | number}[]) {
    if (params) {
      params.forEach( param => {
        const regexp = new RegExp(`:${param.name}`)
        path = path.replace(regexp, String(param.value))
      })
    }
    return `http://${environment.api.host}:${environment.api.port}/${this.base}/${path}`
  }

}
