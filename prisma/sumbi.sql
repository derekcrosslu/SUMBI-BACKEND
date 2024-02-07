CREATE TABLE Cliente (
  codigoCliente SERIAL PRIMARY KEY,
  nombresMadre VARCHAR NOT NULL,
  apellidoMaternoMadre VARCHAR NOT NULL,
  apellidoPaternoMadre VARCHAR NOT NULL,
  tipoIdentificacionMadre VARCHAR NOT NULL,
  nroIdentificacionMadre VARCHAR NOT NULL,
  direccionMadre VARCHAR NOT NULL,
  correoMadre VARCHAR NOT NULL,
  telefonoMadre VARCHAR NOT NULL,
  nombresPadre VARCHAR NOT NULL,
  apellidoPaternoPadre VARCHAR NOT NULL,
  apellidoMaternoPadre VARCHAR NOT NULL,
  tipoIdentificacionPadre VARCHAR NOT NULL,
  nroIdentificacionPadre VARCHAR NOT NULL,
  direccionPadre VARCHAR NOT NULL,
  correoPadre VARCHAR NOT NULL,
  telefonoPadre VARCHAR NOT NULL,
  responsableDelPago VARCHAR NOT NULL,
  nombreDelBanco VARCHAR NOT NULL,
  tipoDeCuenta VARCHAR NOT NULL,
  numeroCta VARCHAR NOT NULL,
  ingresadoAlSistemaContable BOOLEAN NOT NULL,
  fechaDePagoPreferencial TIMESTAMP NULL,
  credito BOOLEAN NOT NULL,
  alDiaConLosPagos BOOLEAN NOT NULL,
  deudaTotal FLOAT NOT NULL,
  fechaDeBloqueo TIMESTAMP NULL,
  nota VARCHAR NULL
);

CREATE TABLE Hijo (
  codigoHijo SERIAL PRIMARY KEY,
  codigoEscala INT NULL,
  codigoCliente INT NOT NULL REFERENCES Cliente(codigoCliente),
  nombresHijo VARCHAR NOT NULL,
  apellidoPaternoHijo VARCHAR NOT NULL,
  apellidoMaternoHijo VARCHAR NOT NULL,
  tipoDeDocumento VARCHAR NOT NULL,
  nroDeDocumento VARCHAR NOT NULL,
  fechaDeMatricula TIMESTAMP NOT NULL,
  salon VARCHAR NOT NULL,
  nota VARCHAR NULL
);


CREATE TABLE Pago (
  codigoPago SERIAL PRIMARY KEY,
  codigoCliente INT NOT NULL REFERENCES Cliente(codigoCliente),
  codigoHijo INT NULL REFERENCES Hijo(codigoHijo),
  rucEmpresa VARCHAR NULL,
  codigoClase INT NULL,
  moneda VARCHAR NOT NULL,
  fechaDeProceso TIMESTAMP NOT NULL,
  cuentaRecaudadora VARCHAR NULL,
  referencias VARCHAR NULL,
  fechaDeEmision TIMESTAMP NOT NULL,
  fechaDeVencimiento TIMESTAMP NOT NULL,
  concepto VARCHAR NOT NULL,
  valorMaximo FLOAT NULL,
  valorMinimo FLOAT NULL,
  descuento FLOAT NULL,
  importeDelPago FLOAT NOT NULL,
  montoDepositado FLOAT NULL,
  pagoConfirmado BOOLEAN NOT NULL,
  reciboEmitido BOOLEAN NOT NULL,
  nota VARCHAR NULL
);



CREATE TABLE Deposito (
  codigoDeposito SERIAL PRIMARY KEY,
  codigoNotificacion INT NULL,
  codigoPago INT NOT NULL REFERENCES Pago(codigoPago),
  codigoCliente INT NOT NULL REFERENCES Cliente(codigoCliente),
  codigoHijo INT NULL,
  importeDelOrigen FLOAT NOT NULL,
  importeDelDeposito FLOAT NOT NULL,
  importeMora FLOAT NULL,
  oficinaDePago VARCHAR NULL,
  tipoValor VARCHAR NULL,
  canalDeEntrada VARCHAR NULL,
  imagenDelVoucher VARCHAR NULL,
  depositoValidado BOOLEAN NOT NULL,
  nota VARCHAR NULL
);

