export default async function seedCategories(prisma) {
  const categories = [
    {
      name: {
        en: "country",
        ka: "ದೇಶ",
      },
      description: {
        en: "Category representing countries",
        ka: "ದೇಶಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವ ವರ್ಗ",
      },
      status: 1, // Replace with the desired status value
      parent_id: null,
    },
  ];

  const countries = [
    {
      name: { en: "United States", ka: "ಅಮೆರಿಕಾ" },
      status: 1,
      parent_id: 1,
    },
    { id: 3, name: { en: "Russia", ka: "ರಷ್ಯಾ" }, status: 1, parent_id: 1 },
    {
      name: { en: "United Kingdom", ka: "ಇಂಗ್ಲೆಂಡ್" },
      status: 1,
      parent_id: 1,
    },
    { id: 5, name: { en: "Germany", ka: "ಜರ್ಮನಿ" }, status: 1, parent_id: 1 },
    { id: 6, name: { en: "Japan", ka: "ಜಪಾನ್" }, status: 1, parent_id: 1 },
    { id: 7, name: { en: "Israel", ka: "ಇಸ್ರಾಯೇಲ್" }, status: 1, parent_id: 1 },
    {
      name: { en: "Saudi Arabia", ka: "ಸೌದಿ ಅರೇಬಿಯಾ" },
      status: 1,
      parent_id: 1,
    },
    {
      name: {
        en: "United Arab Emirates (UAE)",
        ka: "ಸಂಯುಕ್ತ ಅರಬ್ ಸಂಸ್ಥಾನಗಳು (ಯುಎಇ)",
      },
      status: 1,
      parent_id: 1,
    },
    {
      name: { en: "Australia", ka: "ಆಸ್ಟ್ರೇಲಿಯಾ" },
      status: 1,
      parent_id: 1,
    },
    { id: 11, name: { en: "Canada", ka: "ಕೆನಡಾ" }, status: 1, parent_id: 1 },
    {
      name: { en: "South Africa", ka: "ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ" },
      status: 1,
      parent_id: 1,
    },
    {
      name: { en: "Singapore", ka: "ಸಿಂಗಾಪುರ್" },
      status: 1,
      parent_id: 1,
    },
    {
      name: { en: "South Korea", ka: "ದಕ್ಷಿಣ ಕೊರಿಯಾ" },
      status: 1,
      parent_id: 1,
    },
    {
      name: { en: "Vietnam", ka: "ವಿಯೆಟ್ನಾಮ್" },
      status: 1,
      parent_id: 1,
    },
    {
      name: { en: "Indonesia", ka: "ಇಂಡೋನೇಶಿಯಾ" },
      status: 1,
      parent_id: 1,
    },
    {
      name: { en: "Malaysia", ka: "ಮಲೇಶಿಯಾ" },
      status: 1,
      parent_id: 1,
    },
    {
      name: { en: "Thailand", ka: "ಥೈಲ್ಯಾಂಡ್" },
      status: 1,
      parent_id: 1,
    },
    {
      name: { en: "Bangladesh", ka: "ಬಾಂಗ್ಲಾದೇಶ್" },
      status: 1,
      parent_id: 1,
    },
  ];

  const sports = [
    {
      name: { en: "Sports", ka: "ಕ್ರೀಡೆ" },
      description: {
        en: "Category representing various sports",
        ka: "ವಿವಿಧ ಕ್ರೀಡೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವ ವರ್ಗ",
      },
      status: 1,
      parent_id: null,
    },
    {
      name: { en: "Football", ka: "ಫುಟ್ಬಾಲ್" },
      status: 1,
      parent_id: 20,
    },
    {
      name: { en: "Basketball", ka: "ಬಾಸ್ಕೆಟ್ಬಾಲ್" },
      status: 1,
      parent_id: 20,
    },
    {
      name: { en: "Tennis", ka: "ಟೆನ್ನಿಸ್" },
      status: 1,
      parent_id: 20,
    },
    { name: { en: "Golf", ka: "ಗೋಲ್ಫ್" }, status: 1, parent_id: 20, id: 24 },
    {
      name: { en: "Cricket", ka: "ಕ್ರಿಕೆಟ್" },
      status: 1,
      parent_id: 20,
    },
    {
      name: { en: "Swimming", ka: "ಈಜಿಪ್ಟ್" },
      status: 1,
      parent_id: 20,
    },
    {
      name: { en: "Athletics", ka: "ಏಥ್ಲೆಟಿಕ್ಸ್" },
      status: 1,
      parent_id: 20,
    },
    {
      name: { en: "Volleyball", ka: "ವಾಲಿಬಾಲ್" },
      status: 1,
      parent_id: 20,
    },
    { name: { en: "Hockey", ka: "ಹಾಕಿ" }, status: 1, parent_id: 20, id: 29 },
    {
      name: { en: "Badminton", ka: "ಬ್ಯಾಡ್ಮಿಂಟನ್" },
      status: 1,
      parent_id: 20,
    },
    { name: { en: "Kabaddi", ka: "ಕಬಡ್ಡಿ" }, status: 1, parent_id: 20, id: 31 },
    {
      name: { en: "Field Hockey", ka: "ಫೀಲ್ಡ್ ಹಾಕಿ" },
      status: 1,
      parent_id: 20,
    },
    {
      name: { en: "Wrestling", ka: "ಬಾಲೆಯುದ್ದ" },
      status: 1,
      parent_id: 20,
    },
    { name: { en: "Chess", ka: "ಚದುರಂಗ" }, status: 1, parent_id: 20, id: 34 },
    {
      name: { en: "Boxing", ka: "ಬಾಕ್ಸಿಂಗ್" },
      status: 1,
      parent_id: 20,
    },
    {
      name: { en: "Table Tennis", ka: "ಟೇಬಲ್ ಟೆನಿಸ್" },
      status: 1,
      parent_id: 20,
    },
    {
      name: { en: "Shooting", ka: "ಶೂಟಿಂಗ್" },
      status: 1,
      parent_id: 20,
    },
  ];

  await upsirtCategories(categories);
  await upsirtCategories(countries);
  await upsirtCategories(sports);

  console.log("seeding Database");
  async function upsirtCategories(list) {
    for (let i in list) {
      const category = list[i];
      console.log(
        "creating category: " + category.name,

        await prisma.category.create({
          data: category,
        })
      );
    }
  }
}
