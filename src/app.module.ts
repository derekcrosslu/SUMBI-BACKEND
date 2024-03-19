import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { LoggerModule } from './logger/logger.module';
import { PagoModule } from './pago/pago.module';
import { HijoModule } from './hijo/hijo.module';
import { DepositosModule } from './depositos/depositos.module';
import { NotificacionModule } from './notificacion/notificacion.module';
import { EscalaModule } from './escala/escala.module';
import { ReciboModule } from './recibo/recibo.module';
import { ConceptoModule } from './concepto/concepto.module';
import { NotaModule } from './nota/nota.module';
import { SeguimientoModule } from './seguimiento/seguimiento.module';



@Module({
  imports: [ClienteModule, LoggerModule, PagoModule, HijoModule, DepositosModule, NotificacionModule, EscalaModule, ReciboModule, ConceptoModule, NotaModule, SeguimientoModule],

})
export class AppModule {}
