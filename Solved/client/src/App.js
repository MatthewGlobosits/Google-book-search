// import React, { Component } from "react";
// import Jumbotron from "./components/Jumbotron";
// import Nav from "./components/Nav";
// import Input from "./components/Input";
// import Button from "./components/Button";
// import API from "./utils/API";
// import { RecipeList, RecipeListItem } from "./components/RecipeList";
// import { Container, Row, Col } from "./components/Grid";

// class App extends Component {
//   state = {
//     recipes: [],
//     bookSearch: ""
//   };

//   handleInputChange = event => {
//     // Destructure the name and value properties off of event.target
//     // Update the appropriate state
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // When the form is submitted, prevent its default behavior, get recipes update the recipes state
//     event.preventDefault();
//     API.getBooks(this.state.bookSearch)
//       .then(res => this.setState({ recipes: res.data }))
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <Nav />
//         <Jumbotron />
//         <Container>
//           <Row>
//             <Col size="md-12">
//               <form>
//                 <Container>
//                   <Row>
//                     <Col size="xs-9 sm-10">
//                       <Input
//                         name="bookSearch"
//                         value={this.state.bookSearch}
//                         onChange={this.handleInputChange}
//                         placeholder="Search For a Boo"
//                       />
//                     </Col>
//                     <Col size="xs-3 sm-2">
//                       <Button
//                         onClick={this.handleFormSubmit}
//                         type="success"
//                         className="input-lg"
//                       >
//                         Search
//                       </Button>
//                     </Col>
//                   </Row>
//                 </Container>
//               </form>
//             </Col>
//           </Row>
//           <Row>
//             <Col size="xs-12">
//               {!this.state.recipes.length ? (
//                 <h1 className="text-center">No Recipes to Display</h1>
//               ) : (
//                 <RecipeList>
//                   {this.state.recipes.map(book => {
//                     return (
//                       <RecipeListItem
//                         key={book.title}
//                         title={book.title}
//                         href={book.href}
//                         ingredients={book.ingredients}
//                         thumbnail={book.thumbnail}
//                       />
//                     );
//                   })}
//                 </RecipeList>
//               )}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from "react";
// import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;