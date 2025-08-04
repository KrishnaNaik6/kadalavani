export default async function seedRoles(prisma) {
  console.log("seeding Database Roles");
  const roles = [
    {
      id: 1,
      name: "super_admin",
      description: "Super Admin role. ",
      status: 1,
    },
    { id: 2, name: "admin", description: "Admin role. ", status: 1 },
    { id: 3, name: "guest", description: "guest role. ", status: 1 },
    { id: 4, name: "reporter", description: "Reporter role. ", status: 1 },
    { id: 5, name: "editor", description: "Reporter role. ", status: 1 },
    { id: 6, name: "user", description: "Subscribed user role. ", status: 1 },
  ];
  for (let i in roles) {
    const role = roles[i];
    console.log(
      "creating role: ",

      await prisma.role.upsert({
        where: { id: role.id },
        update: {},
        create: role,
      })
    );
  }
}
