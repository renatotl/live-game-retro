import { Injectable } from '@nestjs/common';


// injeçao de dependencias
// o nest vai injetar ela em quem tiver precisando/ neste caso o controller/ em um contructor
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
