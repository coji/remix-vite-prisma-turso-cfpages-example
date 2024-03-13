import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'

export const createTursoPrismaClient = (url: string, authToken: string) => {
  const libsql = createClient({
    url,
    authToken,
  })
  const adapter = new PrismaLibSQL(libsql)
  const prisma = new PrismaClient({ adapter })
  return prisma
}
