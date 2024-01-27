const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

// POST request endpoint
app.post("/ask", async (req, res) => {
  // getting prompt question from request
  const prompt = req.body.prompt;

  try {
    if (prompt == null) {
      throw new Error("Uh oh, no prompt was provided");
    }

    // return the result
    return res.status(200).json({
      success: true,
      message: prompt,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));