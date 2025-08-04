export default async function seedUsers(prisma) {
  const users = [
    {
      id: 1,
      email: "super_admin@app.com",
      phone: "000000000",
      first_name: "Super_admin",
      num_login: 0,
      num_logout: 0,
      status: 1,
    },
    {
      id: 2,
      email: "admin@app.com",
      phone: "000000001",
      first_name: "admin",
      num_login: 0,
      num_logout: 0,
      status: 1,
    },
  ];
  for (let i in users) {
    const user = users[i];
    console.log(
      "creating User: " + user.email,

      await prisma.user.upsert({
        where: { id: user.id },
        update: {},
        create: user,
      })
    );
  }
  console.log("seeding Database");
}
