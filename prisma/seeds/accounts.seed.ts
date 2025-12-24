import prisma from "../../lib/prisma"
import bcrypt from "bcryptjs"
import { randomUUID } from "crypto"

export async function accountSeeders() {
  const users = await prisma.user.findMany()
  const password = await bcrypt.hash("123456", 10)

  await prisma.account.createMany({
    data: users.map(user => ({
      id: randomUUID(),
      providerId: "email-password", // MUST be exactly this
      accountId: user.email,        // must match login email
      userId: user.id,
      password,
    })),
    skipDuplicates: true,
  })

  console.log("Accounts seeded (Better-Auth compatible)")
}
