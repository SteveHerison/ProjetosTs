import { Student } from "../../types/students";

type Props = {
  students: Student[];
};

const StudentsTable = ({ students }: Props) => {
  return (
    <table className="w-full border border-gray-600 rounded-md overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600 bg-gray-800 justify-center items-center">
          <th className="p-3">Name</th>
          <th>Satus</th>
          <th>Grade1</th>
          <th>Grade2</th>
          <th>Final Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map(({ id, active, name, email, avatar, grade1, grade2 }) => (
          <tr key={id} className="bg-gray-500 border text-left">
            <dt className="m-3 flex items-center gap-2">
              <img src={avatar} alt="" className="w-10 h-10" />
              <div>
                <p>{name}</p>
                <p>{email}</p>
              </div>
            </dt>
            <td>
              {active ? (
                <p className="bg-green-500 rounded-xl p-1 inline-block border border-green-300">
                  Active
                </p>
              ) : (
                <p className="bg-red-500 border-red-300 border rounded-xl p-1 inline-block">
                  Inactive
                </p>
              )}
            </td>
            <td>{grade1.toFixed(1)}</td>
            <td>{grade1.toFixed(1)}</td>
            <td>{active ? ((grade1 + grade2) / 2).toFixed(1) : "--"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
