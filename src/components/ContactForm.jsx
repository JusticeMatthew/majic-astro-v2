import { useState } from 'react';
import { actions } from 'astro:actions';
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
  const [sent, setSent] = useState(false);

  const sendEmail = async ({ name, email, company, message }) => {
    setSending(true);
    const validatedForm = contactFormValidator.parse({
      name,
      email,
      company,
      message,
    });
    const { data, error } = await actions.sendEmail(validatedForm);

    if (!error) {
      setSending(false);
      console.log(data);
    } else if (error instanceof z.ZodError) {
      setSending(false);
      setError('name', { message: error.message });
      setError('email', { message: error.message });
      setError('message', { message: error.message });
    }
  };

  return (
    <form
      name="contact-react"
      netlify
      onSubmit={handleSubmit(sendEmail)}
      className="flex w-full flex-col text-dark-purple">
      <div className="flex min-h-96 w-full flex-col sm:flex-row sm:gap-16 md:gap-24">
        <div className="mt-16 w-full">
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
                  ? 'ring-4 ring-red-700 focus-within:ring-4'
                  : 'ring-blurple focus-within:ring-4 hover:ring-4'
              }`}
            />
            <p
              className={
                errors.name
                  ? 'visible mt-2 h-5 text-xs text-red-500'
                  : 'invisible'
              }>
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
                  ? 'ring-4 ring-red-700 focus-within:ring-4'
                  : 'ring-blurple focus-within:ring-4 hover:ring-4'
              }`}
            />
            <p
              className={
                errors.email
                  ? 'visible mt-2 h-5 text-xs text-red-500'
                  : 'invisible'
              }>
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
              className="form-input ring-blurple focus-within:ring-4 hover:ring-4"
            />
          </div>
        </div>
        <div className="mt-0 w-full sm:mt-16">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            type="textarea"
            {...register('message')}
            className={`form-textarea ${
              errors.message
                ? 'ring-4 ring-red-700 focus-within:ring-4'
                : 'ring-blurple focus-within:ring-4 hover:ring-4'
            }`}
          />
          <p
            className={
              errors.message
                ? 'visible mt-2 h-5 text-xs text-red-500'
                : 'invisible'
            }>
            Let us know how we can help
          </p>
        </div>
      </div>
      <div className="mt-16 flex w-full justify-center">
        <Button
          type="submit"
          aria="Send"
          secondary={false}
          disabled={errors.name || errors.email || errors.message || sending}
          contact={true}>
          {sending ? (
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            'Send'
          )}
        </Button>
      </div>
    </form>
  );
}
