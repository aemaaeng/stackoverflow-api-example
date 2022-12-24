import "./App.css";
import SingleUser from "./SingleUser";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const UsersBox = styled.div`
  margin: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(true);
  // https://api.stackexchange.com/docs/users <- api 공식문서 users 부분
  // https://www.youtube.com/watch?v=t0S7tvNAEhg&t=130s&ab_channel=LaurenceSvekis <- stackoverflow api 예제 동영상

  useEffect(() => {
    axios
      .get(
        "https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow"
      )
      .then((res) => {
        setUsers([...res.data.items]);
      })
      .then(() => {
        setIsPending(false);
        // 콘솔에서 데이터 형식 확인 가능
        // 요청 한 번에 30개씩 불러올 수 있는데 더 불러올 수 있는 방법은 모르겠음...
        console.log(users);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h2>stackoverflow api 써보기</h2>
      <div>유저 데이터</div>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <UsersBox>
          {users.map((el, idx) => {
            return (
              <SingleUser
                key={idx}
                username={el.display_name}
                avatarImg={el.profile_image}
              />
            );
          })}
        </UsersBox>
      )}
    </div>
  );
}

export default App;
