import React, { Component } from 'react'
import { connect } from "react-redux";
import { OptionActions } from '../../store/actions/OptionActions';
import Option from './Option';
import ListOption from './ListOptions';

const mapStateToProps = (state, ) => ({
    options_by_ids: state.options_by_ids,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleOption: (id, value)=>dispatch(OptionActions.OptionToggle({ id, value }))
})
  

class Category extends Component {
    
    constructor(props){
        super(props);
    }

    handleChange =(event, id)=>{

        if(event.target.type === 'checkbox'){

            let value = event.target.checked ? true: false;
            this.props.toggleOption(id, value);

        }else{
        }
    }

    render() {

        const { category, index, options_by_ids, useCheckbox } = this.props
        return (
            <div>
               {index+1} - {category.name}
               { useCheckbox && category.options.map(id=><Option key={id} handleChange={this.handleChange} option={options_by_ids[id]} />)}
               { !useCheckbox && 
                <ul class="list-group">
               {category.options.map(id=>
                      options_by_ids[id].selected ? <ListOption key={id} deleteOption={()=>this.props.toggleOption(id, false)} option={options_by_ids[id]} /> : null) }
                </ul>}
            </div>
        )
    }
}

export default Category = connect(mapStateToProps, mapDispatchToProps)(Category);