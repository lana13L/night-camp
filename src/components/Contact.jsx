// Importing useState hook from React and a custom Map component
import { useState } from 'react';
import Map from './Map';

// Contact form component with validation and embedded map
const Contact = () => {
  // State to hold form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to hold form validation errors
  const [errors, setErrors] = useState({});

  // Validation function for form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    return newErrors;
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, log form data (could be replaced with an API call)
      console.log(formData);
      
      // Reset form fields and errors
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      // Set validation errors
      setErrors(validationErrors);
    }
  };

  return (
    // Main Contact section
    <section id="Contact" className="md:py-20 py-10 lg:container mx-3">
      <div className="flex md:flex-row flex-col lg:items-end items-center lg:gap-20 gap-5">
        
        {/* Left side: Map and contact description */}
        <div className="md:w-1/2 w-full text-start md:order-1 order-2">
          <h4 className="text-xl mb-3 text-glow text-primary uppercase">Find Us & Reach Out</h4>
          <p className="mb-7">
            For any questions, bookings, or support. Whether you're planning a visit or need help along the way, we're here to assist and look forward to connecting with you.
          </p>
          <Map />
        </div>

        {/* Right side: Contact form */}
        <div className="md:w-2/5 sm:w-3/5 order-1 md:order-2">
          <form onSubmit={handleSubmit} className="space-y-5 text-center md:text-end">
            <div>
              <p className="animate-bounce text-primary">Contact us</p>
              <h4 className="text-3xl">Get in Touch</h4>
            </div>

            {/* Name input field */}
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full bg-primary/10 border ${
                errors.name ? 'border-red-500' : 'border-primary/15'
              } rounded py-3 px-4 text-white transition focus:outline-none focus:bg-primary/20`}
            />
            {errors.name && <p className="text-red-500 text-sm text-left mt-1">{errors.name}</p>}

            {/* Email input field */}
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full bg-primary/10 border ${
                errors.email ? 'border-red-500' : 'border-primary/15'
              } rounded py-3 px-4 text-white transition focus:outline-none focus:bg-primary/20`}
            />
            {errors.email && <p className="text-red-500 text-sm text-left mt-1">{errors.email}</p>}

            {/* Message textarea */}
            <textarea
              id="message"
              placeholder="Your Message..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full bg-primary/10 border resize-none ${
                errors.message ? 'border-red-500' : 'border-primary/15'
              } rounded py-3 px-4 text-white transition focus:outline-none focus:bg-primary/20`}
            />
            {errors.message && <p className="text-red-500 text-sm text-left mt-1">{errors.message}</p>}

            {/* Submit button */}
            <button type="submit" className="cosmic-button w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


