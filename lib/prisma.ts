import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

const handleGlobalPrisma = (): PrismaClient => {
  if (!globalThis.prisma) {
    throw new Error('Prisma not initialized');
  }
  return globalThis.prisma;
};

export default {
  prisma,
  handleGlobalPrisma,
};