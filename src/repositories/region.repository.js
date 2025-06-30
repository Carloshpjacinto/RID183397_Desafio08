import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS regions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country TEXT NOT NULL,
  state TEXT NOT NULL,
  category TEXT NOT NULL,
  rate FLOAT
)`);

function createRegionRepository(newRegion) {
  return new Promise((resolve, reject) => {
    const { country, state, category, rate } = newRegion;
    db.run(
      `INSERT INTO regions (country, state, category, rate) VALUES (?, ?, ?, ?)`,
      [country, state, category, rate],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, ...newRegion });
        }
      }
    );
  });
}

function findAllRegionsRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM regions`, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

export default { createRegionRepository, findAllRegionsRepository };
