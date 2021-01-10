import formStyles from './form.module.sass'

export default function Form(props) {
    return <form className={formStyles.longform}>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Title</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input" type="text" placeholder="Title of Post" onChange={props.onTitleChange} />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Post</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <textarea className="textarea" value={props.formValue} onChange={props.onFormChange}/>
                            </p>
                        </div>
                    </div>
                </div>
                
            </form>
  }