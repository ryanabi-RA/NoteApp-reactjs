import { Component } from "react"
import { getInitialData } from "../../utils/data";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            notes: getInitialData
        }

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            }
        })
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="note-search">
                <input type="text" placeholder="Cari judul..." value={this.search} onChange={this.onSearchChangeEventHandler} />
            </div>
        )
    }
}

export default Search