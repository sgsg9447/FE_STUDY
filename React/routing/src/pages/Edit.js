import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("who");
  console.log(name);
  const navigate = useNavigate();
  // console.log(id);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이지 입니다</p>
      <button onClick={() => setSearchParams({ who: "Sseul" })}>QS</button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;