CREATE TABLE Recibo (
  codigoRecibo SERIAL PRIMARY KEY,
  codigoCliente INT NOT NULL REFERENCES Cliente(codigoCliente),
  codigoPago INT UNIQUE NOT NULL REFERENCES Pago(codigoPago),
  codigoNotificacion INT NULL,
  fechaDeVencimiento TIMESTAMP NOT NULL,
  fechaDeEmision TIMESTAMP NOT NULL,
  nombreDelCliente VARCHAR NOT NULL,
  dni VARCHAR NOT NULL,
  tipoDeMoneda VARCHAR NOT NULL,
  observacion VARCHAR NULL,
  cantidad INT NOT NULL,
  unidadDeMedida VARCHAR NOT NULL,
  descripcion VARCHAR NOT NULL,
  valorUnitario FLOAT NOT NULL,
  descuento FLOAT NULL,
  importeDeVenta FLOAT NOT NULL,
  icbper FLOAT NULL,
  opGravada FLOAT NULL,
  opExonerada FLOAT NULL,
  opInafecta FLOAT NULL,
  isc FLOAT NULL,
  igv FLOAT NULL,
  otrosCargos FLOAT NULL,
  otrosTributos FLOAT NULL,
  montoDeRedondeo FLOAT NULL,
  importeTotal FLOAT NOT NULL,
  nota VARCHAR NULL
);



CREATE TABLE Notificacion (
  codigoNotificacion SERIAL PRIMARY KEY,
  codigoCliente INT NOT NULL REFERENCES Cliente(codigoCliente),
  codigoPago INT NULL REFERENCES Pago(codigoPago),
  fechaDeEmision TIMESTAMP NOT NULL,
  emisorNotificado VARCHAR NOT NULL,
  fechaDeRecepcion TIMESTAMP NULL,
  fechaDeRespuesta TIMESTAMP NULL,
  concepto VARCHAR NOT NULL,
  mensaje VARCHAR NOT NULL,
  notaInterna VARCHAR NULL
);


CREATE TABLE Seguimiento (
  codigoSeguimiento SERIAL PRIMARY KEY,
  codigoNotificacion INT NOT NULL REFERENCES Notificacion(codigoNotificacion),
  codigoCliente INT NOT NULL REFERENCES Cliente(codigoCliente),
  codigoPago INT NULL REFERENCES Pago(codigoPago),
  fechaDeEmision TIMESTAMP NOT NULL,
  emisorNotificado VARCHAR NOT NULL,
  fechaDeRecepcion TIMESTAMP NULL,
  fechaDeRespuesta TIMESTAMP NULL,
  concepto VARCHAR NOT NULL,
  mensaje VARCHAR NOT NULL,
  notaInterna VARCHAR NULL
);

CREATE TABLE Concepto (
  codigoConcepto SERIAL PRIMARY KEY,
  codigoCliente INT NOT NULL REFERENCES Cliente(codigoCliente),
  codigoPago INT NULL REFERENCES Pago(codigoPago),
  codigoNotificacion INT NULL,
  avisoDePago VARCHAR NULL,
  vencimientoDePago TIMESTAMP NULL,
  recordatorio1 VARCHAR NULL,
  recordatorio2 VARCHAR NULL,
  recordatorio3 VARCHAR NULL,
  avisoFinal VARCHAR NULL,
  recibo VARCHAR NULL,
  nota VARCHAR NULL
);

CREATE TABLE Escala (
  codigoEscala SERIAL PRIMARY KEY,
  codigoCliente INT NOT NULL REFERENCES Cliente(codigoCliente),
  A VARCHAR NULL,
  B VARCHAR NULL,
  C VARCHAR NULL,
  D VARCHAR NULL,
  exonerado BOOLEAN NOT NULL,
  nota VARCHAR NULL
);


CREATE TABLE Nota (
  codigoNota SERIAL PRIMARY KEY,
  codigoCliente INT NULL REFERENCES Cliente(codigoCliente),
  codigoHijo INT NULL REFERENCES Hijo(codigoHijo),
  codigoPago INT NULL REFERENCES Pago(codigoPago),
  codigoDeposito INT NULL REFERENCES Deposito(codigoDeposito),
  codigoRecibo INT NULL REFERENCES Recibo(codigoRecibo),
  codigoNotificacion INT NULL REFERENCES Notificacion(codigoNotificacion),
  codigoSeguimiento INT NULL REFERENCES Seguimiento(codigoSeguimiento),
  codigoConcepto INT NULL REFERENCES Concepto(codigoConcepto),
  codigoEscala INT NULL REFERENCES Escala(codigoEscala),
  texto VARCHAR NOT NULL
);




