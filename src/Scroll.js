import React from 'react';

// childeren을 활용하여
const Scroll = (props) => {
    // console.log(props);
    // 자식 노드를 가지는 경우, props는 children의 요소들을 포함하게 된다.
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '750px' }}>
            { props.children }
        </div>
    )
}

export default Scroll;