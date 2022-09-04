import DiaryItem from "./DiaryItem";

const diaryList = ({ diaryList }) => {
  return (
    <div className="DairyList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

diaryList.defaultProps = {
  diaryList: [],
};

export default diaryList;
