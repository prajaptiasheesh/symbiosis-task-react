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

    isAnyOneSelected = ()=>{
        const { category, options_by_ids } = this.props
        let seleted = category.options.filter(id=>{
          if(options_by_ids[id].selected){
              return true;
          }else{
              return false;
          }
        })

        if( typeof this.props.getSelected == 'function'){

            let isSelected = Object.keys(options_by_ids).some(id=>options_by_ids[id].selected)
            if(isSelected ){
                this.props.getSelected(true);
            }else{
                this.props.getSelected(false);
                
            }
        }

        return seleted.length ? true : false;
    }

    render() {

        const { category, index, options_by_ids, useCheckbox } = this.props
        return (
            <div  style={{ backgroundColor:'#ffff' }} >
               { this.isAnyOneSelected() && !useCheckbox ? <h5> { category.name} </h5>  : null}
                { useCheckbox ? <h5>{category.name}</h5>  : null}
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