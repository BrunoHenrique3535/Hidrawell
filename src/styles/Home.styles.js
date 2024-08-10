import styled from 'styled-components'

export const HomeContainer = styled.section`
    min-height: 100vh;
    background-image: url('/background-home.png');
    background-position: center;
    background-repeat: space;
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{
        color: #0D99FF;
        text-align: center;
        margin-top: 3.5rem;
        margin-bottom: 4rem;
        font-size: 2.5rem;
    }

    p{
        font-size: 2.5rem;
        text-align: center;
        width: 87rem;
    }

    #mais{
        color: #000000;
        background: #ffffff;
        border: solid 1px #000000;
        padding: 1rem;
        border-radius: 6px;
        position: fixed;
        bottom: 1.5rem;
        left: 50%;
        transform: translate(-50%, 0);
    }

    #mais:hover{
        color: #ffffff;
        background: #000000;
        text-decoration: underline;
        transition: all.5s;
    }
`