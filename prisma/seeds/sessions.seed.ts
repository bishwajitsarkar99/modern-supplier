import { id } from "zod/v4/locales"
import prisma from "../../lib/prisma"

export async function sessionSeeders() {
  const users = await prisma.user.findMany()

  await prisma.session.createMany({
    data: users.map(user => ({
        id: user.id,
        token: crypto.randomUUID(),
        userId: user.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
        ipAddress: "127.0.0.1",
        userAgent: "Seeder Script",
    })),
    skipDuplicates: true,
  })

  console.log("Sessions seeded")
}
