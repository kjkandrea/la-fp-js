
/**
 * Person object
 * Domain model object for LMS use cases covered in the book
 * Author: Luis Atencio
 */
export default class Person {
  constructor(ssn, firstname, lastname, birthYear = null, address = null) {
    this._ssn = ssn;
    this._firstname = firstname;
    this._lastname = lastname;
    this._birthYear = birthYear;
    this._address = address;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(firstname) {
    this._firstname = firstname;
    return this;
  }

  get lastname() {
    return this._lastname;
  }

  get birthYear() {
    return this._birthYear;
  }

  get address() {
    return this._address;
  }

  set address(address) {
    this._address = address;
    return this
  }

  get fullname() {
    return `${this._firstname} ${this._lastname}`;
  }
};