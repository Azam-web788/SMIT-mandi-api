const express = require("express");
const cors = require("cors");
const app = express();
const port = 7000;

app.use(cors());

const cowData = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0qavislFUSOF3Fqe3WYSyjN-Pzxlc9u9PQ&s",
    price: 150000,
    teeth: 2,
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuV645l--wVAFJOhTK4_ddIlTiga4yG8PY9SL7EQh1DUPGqRtzjawy9OAdqA8YtJtIk6o&usqp=CAU",
    price: 170000,
    teeth: 4,
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczZ-VybSMUBSoIZv-Rm1Yz8YRb0IGM0m_eGkpCUNgP0gvJJDF7Bc5dp6kATH8bmF2VvQ&usqp=CAU",
    price: 120000,
    teeth: 2,
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTMf9y3vgXRZx6551zUFp9GbXBZq3DKOlPsz6aE5YuMu9FRZ3v2OVxP_TYHOT4xGCROU&usqp=CAU",
    price: 160000,
    teeth: 2,
  },
  {
    id: 5,
    img: "https://i.ytimg.com/vi/_TDU3e4OIX8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDbEBtY1Cz0goix8XzWygi2PgQ5wQ",
    price: 180000,
    teeth: 4,
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqFechRHdxOFO_YggRU93HMsxZIC3JSGqtETc7zuiJOjEM0DA9ueHjhxXlC0FjFTmnYg&usqp=CAU",
    price: 190000,
    teeth: 2,
  },
  {
    id: 7,
    img: "https://i.ytimg.com/vi/bsjo48XDwq0/maxresdefault.jpg",
    price: 210000,
    teeth: 4,
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPEYB3-x9-TTl2XcnC31gnCEIMD5Nd2ag_G-toxXe5IEnYI6QOlZjy5jEj-KwQDFc0Lg&usqp=CAU",
    price: 200000,
    teeth: 2,
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlORQXJ7gQpbZpi5sfcnxTxaAsKh85NcoToq2qUO0zWMe8tYGXNpGf16VOIDNVifb_MzE&usqp=CAU",
    price: 140000,
    teeth: 4,
  },
];
app.get("/cows", (req, res) => {
  res.send({ Status: 200, data: cowData });
});

app.get("/", (req, res) => {
  res.send({ Status: 200, data: "Hello From Server!" });
});

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
});
