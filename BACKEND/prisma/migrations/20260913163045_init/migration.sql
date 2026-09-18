-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "categoria" TEXT,
    "anoPublicado" INTEGER,
    "quantidade" INTEGER NOT NULL,
    "quantidadeDisponivel" INTEGER NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emprestimo" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "livroId" INTEGER NOT NULL,

    CONSTRAINT "Emprestimo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_matricula_key" ON "Usuario"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Livro_isbn_key" ON "Livro"("isbn");

-- AddForeignKey
ALTER TABLE "Emprestimo" ADD CONSTRAINT "Emprestimo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emprestimo" ADD CONSTRAINT "Emprestimo_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
