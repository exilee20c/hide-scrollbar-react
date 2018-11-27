import styled from "styled-components";

export default styled.section`
  position: relative;
  height: 100%;

  div.exl-scrollable-container {
    width: 100%;
    height: 100%;
    overflow-x: visible;
    overflow-y: auto;

    box-sizing: border-box;
    position: relative;

    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    div.exl-scrollable-content {
      // 내부 요소의 margin에 의한 레이아웃 오프셋이 스크롤을 망치지 않으려면 이부분이 overflow: auto; 여야한다.
      // overflow: auto;
    }
  }

  @-moz-document url-prefix() {
    div.exl-scrollable-scrollbar-wrapper {
      display: none;
    }
  }

  div.exl-scrollable-scrollbar-wrapper {
    position: absolute;
    top: 4px;
    right: 0;
    padding: 0 1px;
    box-sizing: border-box;
    bottom: 4px;
    width: 18px;
    opacity: 0;
    overflow: visible;
    z-index: 10000;
    background-color: rgba(247, 247, 247, 0.8);

    &:before {
      content: "";
      position: absolute;
      right: 0;
      width: 18px;
      height: 4px;
      top: -4px;
      background-color: rgba(247, 247, 247, 0.8);
    }

    &:after {
      content: "";
      position: absolute;
      right: 0;
      width: 18px;
      height: 4px;
      bottom: -4px;
      background-color: rgba(247, 247, 247, 0.8);
    }

    &.disappear {
      opacity: 0;
    }

    &:hover {
      opacity: 1;

      div.exl-scrollable-scrollbar-thumb {
        background-color: rgba(187, 187, 187, 0.9);
      }
    }

    &:active {
      opacity: 1;
    }

    &.appear {
      opacity: 1;
    }

    transition: opacity 0.2s ease;

    user-select: none;

    div.exl-scrollable-scrollbar-thumb {
      position: absolute;
      right: 5px;
      width: 8px;
      height: 6px;
      background-color: rgba(187, 187, 187, 0.8);
      border-radius: 100px;
      transition: height 0.4s ease-in-out;

      user-select: none;

      &:hover {
        background-color: rgba(187, 187, 187, 0.9);
      }

      &:active {
        background-color: rgba(187, 187, 187, 1);
      }
    }
  }
`;
