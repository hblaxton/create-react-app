import logo from './logo.svg';
import './App.css';

function App() {
  return (

<>
    

  <div class="buttons">
  <button class="duplicate">Duplicate last card</button>
  <button class="modifytitle">Change Name</button>
  <button id="bg" class="button">Change Background</button>
  <button id="deletelastcard">Delete</button>
  <button data-toggle-btn>Toggle description</button>
</div>
<div class="wrapper">
  <div class="container">
  <img class="image" src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"/>
  <div class="header">
    <h3>Landscaping Company</h3>
    <h4>A beautiful green tree</h4>
      </div>
      <details class="details">
      <summary>Description</summary>
      <div>
      <ul>
      <li>A tree as beautiful as this one should be cut down</li>
        <li>Trees!</li>
       </ul>
    </div>
    </details>
  </div>
  
</div>
</>
  );
}

export default App;
