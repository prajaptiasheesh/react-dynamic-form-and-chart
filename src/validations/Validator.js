
export default class Validator{
    static required = value => (value || typeof value === 'number' ? undefined : 'Required')
    static maxLength = max => value =>value && value.length > max ? `Must be ${max} characters or less` : undefined
    static maxLength255 = Validator.maxLength(255)
    static minLength = min => value =>value && value.length < min ? `Must be ${min} characters or more` : undefined
    static minLength2 = Validator.minLength(2)
    static number = value =>value && isNaN(Number(value)) ? 'Must be a number' : undefined
    static minValue = min => value =>value && value < min ? `Must be at least ${min}` : undefined
    static minValue13 = Validator.minValue(13)
    static email = value =>value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)? 'Invalid email address': undefined
    static tooYoung = value =>value && value < 13? 'You do not meet the minimum age requirement!': undefined
    static alphaNumeric = value =>value && /[^a-zA-Z0-9 ]/i.test(value)? 'Only alphanumeric characters': undefined
    static phoneNumber = value =>value && !/^(0|[1-9][0-9]{9})$/i.test(value)? 'Invalid phone number, must be 10 digits': undefined

}
