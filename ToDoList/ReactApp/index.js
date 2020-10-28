class ToDo extends React.Component {
    constructor(props) {
        super(props);

        document.querySelector('#' + this.props.class).classList.add(this.props.class);

        this.add = this.add.bind(this);
        this.changeStatus = this.changeStatus.bind(this);

        this.state = {
            list: [],
            html: ''
        };
    }

    changeStatus(event) {
        const id = event.target.dataset.taskId;

        if (id >= 0) {
            const list = this.state.list;
            const task = list[id];

            task.status = !task.status;

            list[id] = task;
           
            this.setState({
                list: list
            });
            this.updateHtml();
        }
    }

    updateHtml() {
        const list = this.state.list;

        const tasksList = list.map((task, index) => {
            const className = task.status ? 'task completed' : 'task';
            
            return <li key={index} className ={className}>
                <input checked={task.status} data-task-id={index} onChange={this.changeStatus} className="task-status" type="checkbox"/>
                <span className="task-name">{task.name}</span>
            </li>;
        });
        if (!tasksList) return;
        this.setState({
        html: <ul>{tasksList}</ul>
        })
    }

    add() {
        const inputValue = document.querySelector('.todo-form input').value;
        const list = this.state.list;
        if(inputValue.length > 0) list.push({
            name: inputValue,
            status: false
        });
        this.setState({
            list: list
        });

        this.updateHtml();
    }

    render() {
        return(
            <div className="todo-container">
                    <h1 className="todo-header">{this.props.children}</h1>
                    <div className="todo-form">
                        <input placeholder="New task" type="text"/>
                        <button onClick={this.add}>Add</button>
                    </div>
                    <div className="todo-list">
                        {this.state.html}
                    </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ToDo class="todo">My ToDo List</ToDo>,
    document.querySelector('#todo')
);