import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS coupons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL,
  percentage INTEGER
)`);

function createCouponRepository(newCoupon) {
  return new Promise((resolve, reject) => {
    const { code, percentage } = newCoupon;
    db.run(
      `INSERT INTO coupons (code, percentage) VALUES (?, ?)`,
      [code, percentage],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, ...newCoupon });
        }
      }
    );
  });
}

function findAllCouponsRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM coupons`, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

export default { createCouponRepository, findAllCouponsRepository };
