// Importing RowID and RowElement types from the './interface' module
import { RowID, RowElement } from './interface';

// Declaring the insertRow function which takes a RowElement object and returns a number
declare function insertRow(row: RowElement): number;

declare function deleteRow(rowId: RowID): undefined;

declare function updateRow(rowId: RowID, row: RowElement): number;

