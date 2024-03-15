import { RowID, RowElement } from './interface';

/**
 * Module for CRUD operations on rows.
 */
declare module 'crud' {
  /**
   * Inserts a new row into the data store.
   * @param row The row element to be inserted.
   * @returns The unique identifier of the inserted row.
   */
  export function insertRow(row: RowElement): RowID;

  /**
   * Deletes a row from the data store.
   * @param rowId The unique identifier of the row to be deleted.
   */
  export function deleteRow(rowId: RowID): void;

  /**
   * Updates an existing row in the data store.
   * @param rowId The unique identifier of the row to be updated.
   * @param row The updated row element.
   * @returns The unique identifier of the updated row.
   */
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
