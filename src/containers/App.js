import React, { Fragment, Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component {
    constructor() {
        super();
        // App.js는 App의 상태를 설명해주는 state를 가지고 있음.
        this.state = {
            robots: [], // 빈 배열을 가지는 rotots
            searchfield: '',
        }
    }

    componentDidMount() {
        // 컴포넌트가 마운트되면, robots 배열을 robots.js로 채움.
        // Updating 발생으로 render()를 다시 실행함.
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    // SearchBox의 this가 아닌 App의 this를 사용하기 위해 화살표 함수를 사용.
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if(!robots.length) {
            // 완전히 json이 로딩되지 않아 this.state.robots의 길이가 0인 경우.
            return <h1>Loading</h1>
        } else {
            // 출력할 this.state.robots가 있는 경우.
            return (
                <Fragment>
                    <div className='tc'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                    </div>
                </Fragment>
            );
        }
    }
}

export default App;
