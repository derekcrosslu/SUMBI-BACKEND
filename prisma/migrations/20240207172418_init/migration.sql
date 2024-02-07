-- CreateTable
CREATE TABLE "Cliente" (
    "codigoCliente" SERIAL NOT NULL,
    "nombresMadre" TEXT NOT NULL,
    "apellidoMaternoMadre" TEXT NOT NULL,
    "apellidoPaternoMadre" TEXT NOT NULL,
    "tipoIdentificacionMadre" TEXT NOT NULL,
    "nroIdentificacionMadre" TEXT NOT NULL,
    "direccionMadre" TEXT NOT NULL,
    "correoMadre" TEXT NOT NULL,
    "telefonoMadre" TEXT NOT NULL,
    "nombresPadre" TEXT NOT NULL,
    "apellidoPaternoPadre" TEXT NOT NULL,
    "apellidoMaternoPadre" TEXT NOT NULL,
    "tipoIdentificacionPadre" TEXT NOT NULL,
    "nroIdentificacionPadre" TEXT NOT NULL,
    "direccionPadre" TEXT NOT NULL,
    "correoPadre" TEXT NOT NULL,
    "telefonoPadre" TEXT NOT NULL,
    "responsableDelPago" TEXT NOT NULL,
    "nombreDelBanco" TEXT NOT NULL,
    "tipoDeCuenta" TEXT NOT NULL,
    "numeroCta" TEXT NOT NULL,
    "ingresadoAlSistemaContable" BOOLEAN NOT NULL,
    "fechaDePagoPreferencial" TIMESTAMP(3),
    "credito" BOOLEAN NOT NULL,
    "alDiaConLosPagos" BOOLEAN NOT NULL,
    "deudaTotal" DOUBLE PRECISION NOT NULL,
    "fechaDeBloqueo" TIMESTAMP(3),
    "nota" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("codigoCliente")
);

-- CreateTable
CREATE TABLE "Hijo" (
    "codigoHijo" SERIAL NOT NULL,
    "codigoEscala" INTEGER,
    "codigoCliente" INTEGER NOT NULL,
    "nombresHijo" TEXT NOT NULL,
    "apellidoPaternoHijo" TEXT NOT NULL,
    "apellidoMaternoHijo" TEXT NOT NULL,
    "tipoDeDocumento" TEXT NOT NULL,
    "nroDeDocumento" TEXT NOT NULL,
    "fechaDeMatricula" TIMESTAMP(3) NOT NULL,
    "salon" TEXT NOT NULL,
    "nota" TEXT,

    CONSTRAINT "Hijo_pkey" PRIMARY KEY ("codigoHijo")
);

-- CreateTable
CREATE TABLE "Pago" (
    "codigoPago" SERIAL NOT NULL,
    "codigoCliente" INTEGER NOT NULL,
    "codigoHijo" INTEGER,
    "rucEmpresa" TEXT,
    "codigoClase" INTEGER,
    "moneda" TEXT NOT NULL,
    "fechaDeProceso" TIMESTAMP(3) NOT NULL,
    "cuentaRecaudadora" TEXT,
    "referencias" TEXT,
    "fechaDeEmision" TIMESTAMP(3) NOT NULL,
    "fechaDeVencimiento" TIMESTAMP(3) NOT NULL,
    "concepto" TEXT NOT NULL,
    "valorMaximo" DOUBLE PRECISION,
    "valorMinimo" DOUBLE PRECISION,
    "descuento" DOUBLE PRECISION,
    "importeDelPago" DOUBLE PRECISION NOT NULL,
    "montoDepositado" DOUBLE PRECISION,
    "pagoConfirmado" BOOLEAN NOT NULL,
    "reciboEmitido" BOOLEAN NOT NULL,
    "nota" TEXT,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("codigoPago")
);

