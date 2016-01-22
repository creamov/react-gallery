require("./app.less")

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Gallery from '../lib/Gallery'

class App extends Component {
    constructor () {
        super();
        var images = [
            { title: 'Basil', width: '800', height: '650' },
            { title: 'Lettuce', width: '1000', height: '1000'},
            { title: 'Tomatoes', width: '400', height: '650' },
            { title: 'Corn', width: '1000', height: '1000'},
            { title: 'Cheese', width: '1250', height: '860'}
        ]
        this.items = images.map(( item, i ) => {
            var src = "https://unsplash.it/" + item.width + "/" + item.height + "/?random";
            return (
                <div key={i}>
                    <h3 className="image-title">{item.title}</h3>
                    <img className="centered" src={src} />
                </div>
            )
        })

    }

    render() {
        return (
            <div className="container">
                <Gallery loop={true}>
                   {this.items}
                </Gallery>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('example'));
