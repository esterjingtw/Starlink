
import React, {Component} from 'react';
import spacex_logo  from '../assets/images/spacex_logo.svg';


//function component, 直接复制return里的内容, 这种没有state和props
//const Header2 = () => {
//    return (
//        <header className="App-header">
//            <img src={spacex_logo} className="App-logo" alt="logo" />
//            <p className="title">
//                StarLink Tracker
//            </p>
//        </header>
//    );
//}

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={spacex_logo} className="App-logo" alt="logo" />
                <p className="title">
                    StarLink Tracker
                </p>
            </header>
        );
    }
}
export default Header;


