const Task2 = () => {

  return (
    <div>
      <h1>Practices/Changes for a frontend engineer:</h1>
      <ul>
        <li>Naming conventions, for tables and fields as they are very generic</li>
        <li>Contraints, fields should have not null for things like name and email within users and unique ones for things like emails to ensure they are in the correct format</li>
        <li>Data types, everything appears to be strings, could probably use integers for ID's, date for booking date fields</li>
        <li>Normalize the database, back to the previous point have sperate tables for Users, Parcs and Bookings and create a relationship with a foreign key between them.</li>
      </ul>
    </div>
  );
};

export default Task2;