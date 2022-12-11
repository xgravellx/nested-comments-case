import styled from "styled-components";

export const Styled = styled.div`
    .delete-confirmation-wrapper{
    z-index: 100;
    width: 500px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgray;
    color: #323232;
    font-weight: 100;
    font-size: small;
    padding: 20px;
    }

    .title {
        text-align: center;
        font-weight: bold;
    }

    .btn-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cancel-btn, .delete-btn {
        width: 100%;
    }
`