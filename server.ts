const express = require('express');
const http = require('http');
const axios = require('axios');

const app = express();

app.get('/api/getRecipe/:recipeId', async (req, res) => {
  const { recipeId } = req.params;

  try {
    const result = await axios.get(
      `http://211.237.50.150:7080/openapi/f272a304bf6f5c342cd55e3630601b0e1dddd251d5d5f35823136edab357a410/json/Grid_20150827000000000227_1/1/1000?RECIPE_ID=${recipeId}`,
    );

    res.send(result.data);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
});

http.createServer(app).listen(4000, () => {
  console.log('Server is running');
});
