import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from './Button.jsx';
import { contactFormValidator } from '@/utils/contactFormValidator';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactFormValidator) });
  const [sending, setSending] = useState(false);

  const sendEmail = async ({ name, email, company, message }) => {
    try {
      setSending(true);
      const validatedForm = contactFormValidator.parse({
        name,
        email,
        company,
        message,
      });
      await emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE,
        validatedForm,
        import.meta.env.PUBLIC_EMAILJS_USER,
      );
      reset();
      setSending(0);
      setTimeout(() => setSending(false), 4000);
      console.log(sending);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setSending(false);
        setError('name', { message: error.message });
        setError('email', { message: error.message });
        setError('message', { message: error.message });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col w-full text-dark"
    >
      <div className="flex flex-col w-full sm:gap-16 md:gap-24 sm:flex-row min-h-96">
        <div className="w-full mt-16">
          <div className="form-container">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className={`form-input ${
                errors.name
                  ? 'focus-within:ring-4 ring-4 ring-red-700'
                  : 'hover:ring-4 focus-within:ring-4 ring-blurple'
              }`}
            />
            <p
              className={
                errors.name
                  ? 'text-red-500 text-xs visible h-5 mt-2'
                  : 'invisible'
              }
            >
              We need to know your name
            </p>
          </div>
          <div className="form-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`form-input ${
                errors.email
                  ? 'focus-within:ring-4 ring-4 ring-red-700'
                  : 'hover:ring-4 focus-within:ring-4 ring-blurple'
              }`}
            />
            <p
              className={
                errors.email
                  ? 'text-red-500 text-xs visible h-5 mt-2'
                  : 'invisible'
              }
            >
              We need a valid email
            </p>
          </div>
          <div className="form-container">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              id="company"
              type="text"
              {...register('company')}
              className="form-input hover:ring-4 focus-within:ring-4 ring-blurple"
            />
          </div>
        </div>
        <div className="w-full mt-0 sm:mt-16">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            type="textarea"
            {...register('message')}
            className={`form-textarea ${
              errors.message
                ? 'focus-within:ring-4 ring-4 ring-red-700'
                : 'hover:ring-4 focus-within:ring-4 ring-blurple'
            }`}
          />
          <p
            className={
              errors.message
                ? 'text-red-500 text-xs visible h-5 mt-2'
                : 'invisible'
            }
          >
            Let us know how we can help
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-16">
        <Button
          type="submit"
          secondary={false}
          disabled={
            errors.name || errors.email || errors.message ? true : false
          }
          contact={true}
        >
          {sending ? (
            <div
              data-animation-path="animations/spinner.json"
              className="lottie w-8 h-8"
            />
          ) : sending ? (
            'Success! Message received'
          ) : (
            'Send'
          )}
        </Button>
      </div>
    </form>
  );
}
