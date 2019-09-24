
import React, { useState, useEffect } from "react";
import { Form as FormikForm, Field as FormikField } from "formik";
// import styled from 'styled-components'
import { Button, Checkbox, Form } from "semantic-ui-react";

// import Display from "./Display";
// const StyledLabel = styled.label`
//   background-color: yellow;
// `

function LoginForm({ errors, touched, values, status }) {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (status) {
      setUsers(users.concat(status))
    }

  }, [status])

  return (

    
            <FormikForm>
<Form>
      <Form.Group widths='equal'>
      <Form.Field>
      <label>
      First Name:
        <FormikField
          type="text"
          name="fName"
          placeholder="First Name"
        />
        {touched.fName && errors.fName && <p>{errors.fName}</p>}
      </label>
      {/* <br /> */}
      </Form.Field>
      <Form.Field>
      <label>
      Middle Name:
        <FormikField
          type="text"
          name="mName"
          placeholder="Middle Name"
        />
        {touched.mName && errors.mName && <p>{errors.mName}</p>}
      </label>
      {/* <br /> */}
      </Form.Field>
      <Form.Field>

      <label>
      Last Name:
        <FormikField
          type="text"
          name="lName"
          placeholder="Last Name"
        />
        {touched.lName && errors.lName && <p>{errors.lName}</p>}
      </label>
      {/* <br /> */}
      </Form.Field>

      </Form.Group>


      <label>
        Email:
        <FormikField
          type="email"
          name="email"
          placeholder="Enter your email addres"
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </label>
      <br />

      <label>
        Phone Number:
        <FormikField
          type="phone"
          name="phone"
          placeholder="+233 888 8888 888"
        />
        {touched.phone && errors.phone && <p>{errors.phone}</p>}
      </label>
      <br />

      

      <label>
      Mailing list :
          <br />
        <FormikField
          type="checkbox"
          name="mList"
          checked={values.mList}
        /> Add Me
          <br />
        {touched.mList && errors.mList && <p>{errors.mList}</p>}
      </label>
      <br />

      <button>Submit</button>
      {/* <Display users={users} /> */}
    </Form>
    </FormikForm>

  );
}


export default LoginForm;



// import React from "react";
// // import 'semantic-ui-css/semantic.min.css';
// import { Button, Checkbox, Form } from 'semantic-ui-react';


// function DonorForm() {

//   return (
//     <div>
//       <Form>
//         <Form.Group widths='equal'>
//           <Form.Field>
//             <label>First Name</label>
//             <input placeholder='First Name' />
//           </Form.Field>
//           <Form.Field>
//             <label>Middle Name</label>
//             <input placeholder='Middle Name' />
//           </Form.Field>
//           <Form.Field>
//             <label>Last Name</label>
//             <input placeholder='Last Name' />
//           </Form.Field>
//         </Form.Group>
//         <Form.Field label='Gender' control='select'>
//           <option value='female'>Female</option>
//           <option value='male'>Male</option>
//         </Form.Field>
//         <Form.Input label='Email' placeholder='joe@schmoe.com' />
//         <Form.Input label='Phone' placeholder='+233 888 8888 888' />
//         <Form.TextArea label='Home Address' placeholder='Your Billing/Contact Home Address' />
//         <Form.TextArea label='About' placeholder='Tell us more about yourself...' />
//         <Form.Checkbox label='Add me to your mailing list' />
//         <Button type='submit'>Submit</Button>
//       </Form>
//     </div>
//   )
// }

// export default DonorForm;

 



















































// <Form>
//       <label>
//       First Name:
//         <Field
//           type="text"
//           name="fName"
//           placeholder="First Name"
//         />
//         {touched.fName && errors.fName && <p>{errors.fName}</p>}
//       </label>
//       <br />

//       <label>
//       Middle Name:
//         <Field
//           type="text"
//           name="mName"
//           placeholder="Middle Name"
//         />
//         {touched.mName && errors.mName && <p>{errors.mName}</p>}
//       </label>
//       <br />

//       <label>
//       Last Name:
//         <Field
//           type="text"
//           name="lName"
//           placeholder="Last Name"
//         />
//         {touched.lName && errors.lName && <p>{errors.lName}</p>}
//       </label>
//       <br />

//       <label>
//         Email:
//         <Field
//           type="email"
//           name="email"
//           placeholder="Enter your email addres"
//         />
//         {touched.email && errors.email && <p>{errors.email}</p>}
//       </label>
//       <br />

//       <label>
//         Phone Number:
//         <Field
//           type="phone"
//           name="phone"
//           placeholder="+233 888 8888 888"
//         />
//         {touched.phone && errors.phone && <p>{errors.phone}</p>}
//       </label>
//       <br />

      

//       <label>
//       Mailing list :
//           <br />
//         <Field
//           type="checkbox"
//           name="mList"
//           checked={values.mList}
//         /> Add Me
//           <br />
//         {touched.mList && errors.mList && <p>{errors.mList}</p>}
//       </label>
//       <br />

//       <button>Submit</button>
//       {/* <Display users={users} /> */}
//     </Form>
