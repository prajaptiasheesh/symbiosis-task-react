import React, { Component } from 'react';
import { connect } from "react-redux";
import Category from '../../commonComponents/Category';
import Header from './Header';
import Modal from '../../shared/Modal';

const mapStateToProps = (state, ) => ({
    categories_ids: state.categories_options.categories_ids,
    categories_by_ids: state.categories_by_ids,
})
const mapDispatchToProps = (dispatch, ownProps) => ({})
  
class Portal extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: null,
            isModalOpen: false
        }
    }
    

    componentDidMount(){

        
    }

    toggleModal = ()=>{
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    getSelected =(value)=>{

        let state = { ...{}, ...this.state };
        state.isAnySelected = value;
        this.setState(state)
    }

    render() {

        const { categories_ids, categories_by_ids } = this.props;

        const toggleBtn =  <button onClick={this.toggleModal} > {this.state.isModalOpen ? 'close': 'open'}  </button>
                
         return (
            <div className="container-fluid ">
                <Header />
                <div className="row m-auto" >
                    <div className="col-md-6" >
                        <div className="card float-right shadow p-3  bg-light rounded" >
                            {categories_ids.map((id, i)=>(<Category useCheckbox={true} key={id} category={categories_by_ids[id]} index ={i} />))}
                        </div>
                    </div>
                    <div className="col-md-6 " >
                        <div className="card float-left shadow p-3  bg-light rounded" >
                            {categories_ids.map((id, i)=>(<Category getSelected={this.getSelected} useCheckbox={false} key={id} category={categories_by_ids[id]} index ={i} />))}
                            { !this.state.isAnySelected ? <div style={{ margin: '0px auto' }}> No Value Selected </div> : null }
                        </div>
                    </div>
                </div>
                {toggleBtn}
               { this.state.isModalOpen ? 
               <Modal
                    titleText={"Confirm modal"}
                    titleId={'confirmModal'}
                    escapeExits={true}
                    underlayClickExits={true}
                    onExit={this.toggleModal}
                    focusDialog={true}
                    verticallyCenter={false}
                    scrollDisabled={false}
                    dialogStyle={{
                        height: '269px',
                        marginTop: "12%",
                        width: "30%",
                        overflowY: "scroll",
                        scrollBehavior: "auto",
                        backgroundColor: 'whitesmoke'
                    }}
                >
                    <div  >
                            
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a onClick={this.toggleModal} href="#" className="btn btn-primary">Close</a>
                    </div>
               </Modal> : null }
                
            </div>
        );
    }
}

export default Portal= connect(mapStateToProps, mapDispatchToProps)(Portal);
