import styled from "styled-components";

export const Styled = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    .add-comment {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .comment-input {
        width: 400px;
        height: 60px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid gray;
    }

    .send-btn-container {
        width: 100%;
    }

    .add-btn {
        width: 100%;
    }


`