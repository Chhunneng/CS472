import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function getNumbers(req) {
  let a = req.params.a || req.query.a || req.body.a;
  let b = req.params.b || req.query.b || req.body.b;

  a = parseFloat(a);
  b = parseFloat(b);

  return { a, b };
}

app.get(["/addition/:a/:b", "/addition"], (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a + b });
});
app.post("/addition", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a + b });
});

app.get(["/subtraction/:a/:b", "/subtraction"], (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a - b });
});

app.post("/subtraction", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a - b });
});

app.get(["/multiplication/:a/:b", "/multiplication"], (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a * b });
});

app.post("/multiplication", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a * b });
});

app.get(["/division/:a/:b", "/division"], (req, res) => {
  const { a, b } = getNumbers(req);
  if (b === 0) return res.status(400).json({ error: "Division by zero" });
  res.json({ results: a / b });
});

app.post("/division", (req, res) => {
  const { a, b } = getNumbers(req);
  if (b === 0) return res.status(400).json({ error: "Division by zero" });
  res.json({ results: a / b });
});

app.get(["/modulus/:a/:b", "/modulus"], (req, res) => {
  const { a, b } = getNumbers(req);
  if (b === 0) return res.status(400).json({ error: "Division by zero" });
  res.json({ results: a % b });
});

app.post("/modulus", (req, res) => {
  const { a, b } = getNumbers(req);
  if (b === 0) return res.status(400).json({ error: "Division by zero" });
  res.json({ results: a % b });
});

app.listen(port, () => {
  console.log(`Calculator API is running at http://localhost:${port}`);
});
