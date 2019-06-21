import React from 'react'
import ListItem from './listItem'

import { connect } from 'react-redux'

// function list(props) {
//     console.log(props);

//     let listItems = props.listItems.map(
//         (item) => {
//             return <ListItem
//                 {...item}
//                 key={item.ttl} >
//             </ListItem>
//         })
//     return listItems;
// }

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
                    key={item.ttl} >
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
    return { carList: list.data }
}

export default connect(mapSateToProps)(List)

