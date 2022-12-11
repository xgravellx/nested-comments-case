import styled from "styled-components";

export const Styled = styled.div`
    display: flex;
    justify-content: space-between;

    .comment--header-left {
        display: flex;
        flex-direction: row;
        font-size: medium;
        gap: 10px;
        align-items: center;
    }

    .username {
        color: #323232;
        font-weight: bold;
    }

    .comment-posted-time {
        font-weight: 400;
        font-size: small;
        color: gray;

    }
`