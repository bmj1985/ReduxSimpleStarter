import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/searchbar'

const API_KEY = 'AIzaSyDYD1J8Kj3571SVu5i8fHi1vvz4ZXpniLg'

const App = () => {
    return (
    <div>
        <SearchBar></SearchBar>
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'))
