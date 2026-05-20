// Configuración centralizada de Prisma para Prisma 7
// Este archivo exporta una instancia única del cliente de Prisma

require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
//const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

// Crear adapter para Prisma con la URL de SQLite
//const adapter = new PrismaBetterSqlite3({
//  url: process.env.DATABASE_URL || 'file:./dev.db'
//});

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// Crear instancia única de PrismaClient con el adapter
const prisma = new PrismaClient({ adapter });

module.exports = prisma;
