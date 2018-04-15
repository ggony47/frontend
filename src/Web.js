import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Company from './Company';
import Details from './Details';

class Web extends React.Component {

	render(){
		return (
            <Router>
			    <div>
                    <Route exact path="/company" component={Company} />
                    <Route path="/company/:id" component={Details} />
                    
                </div>
            </Router>
		)
	}
}
export default Web; 