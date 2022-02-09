import { useFormik } from 'formik'      //import useFormik hook like useState hook
import Form from 'react-bootstrap/Form'
import * as Yup from 'yup'           //Yup is library in formik to handle validation
import Button from 'react-bootstrap/Button';

function ToDoForm(props) {
    const formik = useFormik({
        initialValues: {
            toDoName: "",
            id: Math.floor(Math.random() * 10000)
        },
        validationSchema: Yup.object({
            toDoName: Yup.string().required("Please Enter TO DO! ")
        }),

        onSubmit: (values) => {        //will be fired by formik.handleOnubmit
            props.onSubmit({
                toDoName: values.toDoName,
                id: Math.floor(Math.random() * 10)
            })
        }
    });

    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-sm-9 mx-auto'>
                    <h3 className='text-center py-2 text-white'>Welcome to your TODOS</h3>
                    <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label className='text-white'>Add New Todo</Form.Label>
                        <Form.Control type="text" placeholder="Add ToDo"
                            className='todo-input'
                            name="toDoName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.toDoName}
                        />
                        {formik.touched.toDoName && formik.errors.toDoName ? <Form.Text className="text-danger">{formik.errors.toDoName} </Form.Text> : null}
                    </Form.Group>
                    <Button variant="danger" type="submit" className='todo-button float-end fw-bold'>
                        ADD TODO
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    );
}
export default ToDoForm; 
