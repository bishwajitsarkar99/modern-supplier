import prisma from "../../lib/prisma";

export async function roleSeeders(){
    const roleData = [
        { role_name: "Super Admin", status: 0 },
        { role_name: "Admin", status: 0 },
        { role_name: "Sub Admin", status: 0 },
        { role_name: "User", status: 0 },
        { role_name: "Viewer", status: 0 },
    ]
      
    const roles = await prisma.roles.createMany({
        data: roleData.map(role => ({
            ...role,
            created_at: new Date(),
            updated_at: new Date(),
        })),
        skipDuplicates: true,
    })
    
    console.log("Inserted roles:", roles)
}