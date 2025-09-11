const initialization = require("~/initialization/initialization");

const serverSetup = async (app) => {
  initialization(app);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
};

module.exports = serverSetup;
