import prisma from "../../lib/prisma"

export async function verificationSeeders() {
  await prisma.verification.createMany({
    data: [
      {
        id: "1",
        identifier: "bishwajitsarkar99@gmail.com",
        value: "123456",
        expiresAt: new Date(Date.now() + 1000 * 60 * 10),
      },
      {
        id: "2",
        identifier: "admin@gmail.com",
        value: "654321",
        expiresAt: new Date(Date.now() + 1000 * 60 * 10),
      },
    ],
    skipDuplicates: true,
  })

  console.log("Verification seeded")
}
