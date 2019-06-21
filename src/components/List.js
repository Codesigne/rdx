import React from 'react'
import { connect } from 'react-redux'

import ListItem from './listItem'

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a: 12
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let listItems = this.props.carList.map(
            (item) => {
                return <ListItem
                    {...item}
                    key={item.name} >
                </ListItem>
            })
        return (
            listItems
            // <p>sdsg</p>
        )
    }
}

function mapSateToProps(store) {
    const { list } = store
    return { carList: list }
}

export default connect(mapSateToProps)(List)

