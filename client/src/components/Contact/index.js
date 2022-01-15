import React from 'react';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    const [formState, setFormState] = useState();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    <input type="email" name="email" defaultValue={formState.name} />
    <input type="text" defaultValue={name} name="name" />
<input type="email" defaultValue={email} name="email" />
<input type="text" defaultValue={name} onChange={handleChange} name="name" />
<textarea name="message" defaultValue={message} rows="5"  />

<input type="email" defaultValue={email} name="email" onChange={handleChange} />
<textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
    // JSX
<form id="contact-form" onSubmit={handleSubmit}></form>
    }
    function handleChange(e) {
        setFormState({...formState, name: e.target.value })
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );

    export default ContactForm;