// index.ts
import prisma  from '../lib/prisma';
import {roleSeeders} from './seeds/roles.seed'
import { userSeeders } from './seeds/users.seed';
import {branchCtegoriesSeeder} from './seeds/branchCategories.seed'
import {branchesSeeder} from './seeds/branches.seed'

async function main() {

  await roleSeeders();
  await userSeeders();
  await branchCtegoriesSeeder()
  await branchesSeeder()
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