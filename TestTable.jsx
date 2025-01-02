const TestTable = ({ data, handleDelete }) => {
  console.log(data);

  return (
    <div>
      <h1>Table</h1>
      <div className="p-2 m-4">
        <table className="p-2 m-2 border table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user, index) => (
                <tr key={user.email}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestTable;
