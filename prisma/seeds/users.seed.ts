import prisma from "../../lib/prisma";
import bcrypt from "bcryptjs";
import { UserStatus } from "../../generated/prisma/client"

export async function userSeeders() {

  const password1 = await bcrypt.hash("123456", 10)
  const password2 = await bcrypt.hash("123457", 10)

  const userData = [
    {
      name: "Super Admin",
      email: "superadmin@gmail.com",
      password: password1,
      role_id: 1,
      contract_number: 1740556525,
      status: UserStatus.ACTIVE,
    },
    {
      name: "Admin",
      email: "admin@gmail.com",
      password: password2,
      role_id: 2,
      contract_number: 1740556526,
      status: UserStatus.ACTIVE,
    },
  ]

  const users = await prisma.users.createMany({
    data: userData.map(user => ({
      ...user,
      created_at: new Date(),
      updated_at: new Date(),
    })),
    skipDuplicates: true,
  })

  console.log("Users seeded:", users)
}
