
var arrayTest = [1, 2, 3, 3, 2, 1, 4,];

document.getElementById("app").innerHTML = `
  <header>
    <h1>Unique Element Challenge</h1>
  </header>
  <main>
    <h2>Target</h2>
    <p>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</p>

    <h2>Considerations</h2>
    <ul>
      <li>Values are <b>duplicated only twice</b>.</li>
      <li>There is <b>only one non duplicate value</b>.</li>
      <li>The non duplicate value can be placed <b>anywhere on the array</b>.</li>
      <li>The result must be an <b>integer</b>.</li>
    </ul>
  </main>
  <aside>
    <div class="data">
      <div><h2>Test Data</h2></div>
      <div>${arrayTest}</div>
    </div>
    
    <div class="expected">
      <div><h2>Expected result</h2></div>
      <div>4</div>
    </div>
    
    <div class="recived">
      <div><h2>Your Result</h2></div>
      <div>4</div>
    </div>
  </aside>
`;
