// Aboutus.js
import React from "react";
import Webpic from "../../assets/webdesign.png";
import Education from "../../assets/education.png";
import "./aboutsam.css";
const Aboutfazi = () => {
  return (
    <div>
      {/* Educational Background Section */}
      <div className="education1">
      <img src={Education} alt='webpic' className='skillbarimg2' />
        <h2>Educational Background</h2>
        <p>
          <div className="major1">
          <strong>Major:</strong> Computer Science & Information Technology(CS& IT)<br />
          <strong>Institution:</strong> University Of Engineering & Technology <br />
          <strong>Year:</strong> 2025 (currently in 6TH Semester)<br />
          </div>
          </p>
      </div>
      <div id="about" className='skillbar2'>

        <img src={Webpic} alt='webpic' className='skillbarimg2' />
        <div className='skillbartext2'>
        <div className="major1">
          <h2> Databases & Management  </h2>
          </div>
          <p>Proficient in managing databases, I possess a solid understanding of database principles, structures, and functionalities. With hands-on experience in both relational and NoSQL databases, I am adept at designing, implementing, and optimizing database systems to meet diverse business needs. My skills encompass:

Data Modeling: Expertise in designing database schemas and data models to ensure efficient storage, retrieval, and manipulation of data.

SQL Proficiency: Skilled in writing complex SQL queries to extract, transform, and analyze data from relational databases. Experienced with MySQL, PostgreSQL, Oracle Database, and SQL Server.

NoSQL Databases: Familiarity with various NoSQL database types including document stores (e.g., MongoDB), key-value stores (e.g., Redis), and graph databases (e.g., Neo4j), enabling me to handle unstructured data and scale applications effectively.

Database Administration: Capable of performing database administration tasks such as backup and recovery, security management, performance tuning, and capacity planning to maintain data integrity and optimize database performance.

Data Warehousing: Knowledgeable in data warehousing concepts and tools, including ETL (Extract, Transform, Load) processes, data modeling for analytics, and building data warehouses for business intelligence and reporting purposes.

Data Security: Committed to ensuring data security and privacy by implementing robust access controls, encryption mechanisms, and compliance with relevant regulations such as GDPR and HIPAA.

Database Development Tools: Proficient in using database development tools and platforms such as SQL Server Management Studio, Oracle SQL Developer, and MongoDB Compass for database design, development, and administration tasks.

With a passion for data management and a keen eye for detail, I am dedicated to delivering high-quality database solutions that support organizational objectives and drive business success..</p>
        </div>
      </div>
    </div>
  );
}; 


export default Aboutfazi;