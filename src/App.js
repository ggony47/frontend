import React from 'react';
import axios from 'axios';

class App extends React.Component {

    constructor(){
        super();
        
        this.state = {
            title : '초기제목',
            name : '초기이름'
        }
    }
    
    getCompany(){
        //axios, 백엔드와 연결
        axios.get('http://localhost:4000/company')
            .then(response=>{
                console.log(response.data);
            this.setState({ title : response.data.title,
                            name : response.data.name
                          });
        })
            .catch(error=>{
                console.log(error);
        });
        
    }
    
    
    
	render(){
                    
		return (
            <div>
			   <div>백엔드 통신 해보기</div>
               <button onClick={this.getCompany.bind(this)}>통신시작</button>
                <div>{this.state.title}</div>
                <div>{this.state.name}</div>
            </div>
		)
	}
}
export default App; 