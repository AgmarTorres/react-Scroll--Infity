import React, { Component } from 'react';
import {connect} from 'react-redux'
class Itens extends Component {
    render({items}) {
        console.log(items)
        return (
            <div>
                {
                    items ?
                        items.map((item, index)=> index)
                        :
                        null
                }

            </div>
        );
    }
}

const mapStateToProps= state =>({
    items: state.items
})

export default connect(mapStateToProps)(Itens);
