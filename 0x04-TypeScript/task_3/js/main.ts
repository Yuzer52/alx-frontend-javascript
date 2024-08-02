import { RowID, RowElement } from './interface';
import CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

// Insert the row and store the new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row object with an age property
row.age = 23;
const updatedRow: RowElement = row;

// Update the row in the database
CRUD.updateRow(newRowID, updatedRow);

// Delete the row from the database
CRUD.deleteRow(newRowID);

