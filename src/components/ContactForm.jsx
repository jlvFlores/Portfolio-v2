import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequest } from '../app/form/formSlice';
import SocialMedia from './SocialMedia';

const ContactForm = () => {
  const { hasBeenSent, isLoading, error } = useSelector((store) => store.form);
  const { sectionText } = useSelector((store) => store.portfolio);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRequest(formData));
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="divider-top">
      <div className="section-content hidden-animation">
        <h4 id="contact-title" className="center">Contact</h4>
        <p className="center long-text">{sectionText.contact}</p>
        {isLoading && <p className="response-message">Loading...</p>}
        {hasBeenSent && <p className="response-message">Your message has been sent sucessfully.</p>}
        {error && (
        <p className="response-message">
          Error:
          {error}
        </p>
        )}
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <textarea name="message" cols="45" rows="8" maxLength="500" placeholder="Let me know how I can help you." value={formData.message} onChange={handleChange} required />
          <button type="submit" className="btn reversed">Get in touch</button>
        </form>
        <div className="center">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
