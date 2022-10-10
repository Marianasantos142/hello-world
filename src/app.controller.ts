import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/helloworld')
  Helloworld(): string {
    return this.appService.Hellowordl();
  }
  @Get('/BSM')
  BSM(): string {
    return this.appService.BSM();
  }

@Get('/objetivos')
Objetivos() : string {
  return this.appService.Objetivos();
 }
}
