const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.query);
    next();
  } catch (e) {
    res.status(400).json({ error: e.errors });
  }
};

export { validate };
