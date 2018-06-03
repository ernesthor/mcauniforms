import React from 'react'
import { Field, reduxForm } from 'redux-form'

import myCaptcha from './ContactCaptcha.js'

const required = value => (value ? undefined : 'Required!')
const alphabet = value =>
	value && /[^a-zA-Z]/i.test(value)
		? 'Only alphabet characters'
		: undefined
const number = value =>
	value && /[^0-9]/i.test(value)
		? 'Only numeric characters'
		: undefined

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && ((error && <span className="mt-2 contact-gray">{error}</span>) || (warning && <span className="mt-2 contact-gray">{warning}</span>))}
    </div>
)

const ContactForm = props => {
const { handleSubmit, pristine, submitting } = props
return (
		<div>
			<form method="POST" action="https://formspree.io/mcauniforms@gmail.com">
					<div className="form-group">
						<Field name="name" component={renderField} type="text" placeholder="Name"
						className="form-control" label="Name" validate={[required]} warn={alphabet}/>
					</div>
					<div className="form-group">
						<Field name="phoneNumber" component={renderField} type="text" placeholder="Mobile No."
						className="form-control" label="Mobile No." validate={[required, number]}/>
					</div>
					<div className="form-group">
						<Field name="subject" component={renderField} type="text" placeholder="Subject"
						className="form-control" label="Subject" validate={required}/>
					</div>
					<div className="form-group">
						<Field name="message" component="textarea" type="text" placeholder="Message"
						className="form-control" label="Message" rows="7" validate={required}/>
					</div>
					<div className="form-group row">
						<div className="col-md-6 form-captcha">
							<Field name="recaptcha" component={myCaptcha}
							className="form-control" validate={required}/>
						</div>
						<div className="col-md-6">
							<button type="submit" disabled={pristine || submitting} color="light" className="contact-btn btn-lg float-left"> Submit </button>
						</div>
					</div>
			</form>
		</div>
		)
}

export default reduxForm({
	form: 'ContactUs'
})(ContactForm)
