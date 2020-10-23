import React, { Component } from 'react';
import { connect } from "react-redux";
import Category from '../../commonComponents/Category';

const mapStateToProps = (state, ) => ({
    categories_ids: state.categories_options.categories_ids,
    categories_by_ids: state.categories_by_ids,
})
const mapDispatchToProps = (dispatch, ownProps) => ({})
  
class Portal extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }
    

    componentDidMount(){

        
    }

    handleChange =(event)=>{

        let state = { ...{}, ...this.state };

        if(event.target.type === 'file'){

            state[event.target.name] = this.getFileIfAny(event.target.files); 
            this.setState(state);
        }else{
            state[event.target.name] = event.target.value;
        }
    }

    render() {

        const { user } = this.state;
        const { categories_ids, categories_by_ids } = this.props;
         return (
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-md-6" >
                        {categories_ids.map((id, i)=>(<Category useCheckbox={true} key={id} category={categories_by_ids[id]} index ={i} />))}
                    </div>
                    <div className="col-md-6" >
                        {categories_ids.map((id, i)=>(<Category useCheckbox={false} key={id} category={categories_by_ids[id]} index ={i} />))}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Portal= connect(mapStateToProps, mapDispatchToProps)(Portal);
