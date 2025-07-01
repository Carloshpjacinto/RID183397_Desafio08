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

function findRegionByIdRepository(regionId) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM regions WHERE id = ?`, [regionId], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function findRegionByCscRepository(country, state, category) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM regions WHERE country = ? AND state = ? AND category = ?`,
      [country, state, category],
      (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      }
    );
  });
}

function findRegionByStateRepository(state) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM regions WHERE state = ?`, [state], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function findCategoryRepository(category) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM regions WHERE category = ?`,
      [category],
      (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      }
    );
  });
}

function updateRegionRepository(updatedRegion, regionId) {
  return new Promise((resolve, reject) => {
    const { country, state, category, rate } = updatedRegion;
    let query = "UPDATE regions SET";
    const values = [];

    if (country !== undefined) {
      query += " country = ?,";
      values.push(country);
    }
    if (state !== undefined) {
      query += " state = ?,";
      values.push(state);
    }

    if (category !== undefined) {
      query += " category = ?,";
      values.push(category);
    }

    if (rate !== undefined) {
      query += " rate = ?,";
      values.push(rate);
    }

    query = query.slice(0, -1);

    query += " WHERE id = ?";
    values.push(regionId);

    db.run(query, values, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: regionId, ...updatedRegion });
      }
    });
  });
}

function deleteRegionRepository(regionId) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM regions WHERE id = ?`, [regionId], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ message: "Region deleted successfully", regionId });
      }
    });
  });
}

export default {
  createRegionRepository,
  findAllRegionsRepository,
  findRegionByIdRepository,
  findRegionByCscRepository,
  findRegionByStateRepository,
  findCategoryRepository,
  updateRegionRepository,
  deleteRegionRepository,
};
