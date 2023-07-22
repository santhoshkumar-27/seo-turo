import { useState } from "react";
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
function DisplayResults({ title, description, mobileSize }) {
  return (
    <>
      <span>
        Previewer
      </span>
      <div className={`${ mobileSize === 'mobile' ? 'w375': ''}`}>
        <p className="m-0">
          <a href="#" className="link-underline-primary MBeuO link-underline cas">{title}</a>
        </p>
        <p className="text-wrap-content text-start pkphOe">{description}</p>
      </div>
    </>
  )
}
function FormContent({ title, description, mobileSize, onTitleSet, onDescriptionSet, onSetMobileSize }) {

  function ristrict(event, type) {
    if (type === 'title' && event.target.value.length > 60) {
      return;
    }
    if (type === 'title') {
      return onTitleSet(event.target.value);
    }
    if (type === 'description' && event.target.value.length > 160) {
      return;
    }
    if (type === 'description') {
      return onDescriptionSet(event.target.value);
    }
  }
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
        <input type="text" className={`form-control ${title.length > 60 ? 'form-control-invalid' : ''}`} onChange={(e) => ristrict(e, 'title')} value={title} />
        Title length - {title.length} / maxmium length - 60 is good
      </div>
      <div className="mb-3">
        <label className="form-label">
          Description
        </label>
        <textarea className={`form-control overflow-hidden ${description.length > 160 ? 'form-control-invalid' : ''}`} style={{ resize: 'none' }} id="textAreaField" value={description} onInput={(e) => setHight(e)} onChange={(e) => ristrict(e, 'description')}></textarea>
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
        <div className="col-md-6 overflow-hidden">
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
