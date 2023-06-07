const express = require("express");
const app = express();
const port = 3000;

// Cấu hình định dạng dữ liệu truyền nhận là JSON
app.use(express.json());

// Các dữ liệu giả
const Sdata = [
  {
    id: 1,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-1.png",
  },
  {
    id: 2,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-2.png",
  },
  {
    id: 3,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-3.png",
  },
  {
    id: 4,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-4.png",
  },
];

const Ndata = [
  {
    cover: "./images/arrivals/arrivals1.png",
    name: "Sunglass",
    price: "150",
  },
  {
    cover: "./images/arrivals/arrivals2.png",
    name: "Makeup",
    price: "250",
  },
  {
    cover: "./images/arrivals/arrivals4.png",
    name: "Lipstick",
    price: "15",
  },
  {
    cover: "./images/arrivals/arrivals4.png",
    name: "Lipstick",
    price: "15",
  },
  {
    cover: "./images/arrivals/arrivals5.png",
    name: "Green Plant",
    price: "10",
  },
  {
    cover: "./images/arrivals/arrivals6.png",
    name: "Bonsai tree",
    price: "400",
  },
];

// Route GET "/slide-data" để lấy dữ liệu slide
app.get("/slide-data", (req, res) => {
  res.json(Sdata);
});

// Route GET "/new-arrivals" để lấy dữ liệu new arrivals
app.get("/new-arrivals", (req, res) => {
  res.json(Ndata);
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
