/*
  Warnings:

  - You are about to drop the `Hijo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hijo" DROP CONSTRAINT "Hijo_codigoCliente_fkey";

-- DropForeignKey
ALTER TABLE "Nota" DROP CONSTRAINT "Nota_codigoHijo_fkey";

-- DropForeignKey
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_codigoHijo_fkey";

-- DropTable
DROP TABLE "Hijo";

-- CreateTable
CREATE TABLE "Hijos" (
    "codigoHijo" SERIAL NOT NULL,
    "codigoEscala" INTEGER,
    "codigoCliente" INTEGER NOT NULL,
    "nombresHijo" TEXT,
    "apellidoPaternoHijo" TEXT,
    "apellidoMaternoHijo" TEXT,
    "tipoDeDocumento" TEXT,
    "nroDeDocumento" TEXT,
    "fechaDeMatricula" TIMESTAMP(3),
    "salon" TEXT NOT NULL,
    "nota" TEXT,

    CONSTRAINT "Hijos_pkey" PRIMARY KEY ("codigoHijo")
);

-- AddForeignKey
ALTER TABLE "Hijos" ADD CONSTRAINT "Hijos_codigoCliente_fkey" FOREIGN KEY ("codigoCliente") REFERENCES "Cliente"("codigoCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_codigoHijo_fkey" FOREIGN KEY ("codigoHijo") REFERENCES "Hijos"("codigoHijo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_codigoHijo_fkey" FOREIGN KEY ("codigoHijo") REFERENCES "Hijos"("codigoHijo") ON DELETE SET NULL ON UPDATE CASCADE;
