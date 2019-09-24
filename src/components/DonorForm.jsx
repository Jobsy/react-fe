
import React from "react";
// import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form } from 'semantic-ui-react';


function DonorForm() {

  return (
    <div>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Middle Name</label>
            <input placeholder='Middle Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
        </Form.Group>
        <Form.Field label='Gender' control='select'>
          <option value='female'>Female</option>
          <option value='male'>Male</option>
        </Form.Field>
        <Form.Input label='Email' placeholder='joe@schmoe.com' />
        <Form.Input label='Phone' placeholder='+233 888 8888 888' />
        <Form.TextArea label='Home Address' placeholder='Your Billing/Contact Home Address' />
        <Form.TextArea label='About' placeholder='Tell us more about yourself...' />
        <Form.Checkbox label='Add me to your mailing list' />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default DonorForm;


