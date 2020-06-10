import React  ,{Component }from 'react';
import axios from 'axios';
import NavbarSection from '../components/NavbarSection.js';
import FooterSection from '../components/FooterSection.js';
import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap';

class Chef extends Component{
    constructor() {
        super();
        this.state = {
            chef : []
         };
      }
    //   axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    //  token = document.head.querySelector('meta[name="csrf-token"]');
    // if (token) {
    //     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    // } 
    
    handleChange = event => {
        this.setState({ chef: event.target.value });
      }

      handleSubmit = event => {
        event.preventDefault();
    
        const chef = {
            chef: this.state.chef
        };
        axios.get('http://localhost:8000/jwt/csrf-cookie').then(response => { 
            console.log(response);
            axios.put(`http://127.0.0.1:8000/api/chef/edit/${this.props.match.params.chef}`, { chef })
           .then(res => {
            console.log(res);
            console.log(res.data.data);
            })
        })
    }
//   update(e) {
//     e.preventDefault();
//     const employee = {
//         name: this.state.name,
//         age: this.state.age,
//         salary: this.state.salary,
//     }
//     axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
//     .then(res => console.log(res.data));
// }

    render(){
        
   return(
        <div>
            <div className="container">
            <NavbarSection/>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.chef.name} onChange={this.handleChange}/>
                    <Form.Group>
                    <Form.Label>Work Place</Form.Label>
                        <Form.Control type="text" value={this.state.chef.work_place} />
                        </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Insert Image" />
                    </Form.Group>
                </Form.Group>

                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                Update
                </Button>
                </Form>
            <FooterSection/>
            </div>
        </div>
   );}
}
export default Chef;