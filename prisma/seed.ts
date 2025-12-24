// index.ts
import prisma  from '../lib/prisma';
import { userSeeders } from './seeds/users.seed';
import { accountSeeders } from './seeds/accounts.seed';
import { sessionSeeders } from './seeds/sessions.seed';
import { verificationSeeders } from './seeds/verifications.seed';


async function main() {

  await userSeeders();
  await accountSeeders();
  await sessionSeeders();
  await verificationSeeders();

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });