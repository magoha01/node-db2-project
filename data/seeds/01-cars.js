// STRETCH

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "KL5JD56Z85K139936",
          make: "Suzuki",
          model: "Forenza",
          mileage: 1000,
          title: "",
          transmission: "",
        },
        {
          vin: "1FTPX14524NB00101",
          make: "Ford",
          model: "F 150",
          mileage: 1000,
          title: " John Smith",
          transmission: "manual",
        },
        {
          vin: "1HGEM21991L005461",
          make: "Honda",
          model: "Civic",
          mileage: 1000,
          title: "Jane Doe",
          transmission: "automatic",
        },
      ]);
    });
};