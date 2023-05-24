import express from 'express';
const app = express();
const port = 3000; // will change it
app.get('/', (req, res) => {
    res.json({ "message": "Hello world" });
});
app.listen(port, () => {
    console.log(`example app is running at http://localhost:${port}`);
});
