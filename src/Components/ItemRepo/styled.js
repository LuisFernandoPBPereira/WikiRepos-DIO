import styled from "styled-components";

export const ItemRepo = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin: 0 0 20px 0;
    }

    a.remove{
        color: #FF0000;
    }
    
    hr{
        color: #FAFAFA60;
        margin:20px 0;
    }
`