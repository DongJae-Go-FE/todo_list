import React from "react";
import Styled from "./styled";

function Modal({ title, date, good, modalClose, checked, modalTime }) {
  /** 모달 닫기 */
  const close = () => {
    modalClose(false);
  };

  return (
    <Styled>
      <div className="modal-mask"></div>
      <div className="modal">
        <div className="modal-header">
          <h4>{title}</h4>
          <button type="button" className="modal-close" onClick={close}>
            닫기 버튼
          </button>
        </div>
        <div className="modal-con">
          <p>만든 날짜 : {date}</p>
          <p>완료 상태 : {checked ? "완료" : "미완료"}</p>
          <p>완료 날짜 : {checked ? modalTime : "미완료"}</p>
          <p>좋아요 받은 수 : {good}</p>
        </div>
      </div>
    </Styled>
  );
}

export default Modal;
