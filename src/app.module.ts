import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { LoggerModule } from './logger/logger.module';
import { PagoModule } from './pago/pago.module';
import { HijoModule } from './hijo/hijo.module';
import { DepositosModule } from './depositos/depositos.module';



@Module({
  imports: [ClienteModule, LoggerModule, PagoModule, HijoModule, DepositosModule],

})
export class AppModule {}
