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
          mileage: 95000,
          title: "salvage",
          transmission: "manual",
        },
        {
          vin: "1FTPX14524NB00101",
          make: "Ford",
          model: "F 150",
          mileage: 1000,
          title: "clean",
        },
        {
          vin: "1HGEM21991L005461",
          make: "Honda",
          model: "Civic",
          mileage: 25000,
          transmission: "automatic",
        },
      ]);
    });
};

//can const cars = [], THEN:

// exports.seed = function (knex) {
//   return knex('cars')
//   .truncate().then(() => {
//     return knex('cars').insert(cars)
//   })
// }

// exports.seed = async function (knex) {
//   await knex('cars').truncate()
//   await knex('cars').insert(cars)
// }
