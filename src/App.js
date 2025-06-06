import { useState } from "react";
import "./style.css";
export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questionArray = [
  {
    id: 1001,
    question: "Toni Kroos là ai?",
    answer:
      "Toni Kroos là một cựu cầu thủ bóng đá chuyên nghiệp người Đức, đã từng chơi cho Real Madrid và đội tuyển quốc gia Đức.",
    pic: "https://i.dailymail.co.uk/1s/2024/05/26/00/85341651-0-image-a-145_1716678072702.jpg",
  },
  {
    id: 1002,
    question: "Toni Kroos được sinh ra ở đâu?",
    answer: "Greifswald, Đông Đức",
    pic: "https://marina-yachtzentrum.de/wp-content/uploads/2024/08/JS190605_0034_a_mc-1024x682.jpg",
  },
  {
    id: 1003,
    question: "Toni Kroos mặc áo số mấy ở Real Madrid?",
    answer: "Số 8",
    pic: "https://realmadridconfidencial.com/filesedc/uploads/image/post/kroos-capitan-vinicius-ko_1600_1067.webp",
  },
  {
    id: 1004,
    question: "Biệt danh của Toni Kroos là gì?",
    answer: "Tám Nghiệp",
    pic: "https://www.realtotal.de/wp-content/uploads/2024/02/toni-kroos-wut-ausraster.jpg",
  },
  {
    id: 1005,
    question: "Toni Kroos giành được bao nhhiêu danh hiệu Champions League?",
    answer: "6 cúp C1 hơn Barca 1 cúp",
    pic: "https://www.estadiodeportivo.com/imagenes/2a9c47b9-ba0b-4c45-88a8-3da95ecbe83a_1200x680.jpeg",
  },
  {
    id: 1006,
    question: "Người yêu Toni Kroos nhất là ai?",
    answer: "Chim ưng Tám Lực Valverde",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBRRWFfIPPYcw__zgvxCe_4hsqg5vmWyazw&s",
  },
];
function FlashCards() {
  const [questionSelected, setQuestionSelected] = useState(null);
  const [imgSelected, setImgSelected] = useState(null);
  // truyền value vào function xử lý sự kiện
  function handleClick(id) {
    // console.log(id);
    // Nếu id bằng questionSelected (tức là người dùng bấm lại cùng câu hỏi đang chọn) => bỏ chọn → setQuestionSelected(null) => hiển thị lại câu hỏi
    setQuestionSelected(id !== questionSelected ? id : null);
    // console.log(questionSelected);
    handleImage(id !== questionSelected ? id : null);
  }
  function handleImage(id) {
    setImgSelected(
      id !== null ? questionArray.find((item) => item.id === id)?.pic : null
    );
    console.log(imgSelected);
  }
  return (
    <>
      <div className="flashCards">
        {questionArray.map((question) => (
          // console.log(question.id)
          <div
            className={
              question.id === questionSelected ? `card selected` : `card`
            }
            key={question.id}
            // Khi có value để truyền vào function xử lý => xử dụng arrow function {() => function (x)}
            onClick={() => handleClick(question.id)}
          >
            <p>
              {question.id === questionSelected
                ? question.answer
                : question.question}
            </p>
          </div>
        ))}
        <img
          src={imgSelected}
          alt="pic"
          className={imgSelected === null ? "none-picture" : "picture"}
        ></img>
      </div>
    </>
  );
}
