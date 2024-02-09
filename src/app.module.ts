import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { LoggerModule } from './logger/logger.module';
import { PagoModule} from './pago/pago.module';

@Module({
  imports: [ClienteModule, LoggerModule, PagoModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
