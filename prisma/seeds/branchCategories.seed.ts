import prisma from '../../lib/prisma'

export async function branchCtegoriesSeeder() {

    const branchCategoriesData = [
        {
            branch_category_name: "Main Branch",
            created_by: 1,
            updated_by: 1,
        },
        {
            branch_category_name: "Corporate Branch",
            created_by: 1,
            updated_by: 1,
        }
    ]

    const branchCategories = await prisma.branch_categories.createMany({
        data: branchCategoriesData.map(branchCategory => ({
            ...branchCategory,
            created_at: new Date(),
            updated_at: new Date()
        })),
        skipDuplicates: true,
    })
    console.log("branch category has created", branchCategories);
}