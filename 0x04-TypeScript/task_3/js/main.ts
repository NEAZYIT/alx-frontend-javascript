import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Define a row element
const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };

// Insert a new row and retrieve the row ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with additional data
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the previously inserted row
CRUD.deleteRow(newRowID);
