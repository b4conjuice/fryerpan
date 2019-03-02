module.exports = (req, res) => {
  const end = JSON.stringify({
    success: true,
    message: `full-stack frypan`,
  });
  res.end(end);
};
