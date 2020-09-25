import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import ButtonPrimary from './form-components/buttons/ButtonPrimary';
import { InputComponent } from './form-components/redux-form-components/InputComponent';
import SelectComponent from './form-components/redux-form-components/SelectComponent';
import Validator from '../validations/Validator';


const form1ValueSelector = formValueSelector('form1')

const mapStateToProps = (state) => ({
  form1Data: form1ValueSelector(state, "name", "gender", "indian", "above18", "gender", "profession", "have_children", "is_married")
})

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  const professionOptions = [
    { value: 'own_business', label: 'Business' },
    { value: 'employee', label: 'Employee' },
  ];

export default class FormComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            submitCount: 0
        }
    }
    renderField = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
      }) => (<>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                ((error && <span style={{ color: "red", fontSize: "14px" }}>{error}</span>) ||
                    (warning && <span style={{ color: "yellow", fontSize: "14px" }}>{warning}</span>))}
            </>
      )

    sleepForAWhile = () =>{
        return new Promise((resolve, reject)=>{

            this.setState({ submitting: true })

             setTimeout(()=>{
                 resolve();
                this.setState({ submitting: false })

             }, 2000)
        })
    }
    
    render() {

        const { handleSubmit, form1Data } = this.props
        const {  submitting, submitCount } = this.state;

        return (
            <div>
                <form onSubmit={ async (event) => {
                        event.persist()
                        event.preventDefault()
                        this.setState({ submitCount: ++this.state.submitCount })
                        await this.sleepForAWhile()
                        handleSubmit(event)
                    }}>
                    
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <Field
                                name="name"
                                id="eventTitle"
                                component={InputComponent}
                                type="text"
                                tooltip="Name"
                                placeholder="Enter your name"
                                noMargin="no-margin"
                                inputClass="form-control"
                                validate={[Validator.required, Validator.maxLength255]}
                            />
                        </div>
                    </div> 

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Gender</label>
                        <div class="col-sm-10">
                            <Field
                                name="gender"
                                component={SelectComponent}
                                className="custom-select"
                                options={genderOptions}
                                placeholder="Please select gender"
                                validate={[Validator.required]}
                            />  
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Indian</label>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <Field 
                                    name="indian" 
                                    component="input" 
                                    type="radio" 
                                    value="1"
                                    className="form-check-input"
                                    id="indian_yes"
                                    validate={[Validator.required]}
                                />
                                <label className="form-check-label" for="indian_yes">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field 
                                    name="indian" 
                                    component="input" 
                                    type="radio" 
                                    value="0"
                                    className="form-check-input"
                                    id="indian_no"
                                    validate={[Validator.required]}
                                />
                                <label className="form-check-label" for="indian_no">No</label>
                            </div>
                        </div>
                    </div> 

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Above 18</label>
                        <div class="col-sm-10">
                            <Field
                                name="above18"
                                component={this.renderField}
                                type="checkbox"
                            />  
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Select Profession</label>
                        <div class="col-sm-10">
                            <Field
                                name="profession"
                                component={SelectComponent}
                                className="custom-select"
                                options={professionOptions}
                                placeholder="Please select profession"
                                validate={[Validator.required]}
                            />  
                        </div>
                    </div>

                   { form1Data.profession === 'employee' ? 
                        <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Is married</label>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <Field 
                                    name="is_married" 
                                    component="input" 
                                    type="radio" 
                                    value="1"
                                    className="form-check-input"
                                    id="is_married_yes"
                                    validate={[Validator.required]}
                                />
                                <label className="form-check-label" for="is_married_yes">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field 
                                    name="is_married" 
                                    component="input" 
                                    type="radio" 
                                    value="0"
                                    className="form-check-input"
                                    id="is_indian_no"
                                    validate={[Validator.required]}
                                />
                                <label className="form-check-label" for="is_indian_no">No</label>
                            </div>
                        </div>
                    </div>  : null}

                    { form1Data.profession === 'own_business' ? 
                        <div className="form-group row">
                                <label className="col-sm-2 col-form-label"> Have children</label>
                                <div class="col-sm-10">
                                    <Field
                                        name="have_children"
                                        component={this.renderField}
                                        type="checkbox"
                                    />  
                                </div>
                        </div> : null}
                   
                    <div className='wide stick-to-bottom justify-content-end'>
                        <div className='d-flex justify-content-end'>
                            <div className='btn-bottom'>
                                <ButtonPrimary className="actionButton confirm btn btn-primary" disabled={ this.state.submitting } type="submit" btntext={ submitting ? 'submitting' :"Save"} />
                            </div>
                        </div>
                    </div>
                </form>
                {
                   submitCount > 0 ?  JSON.stringify(form1Data) : null
                }
            </div>
        )
    }
}


FormComponent = reduxForm({
    form: 'form1',
    initialValues:{ indian: "1", is_married: '0', above18: false },
    onSubmit: (values, dispatch, props) => {
  
  
      let formData = _.cloneDeep(values);
  
      console.log('formData', formData)
    },
    onChange: (values, dispatch, props) => {
    }
  })(FormComponent);

  FormComponent = connect(mapStateToProps, undefined, null, { pure: true })(FormComponent)