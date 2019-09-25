
import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"

import DonorForm from "./DonorForm";
import CampaignForm from "./CampaignForm";

export  const FormikLoginForm1 = withFormik({

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

})(DonorForm);


export  const FormikLoginForm2 = withFormik({

    mapPropsToValues({ cName, email}) {
        return {
            cName: cName || "",
            email: email || "",
        };
    },

    validationSchema: Yup.object().shape({
        cName: Yup.string()
            .min(3)
            .required(),
        email: Yup.string()
            .email()
            .required()
    }),

    handleSubmit(values, { resetForm, setStatus }) {

        const sentData = {
            cName: values.cName,
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

})(CampaignForm);

