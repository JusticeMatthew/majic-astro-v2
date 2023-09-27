import { useState } from 'react';
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormValidator } from '@/utils/contactFormValidator';
import Button from './Button.astro';
import spinner from '@/spinner.json';

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
        process.env.EMAILJS_SERVICE,
        process.env.EMAILJS_TEMPLATE,
        validatedForm,
        process.env.EMAILJS_USER,
      );
      reset();
      setSending(0);
      setTimeout(() => setSending(false), 4000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setSending(false);
        setError('name', { message: error.message });
        setError('email', { message: error.message });
        setError('message', { message: error.message });
      }
    }
  };

  return <form></form>;
}
