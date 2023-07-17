import { useState } from "react";
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
function DisplayResults({ title, description, mobileSize }) {
  return (
    <>
      <p>
        <a href="#" className="link-underline-primary">{title}</a>
      </p>
      <p>{description}</p>
    </>
  )
}
function FormContent({ title, description, mobileSize, onTitleSet, onDescriptionSet, onSetMobileSize }) {
  function radioEvent(e) {
    console.log(e)
    onSetMobileSize(e.target.value)
  }
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">
          Title
        </label>
        <input type="text" className="form-control" onChange={(e) => onTitleSet(e.target.value)} value={title} />
        Title length - {title.length}
      </div>
      <div className="mb-3">
        <label className="form-label">
          Description
        </label>
        <textarea className="form-control" value={description} onChange={(e) => onDescriptionSet(e.target.value)}></textarea>
        Description length - {description.length}
      </div>
      <div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="screen" checked={mobileSize === 'pc'} value="pc" id="pc" onChange={(e) => radioEvent(e)} />
          <label className="form-check-label" htmlFor="pc">
            web
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="screen" checked={mobileSize === 'mobile'} value="mobile" id="mobile" onChange={(e) => radioEvent(e)} />
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
