
import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"

import LoginForm from "./DonorForm"

const FormikLoginForm = withFormik({

    mapPropsToValues({ fName, email}) {
        return {
            fName: fName || "",
            email: email || "",
        };
    },

    validationSchema: Yup.object().shape({
        fName: Yup.string()
            .min(3)
            .required(),
        email: Yup.string()
            .email()
            .required()
    }),

    handleSubmit(values, { resetForm, setStatus }) {

        const sentData = {
            fName: values.fName,
            email: values.email,
        };

        axios.post("https://reqres.in/api/users", sentData)
            .then(response => {
                setStatus(response.data);
                resetForm();
            })
            .catch(error => {
                console.log(error);
            })
    }

})(LoginForm);


export default FormikLoginForm;
