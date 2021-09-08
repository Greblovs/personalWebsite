import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage/MainPage"
import React from "react";

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

function App() {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        let isMounted = true
        const debouncedHandleResize = debounce(function handleResize() {
            if(isMounted ) {
                setDimensions({
                    height: window.innerHeight,
                    width: window.innerWidth
                })
            }
        }, 20)

        window.addEventListener('resize', debouncedHandleResize)
        return()=>{isMounted=false}
    })
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
