import styled from "styled-components"

export const Container = styled.section`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
`

export const Current = styled.div`
    padding: 20px;
    width: 400px;
    height: 300px;
    background-color: var(--colors-ui-bg);
    box-shadow: var(--shadow);
    border-radius: 20px;
`

export const ThisDayWeather = styled.div`
    width: 750px;
    height: 300px;
    background-color: var(--colors-ui-bg);
    box-shadow: var(--shadow);
    border-radius: 20px;
    padding: 42px 20px;
    display: flex;
    justify-content: flex-start;
`