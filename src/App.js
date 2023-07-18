import { useState } from "react";
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
function DisplayResults({ title, description, mobileSize }) {
  return (
    <>
      <p>
        <a href="#" className="link-underline-primary link-underline link-underline-opacity-0">{title}</a>
      </p>
      <p>{description}</p>
    </>
  )
}
function FormContent({ title, description, mobileSize, onTitleSet, onDescriptionSet, onSetMobileSize }) {
 
  function setHight(e) {
    const textareaEl = document.getElementById('textAreaField')
    textareaEl.style.height = e.target.scrollHeight + 'px';
  }
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">
          Title
        </label>
        <input type="text" className={`form-control ${title.length > 60 ? 'form-control-invalid' : ''}`} onChange={(e) => onTitleSet(e.target.value)} value={title} />
        Title length - {title.length} / maxmium length - 60 is good
      </div>
      <div className="mb-3">
        <label className="form-label">
          Description
        </label>
        <textarea className={`form-control overflow-hidden ${description.length > 160 ? 'form-control-invalid' : ''}`} style={{resize: 'none'}} id="textAreaField" value={description} onInput={(e) => setHight(e)} onChange={(e) => onDescriptionSet(e.target.value)}></textarea>
        Description length - {description.length} / maxmium length - 160 is good
      </div>
      <div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="screen" checked={mobileSize === 'pc'} value="pc" id="pc" onChange={(e) => onSetMobileSize(e.target.value)} />
          <label className="form-check-label" htmlFor="pc">
            web
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="screen" checked={mobileSize === 'mobile'} value="mobile" id="mobile" onChange={(e) => onSetMobileSize(e.target.value)} />
          <label className="form-check-label" htmlFor="mobile">
            Mobile
          </label>
        </div>
      </div>
    </form>
  )
}

function Holder() {
  const [title, onTitleSet] = useState('');
  const [description, onDescriptionSet] = useState('');
  const [mobileSize, onSetMobileSize] = useState('pc')
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <FormContent
            title={title}
            description={description}
            onTitleSet={onTitleSet}
            onDescriptionSet={onDescriptionSet}
            onSetMobileSize={onSetMobileSize}
            mobileSize={mobileSize}
          />
        </div>
        <div className="col-md-6">
          <DisplayResults
            title={title}
            description={description}
            mobileSize={mobileSize}
          />
        </div>
      </div>
    </div>
  )
}
export default function App() {
  return <Holder />
}
