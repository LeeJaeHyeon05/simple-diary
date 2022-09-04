import "./App.css";
import Diary from "./Diary";
import DiaryList from "./diaryList";

const dummyList = [
  {
    id: 1,
    author: "이재현",
    content: "하이",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "asdf",
    content: "하이",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "gsd",
    content: "하이",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "이재현",
    content: "하이312",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <Diary />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
