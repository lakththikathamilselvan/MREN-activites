import React from 'react'

function App() {
   //passing children to JSX elements
   const element = React.createElement(
      "button",
      {
         className: "btn",
         onClick: () => alert("clicked!"),
      },
      "Click Me"
   );
   const welcome = (props) => {
      return <div> {props.children}</div>

   };
   return (
      <welcome>
         <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
         </ul>
         <div>{element}</div>
      </welcome>


   );

}

export default App;
