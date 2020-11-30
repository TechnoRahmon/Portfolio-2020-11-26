import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/styleV1.css";
const AddNewBtn = () => {
    return (
      <div>
      <Link to="/newproject">
              <button className="waves-effect waves-light btn-large addBtn">
          <i className="material-icons">add</i>
        </button>
      </Link>
    
      </div>
    );
}

export default AddNewBtn;
