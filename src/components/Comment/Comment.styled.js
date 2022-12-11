import styled from 'styled-components'

export const Styled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 410px;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    margin: 10px 0;
    border: 1px solid lightgray;
    border-radius: 5px;

    .comment {
      display: flex;
      width: 100%;
    }

    .comment--body {
      display: flex;
      width: 100%;
      flex-direction: column;
    }

    .comment-content {
      display: flex;
      width: 100%;
      padding: 10px;
      font-size: medium;
    }


    .comment-container {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }

`