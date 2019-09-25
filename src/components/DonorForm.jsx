
import React, { useState, useEffect } from "react";
import { Form as FormikForm, Field as FormikField } from "formik";
import { Button, Checkbox, Form } from "semantic-ui-react";


function DonorForm({ errors, touched, values, status }) {

  const [users, setUsers] = useState([]);
  const [usersState, setUsersState] = useState({ checked: false });
  const toggle = () => setUsersState((prevState) => ({ checked: !prevState.checked }));


  useEffect(() => {
    if (status) {
      setUsers(users.concat(status))
    }

  }, [status])


  return (

    <FormikForm>
      <Form style={{ width: 800, margin: "auto" }}>
        <h1>Donor Form</h1>
        <Form.Group widths="equal">
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
          </Form.Field>

          <Form.Field>
            <label>
              Middle Name:
              <FormikField
                type="text"
                name="mName"
                placeholder="Middle Name"
              />
              {/* {touched.mName && errors.mName && <p>{errors.mName}</p>} */}
            </label>
          </Form.Field>

          <Form.Field>
            <label>
              Last Name:
              <FormikField
                type="text"
                name="lName"
                placeholder="Last Name"
              />
              {/* {touched.lName && errors.lName && <p>{errors.lName}</p>} */}
            </label>
          </Form.Field>
        </Form.Group>

        <Form.Field label="Gender" control="select">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </Form.Field>

        <Form.Field>
          <label>
            Email:
            <FormikField
              type="email"
              name="email"
              placeholder="Enter your email addres"
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </label>
        </Form.Field>

        <Form.Input label="Phone" type="phone" placeholder="+233 888 8888 888" />
        <Form.TextArea label="Home Address" placeholder="Your Billing/Contact Home Address" />

        <Form.Group widths="equal">
          <Form.Input label="Donation" type="number" placeholder="Amount in Dollars" />
          <Form.Field>
          <label>
             <br/>
              <Button size="big" animated="fade">
              <Button.Content visible onClick={toggle}>Donation Type</Button.Content>
              <Button.Content hidden  onClick={toggle}>Check if Money</Button.Content>
            </Button>
            <Checkbox
              label="Money or Others"
              onChange={toggle}
              checked={usersState.checked}
            />
            </label>
          </Form.Field>
        </Form.Group>

        <Form.Field>
          <label>
            Mailing list :
          <br />
            <Form.Checkbox label="Add me to your mailing list" />
            {/* {touched.mList && errors.mList && <p>{errors.mList}</p>} */}
          </label>
        </Form.Field>

        <Form.Field>
          <Button size="huge"animated="fade">
            <Button.Content visible style={{ width: 100 }}>Submit</Button.Content>
            <Button.Content hidden>Click to Submit</Button.Content>
          </Button>
        </Form.Field>

        {/* <Display users={users} /> */}
      </Form>
    </FormikForm>

  );
}


export default DonorForm;

