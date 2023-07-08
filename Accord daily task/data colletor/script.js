// JavaScript code

function submitForm() {
    // Get form input values
    var name = document.getElementById('fname').value;
    var email = document.getElementById('lname').value;
    var phone = document.getElementById('email').value;

    // Create a new row in the table
    var table = document.getElementById('dataTable');
    var newRow = table.insertRow(-1);

    // Insert cells in the new row
    var nameCell = newRow.insertCell(0);
    var emailCell = newRow.insertCell(1);
    var phoneCell = newRow.insertCell(2);

    // Set the cell values from the form inputs
    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    phoneCell.innerHTML = phone;

    // Clear the form inputs
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
}

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '4321',
  database: 'employee_data'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// API endpoint for submitting data
app.get('/submit', (req, res) => {
  const fname = req.query.first_name;
  const lname = req.query.last_name;
  const email = req.query.email;

  const query = `INSERT INTO employee_ids VALUES ('${fname}', '${lname}', '${email}')`;

  connection.query(query, (err) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      res.send('Error');
      return;
    }
    res.send('Data inserted successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log('Server running on port ' + port);
});
