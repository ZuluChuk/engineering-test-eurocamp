const Task1 = () => {

  return (
    <div>
      <h1>Recomendations for database changes</h1>
        <p>Appologies I am not a database or backend engineer so I have attempted this to the best of what I know and have experienced you may not agree with these improvements:</p>
        <ul>
        <li>Primary Keys, each table should have a unique idetifier which I would make a integer and have increment.</li>
        <li>Indexes, this could make performance better if the database was larger (dont think it would make much diffrence at this size)</li>
        <li>Relationships, would add foreign key to the user and parc tables to accociate with a booking</li>
        <li>Documentation, Would probably add something around the schema.</li>
        </ul>
    </div>
  );
};

export default Task1;