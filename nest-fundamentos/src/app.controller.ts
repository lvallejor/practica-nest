import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  HttpStatus,
  Patch,
  Header,
  Res
} from '@nestjs/common';
import { AppService } from './app.service';
import {Response} from "express"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  elementos = ["carro", "moto", "avion", "barco"]

  @Get()
  getHello():object {
    return this.elementos;
  }

  @Post()
  create(){
    this.elementos.push("un nuevo elemento")
    return this.elementos
  }

  @Post("http-code")
  @HttpCode(HttpStatus.NO_CONTENT)
  httpCode1(){
    this.elementos.push("otro elemento")
    return
  }

  @Patch("http-code")
  @HttpCode(HttpStatus.PARTIAL_CONTENT)
  httpCode2(){
    this.elementos[0]= "vehiculo";
    console.log("Se ha editado el primer elemento");
    return `Edited: ${this.elementos[0]}`
  }

  @Get("header")
  @HttpCode(HttpStatus.ACCEPTED)
  @Header("mi-propiedad-header", "el valor de la propiedad")
  responseWithDecoratorHeader(){
    return "OK, mira en los headers"
  }

  @Get("library-specific")
  librarySpecific(@Res() res: Response){
    return res 
      .status(HttpStatus.OK)
      .header("mi-propiedad-headers-2", "el valor de la propiedad 2")
      .jsonp("Todo ok con la  libreria especifica")
  }

}
