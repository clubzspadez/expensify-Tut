// class VisibilityToggle extends React.Component {

//   constructor(props){
//     super(props);
//     this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
//     this.state = {
//       visibility: false
//     }
//   }

//   handleToggleVisibility(){
//     this.setState((prevState) =>{
//       return {
//         visibility: !prevState.visibility
//       }
//     });
//   }

//   render(){
//     return(
//       <div>
//         <h1>Visibility Toggle</h1>
//          <button id="show" onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
//          {this.state.visibility && (<p> Here are some details</p>)}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

class CountApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne  = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    //data we want to re-render 
    this.state = {
      count: props.count
    };
  }

  handleAddOne(){
    this.setState((prevState) => { 
      return {
         count: prevState.count + 1 
      }
    });
  }

  handleMinusOne(){
    this.setState((prevState) => { 
      return {
         count: prevState.count - 1 
      }
    });
  }

  handleReset(){
    this.setState((prevState) => { 
      return {
         count: 0
      }
    });
  }
  render(){
    return (
      <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>Reset</button>
      </div>
    ); 
  }
}

CountApp.defaultProps = {
  count: 0
}

ReactDOM.render(<CountApp />, document.getElementById('app'));
/* --------------------------------------------------------------------
-----------------------------------------------------------------------
----------------------------------------------------------------------- */
// var appRoot = document.getElementById('app');

// // let details = "";
// // let button = "Show Me";
// // const toggleItem = () => {
// // 	if(details === ""){
// // 		details = 'You can see me!';
// // 		button = 'Hide Me';
// // 		renderAppTest();
// // 	} else if(details.length > 0){
// // 		details = '';
// // 		button = 'Show Me';
// // 		renderAppTest();
// // 	}
// // };
// //  Instructors solution
// let details = false;

// const toggleItem = () => {
// 	details = !details;
// 	renderAppTest();
// };



// const renderAppTest = () => {
//   var templateTwo = (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button id="show" onClick={toggleItem}>{details ? 'Hide details' : 'Show details'}</button>
//         {details && (
// 					<p>Details are showing up!</p>
// 				)}
//       </div>
//   );  
  
//   ReactDOM.render(templateTwo , appRoot);
//   }
  
//   renderAppTest();