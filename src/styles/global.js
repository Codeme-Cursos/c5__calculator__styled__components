import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body, html {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Helvetica, sans-serif;
    }
    
    #root{
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 100%;
    }
    
    *, *::before, *::after {
        box-sizing: border-box;
    }

    .d-none{
        display: none;
    }
    main{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px;
    }
`