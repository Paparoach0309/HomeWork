import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
        this.changeMode = this.changeMode.bind(this)
        this.getValue = this.getValue.bind(this)
    }
    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    async getValue(event) {
        console.log(event.currentTarget.value)
        const response = await fetch("http://tmp.myitschool.org/API/translate/?word=привет", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
                "x-rapidapi-key": "db35ef67fbmsh4fec96408a53a99p183b29jsn97abaa7bea3b"
            }
        })
        const result = await response.json()
        console.log(result)
    }

    render() {
        return (
            <div>
                <div className="add-word-container">
                    {this.state.isOpen ? 
                        <div>
                            <span className="label-title">Add new word</span>
                            <button onClick={this.changeMode} className="btn-round add"></button>
                        </div> :
                        <div>
                            <input onChange={this.getValue} className="" placeholder="Enter new word"/>
                            <button onClick={this.changeMode} className="btn-round check">✔</button>
                        </div>
                    }
                </div>
            </div>
        )
    }

}

export default Page;