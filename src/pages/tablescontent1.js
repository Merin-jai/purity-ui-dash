import react from "react";
import '../styles/tablesContent1.css';
import Image1 from '../images/Image (1).png';
import Image2 from '../images/Image (2).png';
import Image6 from '../images/Image (2.5).png';
import Image3 from '../images/Image (3).png';
import Image4 from '../images/Image (4).png';
import Image5 from '../images/Image (5).png'

const authorsData = [
    {
      name: "Esthera Jackson",
      email: "esthera@simmple.com",
      function: { role: "Manager", department: "Organization" },
      status: "Online",
      employed: "14/06/21",
      img : Image1 ,
    },
    {
      name: "Alexa Liras",
      email: "alexa@simmple.com",
      function: { role: "Programmer", department: "Developer" },
      status: "Offline",
      employed: "14/06/21",
      img :  Image2  ,
    },
    {
      name: "Laurent Michael",
      email: "laurent@simmple.com",
      function: { role: "Executive", department: "Projects" },
      status: "Online",
      employed: "14/06/21",
      img :  Image6 ,
    },
    {
      name: "Fredurado Hill",
      email: "fredurado@simmple.com",
      function: { role: "Manager", department: "Organization" },
      status: "Online",
      employed: "14/06/21",
      img : Image3 ,
    },
    {
      name: "Daniel Thomas",
      email: "daniel@simmple.com",
      function: { role: "Programmer", department: "Developer" },
      status: "Offline",
      employed: "14/06/21",
      img : Image4,
    },
    {
      name: "Mark Wilson",
      email: "mark@simmple.com",
      function: { role: "Designer", department: "UI/UX Design" },
      status: "Offline",
      employed: "14/06/21",
      img : Image5,
    },
  ];
const AuthorsTable = () => {
    return (
        <div className="authorstable">
            <h2>Authors Table</h2>
            <table class="Author-table">
                <thead>
                    <tr>
                        <th>AUTHOR</th>
                        <th>FUNCTION</th>
                        <th>STATUS</th>
                        <th>EMPLOYED</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {authorsData.map((author, index) => (
                      <tr key={index}>
                        <td>
                          <div className="author-info">
                            <img
                              src={author.img}
                              alt={author.name}
                            />
                            <div>
                              <p className="author-name">{author.name}</p>
                              <p className="author-email">{author.email}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="function-role">{author.function.role}</p>
                            <p className="function-department">
                              {author.function.department}
                            </p>
                          </div>
                        </td>
                        <td>
                          <span
                            className={`status ${
                              author.status === "Online" ? "online" : "offline"
                            }`}
                          >
                            {author.status}
                          </span>
                        </td>
                        <td className="date">{author.employed}</td>
                        <td className="edit">Edit</td>
                      </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default AuthorsTable;