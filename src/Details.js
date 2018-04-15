import React from 'react';
import axios from 'axios';

class Details extends React.Component {

    constructor(){
        super();
        
        this.state = {
            
            details : []
        }
    }
    
    componentDidMount(){
        console.log(this.props.match.params.id);
        const { id } = this.props.match.params.id;
        axios.get('http://localhost:4000/company' + id)
            .then(response=>{
                console.log(response.data);
            this.setState({ details : response.data.details });
        })
            .catch(error=>{
            
        });
    }
    
	render(){
        
        const { details } = this.state;
        
		return (
			<div>company {this.props.match.params.id}번 상세내용
                {details.map((value)=>{
                    return (
                        <div>{value.name}</div>
                    )
                })}
               
                
            
            </div>
		)
	}
}
export default Details; 