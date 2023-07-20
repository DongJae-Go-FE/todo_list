import React, { useState } from "react";
import Input from "../../components/common/input/input";
import Button from "../../components/common/button/Button";
import BtnArea from "../../components/common/btnArea";
import ListItem from "../../components/todo/listItem";
import Modal from "../../components/todo/modal";
import TodoData from "./data";
import Styled from "./styled";

function Todo() {
  //배열값 사본
  const [todoCopy, setTodoCopy] = useState(TodoData);
  const [text, setText] = useState("");
  const [modal, setModal] = useState(false);
  const [keyNum, setKeyNum] = useState("");

  /** 리스트 추가 인풋 값 할당 */
  const inputChange = (e) => {
    setText(e.target.value);
  };

  /** 투두리스트 추가 */
  const todoAdd = () => {
    let copy = [...todoCopy];
    //시간.
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

    let pushData = {
      id: todoCopy.length + 1,
      title: text,
      count: 0,
      date: today,
      check: false,
    };
    copy.push(pushData);
    setTodoCopy(copy);
  };

  /** 투두타이틀 가나다 순 정렬 */
  const todoTitSort = () => {
    let copy = [...todoCopy];
    copy.sort(function (a, b) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      else return 0;
    });
    setTodoCopy(copy);
  };

  /** 투두좋아요 수 추가 */
  const todoGood = (data, i) => {
    let copy = [...todoCopy];
    copy[i].count = data;
    setTodoCopy(copy);
  };

  /** 투두리스트 제거 */
  const todoDel = (key) => {
    let copy = [...todoCopy];
    copy.splice(key, 1);
    setTodoCopy(copy);
  };

  /** 동적 모달 열기 */
  const modalOpen = (data, subKey) => {
    setModal(data);
    setKeyNum(subKey);
  };

  /** 모달 닫기 */
  const modalClose = (data) => {
    setModal(data);
  };

  /** 투도 완료값 체크 */
  const todoComplete = (checkInfo, subKey, time) => {
    let copy = [...todoCopy];
    copy[subKey].check = checkInfo;
    copy[subKey].modalTime = time;
    setTodoCopy(copy);
  };

  /** 완료된 값 표시 */
  let todoCom = todoCopy.filter(function (todoComItem) {
    return todoComItem.check === true;
  });

  /** 전체 삭제 */
  const allClear = () => {
    let copy = [...todoCopy];
    copy = [];
    setTodoCopy(copy);
  };

  return (
    <Styled>
      <h2 className="blog-title">투두리스트</h2>
      <div className="total">
        완료 리스트 : {todoCom.length} / 총 리스트 : {todoCopy.length}
      </div>
      <BtnArea>
        <Button className="red" type="button" onClick={allClear}>
          전체 삭제
        </Button>
        <Button className="black" type="button" onClick={todoTitSort}>
          정렬하기
        </Button>
      </BtnArea>
      <div className="content">
        <ul className="blog-list scroll-active">
          {todoCopy.map((data, i) => {
            return (
              <ListItem
                title={data.title}
                count={data.count}
                date={data.date}
                key={i}
                subKey={i}
                todoGood={todoGood}
                todoDel={todoDel}
                modalOpen={modalOpen}
                todoComplete={todoComplete}
              />
            );
          })}
        </ul>
        <div className="list-add">
          <label for="add">list 추가</label>
          <Input
            type="text"
            placeholder="투두리스트 입력"
            id="add"
            onInput={inputChange}
          />
          <Button type="button" className="green" onClick={todoAdd}>
            추가
          </Button>
        </div>
      </div>
      {modal ? (
        <Modal
          title={todoCopy[keyNum].title}
          date={todoCopy[keyNum].date}
          good={todoCopy[keyNum].count}
          modalClose={modalClose}
          checked={todoCopy[keyNum].check}
          modalTime={todoCopy[keyNum].modalTime}
        />
      ) : (
        ""
      )}
    </Styled>
  );
}

export default Todo;
