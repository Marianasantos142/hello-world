import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  Hellowordl(): string {
    return 'Hello World!';
  }

  BSM(): string {
    return 'Responsabilidade pessoal<br>Mentalidade de crescimento<br>Orientação ao futuro<br>Persistência<br>Comunicação<br>Adaptabilidade<br>Trabalho em equipe<br>Proatividade';

  }
  Objetivos() : string {
    return "comunicação, responsabilidade pessoal, mentalidade de crescimento, orientanção ao futuro, persistência, adaptabilidade, trabalho em equipe, proatividade"
}
}
