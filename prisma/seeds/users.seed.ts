import prisma from "../../lib/prisma"
import { randomUUID } from "crypto"

export async function userSeeders() {
  const users = await prisma.user.createMany({
    data: [
      {
        id: randomUUID(),
        name: "Super Admin",
        email: "bishwajitsarkar99@gmail.com",
        emailVerified: true,
        contractNumber: "1740003227",
        role: "SUPER ADMIN",
        status: 0,
      },
      {
        id: randomUUID(),
        name: "Admin",
        email: "admin@gmail.com",
        emailVerified: true,
        contractNumber: "1740556526",
        role: "ADMIN",
        status: 0,
      },
    ],
    skipDuplicates: true,
  })

  console.log("Users seeded:", users)
}
