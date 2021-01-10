import formStyles from './form.module.sass'

export default function Form(props) {
    return <form className={formStyles.longform}>
    <textarea className="textarea" value={props.formValue} onChange={props.onFormChange}/>
</form>
  }