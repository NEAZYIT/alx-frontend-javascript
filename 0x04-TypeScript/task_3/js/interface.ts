/**
 * Represents the unique identifier of a row.
 */
export type RowID = number;

/**
 * Represents the structure of a row element.
 */
export interface RowElement {
  /** The first name of the person. */
  firstName: string;
  /** The last name of the person. */
  lastName: string;
  /** (Optional) The age of the person. */
  age?: number;
}
