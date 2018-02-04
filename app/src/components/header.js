import React,{Component} from 'react'



class Header extends Component{


    render(){

        return (<div className={'app-header'}>

            <div className={'app-site-info'}>
                <h1><i className={'icon-paper-plane'} /> SHARE</h1>
                <div className={'site-title'}>Share Your Files.</div>
                <div className={'site-slogan'}>Courtesy of Ryan Sheehan</div>
            </div>
        </div>)
    }
}

export default Header;