// import prisma from '../../lib/prisma'

// export async function branchesSeeder() {
    
//     const branchesData = [
//         {
//             branch_code: "M-2025-12-22-01", 
//             branch_type: "Main Branch",
//             branch_name: "Dhaka Branch", 
//             division_name: "Dhaka", 
//             district_name: "Dhaka", 
//             upazila_name: "Dhaka", 
//             city_name: "Dhaka", 
//             location: "Uttara, Dhaka", 
//             branch_category_id: 1, 
//             created_by: 1, 
//             updated_by: 1, 
//         },
//         {
//             branch_code: "M-2025-12-22-01", 
//             branch_type: "Corporate Branch", 
//             branch_name: "Natore Branch", 
//             division_name: "Rajshahi", 
//             district_name: "Natore", 
//             upazila_name: "Lalpur", 
//             city_name: "Natore", 
//             location: "Lalpur, Natore", 
//             branch_category_id: 2, 
//             created_by: 1, 
//             updated_by: 1, 
//         }
//     ]

//     const branches = await prisma.branch.createMany({
//         data: branchesData.map(branch => ({
//             ...branch,
//             created_at: new Date(),
//             updated_at: new Date()
//         })),
//         skipDuplicates: true,
//     })

//     console.log("Branch has created successfully", branches);
    
// }