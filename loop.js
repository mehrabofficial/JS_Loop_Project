
// Define the size of the multiplication table
const tableSize = 5;

// Function to generate the multiplication table
function generateMultiplicationTable(size) {
    let tableHTML = '<table>';

    // Create the table rows and columns using loops
    for (let i = 1; i <= size; i++) {
        tableHTML += '<tr>';

        for (let j = 1; j <= size; j++) {
            tableHTML += `<td>${i} x ${j} = ${i * j}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    return tableHTML;
}



// Get the table container element
const tableContainer = document.getElementById('table');

// Generate the multiplication table and add it to the container
tableContainer.innerHTML = generateMultiplicationTable(tableSize);
