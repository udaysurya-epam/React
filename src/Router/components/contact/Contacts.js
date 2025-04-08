import { useForm } from 'react-hook-form';
import './Contacts.css'; 

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Contact Us</h2>

      <div className="form-group">
        <label>Name:</label>
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Your name"
        />
        {errors.name && <p className="error-text">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Invalid email address',
            },
          })}
          placeholder="you@example.com"
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          placeholder="••••••"
        />
        {errors.password && <p className="error-text">{errors.password.message}</p>}
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default ContactForm;
