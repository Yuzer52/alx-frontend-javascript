interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Yusuf',
  lastName: 'Temam',
  age: 24,
  location: 'Ethiopia',
};

const student2: Student = {
  firstName: 'Osama',
  lastName: 'Arseyo',
  age: 28,
  location: 'Ethiopia',
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.textContent = 'First Name';
th2.textContent = 'Location';
th1.style.border = '1px solid gray';
th2.style.border = '1px solid gray';
th1.style.padding = '0.5rem';
th2.style.padding = '0.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';

thead.append(th1);
thead.append(th2);

table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const cell1: HTMLTableCellElement = document.createElement('td');
  const cell2: HTMLTableCellElement = document.createElement('td');

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;

  cell1.style.border = '1px solid gray';
  cell2.style.border = '1px solid gray';
  cell1.style.padding = '0.5rem';
  cell2.style.padding = '0.5rem';

  row.append(cell1);
  row.append(cell2);

  table.append(row);
});

body.append(table);

