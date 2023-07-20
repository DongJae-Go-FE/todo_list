import styled from "@emotion/styled";

const Styled = styled.li`
  padding: 10px;
  border-bottom: 1px solid #000;

  &.complete {
    background-color: aquamarine;
  }

  .card-title {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bold;
  }

  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] {
    & + label {
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 3px solid #707070;
      position: relative;
    }
  }

  input[type="checkbox"] {
    &:checked {
      & + label {
        &::after {
          content: "✔";
          font-size: 15px;
          width: 15px;
          height: 15px;
          text-align: center;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }

  .check-tit {
    margin-left: 5px;
    vertical-align: 5px;
    cursor: pointer;
  }

  .card-con {
    margin: 10px 0;
  }

  .card-good {
    margin-bottom: 10px;
    .count {
      margin-left: 5px;
    }
  }

  .date-area {
    margin-bottom: 10px;
    li {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      .date-title {
        margin-right: 5px;
        color: #000;
        font-weight: bold;
      }
    }
  }

  .detail {
    margin-bottom: 10px;
    font-weight: bold;

    & + button {
      margin-left: 5px;
    }
  }

`;

export default Styled;
