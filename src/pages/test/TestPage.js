import React from "react";
import styled from "styled-components";

const width = '100%';

const TestPageCss = styled.div`
    width : ${width};
    background : pink;
    text-align:center;
`;

const TestPage = () => {

    return (
        <TestPageCss>
            <div>
                프론트는 데이터처리 빼면은 다 화면 디자인이니까
            </div>
            데이터처리까지는 안해서 css만 엄청

            몰라서 어려운거지
            알면 엄청 쉬워

            다들 그렇게 어렵게 안해서

            공부를 하면 엄청 쉽게 만들어져 있어
            js 
        </TestPageCss>
    );
}


export default TestPage;