import React from 'react';

const EditPage = (props) => {
  console.log(props);
  return(
    <div>
    <p>This is the edit page</p>
    <p>Current params id {props.match.params.id}</p>
    </div>
  );
};

export default EditPage;