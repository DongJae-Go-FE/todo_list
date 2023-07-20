import React, { useState } from "react";
import Button from "../../common/button/Button";
import Styled from "./styled";

function ListItem({
  title,
  count,
  date,
  subKey,
  todoGood,
  todoDel,
  modalOpen,
  todoComplete,
}) {
  const [checkOn, setCheckOn] = useState(false);
  const [time, setTime] = useState("");

  /** 해당 투두리스트 좋아요 값 상위 컴포넌트로 보내기 */
  const countUp = () => {
    todoGood((count += 1), subKey);
  };

  /** 해당 투두리스트 지우기 */
  const Delete = () => {
    todoDel(subKey);
  };
  /** 해당 투두리스트 모달 오픈 */
  const open = () => {
    modalOpen(true, subKey);
  };
  /** 해당 투두리스트 체크박스 값 상태 체크 */
  const checkHandler = () => {
    setCheckOn(!checkOn);
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let day = ("0" + newDate.getDate()).slice(-2);
    let hours = ("0" + newDate.getHours()).slice(-2);
    let minutes = ("0" + newDate.getMinutes()).slice(-2);
    let seconds = ("0" + newDate.getSeconds()).slice(-2);
    /** 시간 */
    let today =
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;

    setTime(today);
    todoComplete(!checkOn, subKey, today);
  };

  return (
    <Styled className={`card ${checkOn === true ? "complete" : ""}`}>
      <h3 className="card-title">{title}</h3>
      <input
        type="checkbox"
        name={`checkbox` + subKey}
        id={`checkbox` + subKey}
        checked={checkOn}
        onChange={checkHandler}
      />
      <label htmlFor={`checkbox` + subKey}></label>
      <label htmlFor={`checkbox` + subKey} className="check-tit">
        {checkOn === true ? "완료" : "미완료"}
      </label>
      <div className="card-good">
        <button className="btn" type="button" onClick={countUp}>
          👍
        </button>
        <span className="count">{count}</span>
      </div>
      <ul className="date-area">
        <li>
          <p className="date-title">만든 날짜:</p>
          <span className="date-data">{date}</span>
        </li>
        <li>
          <p className="date-title">완료 날짜:</p>
          <span>{checkOn === true ? time : "미완료"}</span>
        </li>
      </ul>
      <Button className="gray detail" type="button" onClick={open}>
        상세정보
      </Button>
      <Button className="red" type="button" onClick={Delete}>
        삭제
      </Button>
    </Styled>
  );
}

export default ListItem;
