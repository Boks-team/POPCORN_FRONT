import React, { useState } from "react";



const Main = () => {

    const [name, setName] = useState('이름');

    const names = ['이성복', '이지석', '정다은'];
    const gradeList = ['1학년', '2학년', '3학년', '4학년', '대학원생'];
    const setdata = {
        key : 'value'
    }

    // 리액트 2주 일하기 시작한지 2주동안 리액트

    // JSX js xml
    return (
        <React.Fragment> 무조건 묶어주는 애가 하나는 있어야 한다.
            <div>
                메인위
            </div>
            <div>
                메인

                { // 리턴이 있다 없다.
                    names.map((name, index) => (
                        <div key={index}>
                            {name}
                        </div>
                    ))
                }

                {/* <div>
                    이성복
                </div>
                <div>
                    이지석
                </div>
                <div>
                    정다은
                </div> */}

                {
                    gradeList.map((grade, index)=> (
                        <div key={index}>
                            {grade}
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
        
    )
};

export default Main;
// useState < 변수 관리
// useEffect < 데이터 변환 감지


// useEffect => 특정 변수를 타겟으로 해요
//              걔가 값이 변하면 무언갈 하겠다

// 나머지는 다 활용, 기본적인 js 실력이 받쳐줘야 함.
// 왜냐면? js니까.
