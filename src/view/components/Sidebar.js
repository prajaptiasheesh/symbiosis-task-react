import React, { Component } from 'react'
import { connect } from "react-redux";
import { connect } from "react-redux";

const mapStateToProps = (state, ) => ({
    categories_ids: state.categories_options.categories_ids,
    categories_by_ids: state.categories_by_ids,
})
const mapDispatchToProps = (dispatch, ownProps) => ({})
  

class Sidebar extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }



    render() {
        const { categories_ids, categories_by_ids } = this.props;

        return (
            <div>
            {categories_ids.map((id, i)=>(<Category useCheckbox={false} key={id} category={categories_by_ids[id]} index ={i} />))}
               
            </div>
        )
    }
}

export default Sidebar= connect(mapStateToProps, mapDispatchToProps)(Sidebar);

