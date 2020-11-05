import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            translation: '',
            value: '',
            library: localStorage.getItem('library') || [{id: 0, word:'', translate:''}]
        }
        this.changeMode = this.changeMode.bind(this)
        this.getValue = this.getValue.bind(this)
        this.addWordToLibrary = this.addWordToLibrary.bind(this)
    }
    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    addWordToLibrary() {
        this.setState(prevState => ({
            library: [...prevState.library, {id: 'this.state.value.length', word: 'this.state.value', translate: 'this.state.value'}]
        }))
        console.log(this.state)
    }
     async getValue(event) {
        const value = event.currentTarget.value
            this.setState(() => ({
            value: value
            }))
        try {
            const response = await fetch(`http://tmp.myitschool.org/API/translate/?&sourse=en&target=ru&word=${value}`) 
        
            const result = await response.json();
            
            if (result.translate) {
                await this.setState(() => ({
                translation: result.translate
                }))
            }
            console.log(result.translate);
            }
            catch (error) {
                console.log(error);
            }
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
                            <span>{this.state.translation}</span>
                            <button onClick={this.addWordToLibrary} className="btn-round check">✔</button>
                        </div>
                    }
                </div>
            </div>
        )
    }

}

export default Page;