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

function findCouponByIdRepository(couponId) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM coupons WHERE id = ?`, [couponId], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function findCouponByNameRepository(code) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM coupons WHERE code = ?`, [code], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function updateCouponRepository(updatedCoupon, couponId) {
  return new Promise((resolve, reject) => {
    const { code, percentage } = updatedCoupon;
    let query = "UPDATE coupons SET";
    const values = [];

    if (code !== undefined) {
      query += " code = ?,";
      values.push(code);
    }
    if (percentage !== undefined) {
      query += " percentage = ?,";
      values.push(percentage);
    }

    query = query.slice(0, -1);

    query += " WHERE id = ?";
    values.push(couponId);

    db.run(query, values, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: couponId, ...updatedCoupon });
      }
    });
  });
}

function deleteCouponRepository(couponId) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM coupons WHERE id = ?`, [couponId], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ message: "Coupon deleted successfully", couponId });
      }
    });
  });
}

export default {
  createCouponRepository,
  findCouponByIdRepository,
  findCouponByNameRepository,
  updateCouponRepository,
  deleteCouponRepository,
};