-- CreateTable
CREATE TABLE "Deposito" (
    "codigoDeposito" SERIAL NOT NULL,
    "codigoNotificacion" INTEGER,
    "codigoPago" INTEGER NOT NULL,
    "codigoCliente" INTEGER NOT NULL,
    "codigoHijo" INTEGER,
    "importeDelOrigen" DOUBLE PRECISION NOT NULL,
    "importeDelDeposito" DOUBLE PRECISION NOT NULL,
    "importeMora" DOUBLE PRECISION,
    "oficinaDePago" TEXT,
    "tipoValor" TEXT,
    "canalDeEntrada" TEXT,
    "imagenDelVoucher" TEXT,
    "depositoValidado" BOOLEAN NOT NULL,
    "nota" TEXT,

    CONSTRAINT "Deposito_pkey" PRIMARY KEY ("codigoDeposito")
);

-- CreateTable
CREATE TABLE "Recibo" (
    "codigoRecibo" SERIAL NOT NULL,
    "codigoCliente" INTEGER NOT NULL,
    "codigoPago" INTEGER NOT NULL,
    "codigoNotificacion" INTEGER,
    "fechaDeVencimiento" TIMESTAMP(3) NOT NULL,
    "fechaDeEmision" TIMESTAMP(3) NOT NULL,
    "nombreDelCliente" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "tipoDeMoneda" TEXT NOT NULL,
    "observacion" TEXT,
    "cantidad" INTEGER NOT NULL,
    "unidadDeMedida" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "valorUnitario" DOUBLE PRECISION NOT NULL,
    "descuento" DOUBLE PRECISION,
    "importeDeVenta" DOUBLE PRECISION NOT NULL,
    "icbper" DOUBLE PRECISION,
    "opGravada" DOUBLE PRECISION,
    "opExonerada" DOUBLE PRECISION,
    "opInafecta" DOUBLE PRECISION,
    "isc" DOUBLE PRECISION,
    "igv" DOUBLE PRECISION,
    "otrosCargos" DOUBLE PRECISION,
    "otrosTributos" DOUBLE PRECISION,
    "montoDeRedondeo" DOUBLE PRECISION,
    "importeTotal" DOUBLE PRECISION NOT NULL,
    "nota" TEXT,

    CONSTRAINT "Recibo_pkey" PRIMARY KEY ("codigoRecibo")
);

-- CreateTable
CREATE TABLE "Notificacion" (
    "codigoNotificacion" SERIAL NOT NULL,
    "codigoCliente" INTEGER NOT NULL,
    "codigoPago" INTEGER,
    "fechaDeEmision" TIMESTAMP(3) NOT NULL,
    "emisorNotificado" TEXT NOT NULL,
    "fechaDeRecepcion" TIMESTAMP(3),
    "fechaDeRespuesta" TIMESTAMP(3),
    "concepto" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "notaInterna" TEXT,

    CONSTRAINT "Notificacion_pkey" PRIMARY KEY ("codigoNotificacion")
);

-- CreateTable
CREATE TABLE "Seguimiento" (
    "codigoSeguimiento" SERIAL NOT NULL,
    "codigoNotificacion" INTEGER NOT NULL,
    "codigoCliente" INTEGER NOT NULL,
    "codigoPago" INTEGER,
    "fechaDeEmision" TIMESTAMP(3) NOT NULL,
    "emisorNotificado" TEXT NOT NULL,
    "fechaDeRecepcion" TIMESTAMP(3),
    "fechaDeRespuesta" TIMESTAMP(3),
    "concepto" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "notaInterna" TEXT,

    CONSTRAINT "Seguimiento_pkey" PRIMARY KEY ("codigoSeguimiento")
);

-- CreateTable
CREATE TABLE "Concepto" (
    "codigoConcepto" SERIAL NOT NULL,
    "codigoCliente" INTEGER NOT NULL,
    "codigoPago" INTEGER,
    "codigoNotificacion" INTEGER,
    "avisoDePago" TEXT,
    "vencimientoDePago" TIMESTAMP(3),
    "recordatorio1" TEXT,
    "recordatorio2" TEXT,
    "recordatorio3" TEXT,
    "avisoFinal" TEXT,
    "recibo" TEXT,
    "nota" TEXT,

    CONSTRAINT "Concepto_pkey" PRIMARY KEY ("codigoConcepto")
);

-- CreateTable
CREATE TABLE "Escala" (
    "codigoEscala" SERIAL NOT NULL,
    "codigoCliente" INTEGER NOT NULL,
    "A" TEXT,
    "B" TEXT,
    "C" TEXT,
    "D" TEXT,
    "exonerado" BOOLEAN NOT NULL,
    "nota" TEXT,

    CONSTRAINT "Escala_pkey" PRIMARY KEY ("codigoEscala")
);

-- CreateTable
CREATE TABLE "Nota" (
    "codigoNota" SERIAL NOT NULL,
    "codigoCliente" INTEGER,
    "codigoHijo" INTEGER,
    "codigoPago" INTEGER,
    "codigoDeposito" INTEGER,
    "codigoRecibo" INTEGER,
    "codigoNotificacion" INTEGER,
    "codigoSeguimiento" INTEGER,
    "codigoConcepto" INTEGER,
    "codigoEscala" INTEGER,
    "texto" TEXT NOT NULL,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("codigoNota")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recibo_codigoPago_key" ON "Recibo"("codigoPago");

-- AddForeignKey
ALTER TABLE "Hijo" ADD CONSTRAINT "Hijo_codigoCliente_fkey" FOREIGN KEY ("codigoCliente") REFERENCES "Cliente"("codigoCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_codigoCliente_fkey" FOREIGN KEY ("codigoCliente") REFERENCES "Cliente"("codigoCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_codigoHijo_fkey" FOREIGN KEY ("codigoHijo") REFERENCES "Hijo"("codigoHijo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposito" ADD CONSTRAINT "Deposito_codigoPago_fkey" FOREIGN KEY ("codigoPago") REFERENCES "Pago"("codigoPago") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recibo" ADD CONSTRAINT "Recibo_codigoPago_fkey" FOREIGN KEY ("codigoPago") REFERENCES "Pago"("codigoPago") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacion" ADD CONSTRAINT "Notificacion_codigoCliente_fkey" FOREIGN KEY ("codigoCliente") REFERENCES "Cliente"("codigoCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacion" ADD CONSTRAINT "Notificacion_codigoPago_fkey" FOREIGN KEY ("codigoPago") REFERENCES "Pago"("codigoPago") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguimiento" ADD CONSTRAINT "Seguimiento_codigoNotificacion_fkey" FOREIGN KEY ("codigoNotificacion") REFERENCES "Notificacion"("codigoNotificacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concepto" ADD CONSTRAINT "Concepto_codigoPago_fkey" FOREIGN KEY ("codigoPago") REFERENCES "Pago"("codigoPago") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoCliente_fkey" FOREIGN KEY ("codigoCliente") REFERENCES "Cliente"("codigoCliente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoHijo_fkey" FOREIGN KEY ("codigoHijo") REFERENCES "Hijo"("codigoHijo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoPago_fkey" FOREIGN KEY ("codigoPago") REFERENCES "Pago"("codigoPago") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoDeposito_fkey" FOREIGN KEY ("codigoDeposito") REFERENCES "Deposito"("codigoDeposito") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoRecibo_fkey" FOREIGN KEY ("codigoRecibo") REFERENCES "Recibo"("codigoRecibo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoNotificacion_fkey" FOREIGN KEY ("codigoNotificacion") REFERENCES "Notificacion"("codigoNotificacion") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoSeguimiento_fkey" FOREIGN KEY ("codigoSeguimiento") REFERENCES "Seguimiento"("codigoSeguimiento") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoConcepto_fkey" FOREIGN KEY ("codigoConcepto") REFERENCES "Concepto"("codigoConcepto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoEscala_fkey" FOREIGN KEY ("codigoEscala") REFERENCES "Escala"("codigoEscala") ON DELETE SET NULL ON UPDATE CASCADE;
