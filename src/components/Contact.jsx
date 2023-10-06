import React from 'react'
import ContactImg from '../assets/images/contact-image.png'
import useForm from "../hooks/useForm";
import { motion } from "framer-motion"



export const Contact = () => {

  const initialData = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  };

  const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'The NAME field must not be empty.';
    } else if (!regexName.test(form.nombre)) {
      errors.nombre = 'The NAME field only accepts letters and spaces.';
    }

    if (!form.correo.trim()) {
      errors.correo = 'The EMAIL field must not be empty.';
    } else if (!regexEmail.test(form.correo)) {
      errors.correo = 'The EMAIL field has another format';
    }

    if (!form.asunto.trim()) {
      errors.asunto = 'The SUBJECT field must not be empty.';
    } else if (!regexName.test(form.asunto)) {
      errors.asunto = 'The SUBJECT field only accepts letters and spaces.';
    }

    if (!form.mensaje.trim()) {
      errors.mensaje = 'The MESSAGE field must not be empty.';
    } else if (!regexComments.test(form.mensaje)) {
      errors.mensaje = 'The "Message" field accepts only 255 characters.';
    }

    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  return (
    <>
    <section className='w-full sm:flex sm:flex-col'>
      <div className='my-36 sm:my-20' >
      <p className='text-center text-2xl uppercase text-orange-500 font-mono'>Subscribe</p>
      <h4 className='text-center text-5xl font-bold text-blue-950'>Contact Us</h4>
      </div>
      <div className='flex justify-center sm:flex-col'>
      <img src={ContactImg} alt="Imagen de contacto" className='-mt-9' />
      <form className="w-[30%] sm:w-full sm:flex sm:flex-col sm:items-center lg:pr-2" onSubmit={handleSubmit}>
            <label className="form-label text-base sm:pl-2">Your Name</label>
            <input
              type="text"
              className="form-control border h-12 hover:bg-sky-200 pl-2 outline-none w-full sm:w-[95%] hover:outline-orange-500"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
            {errors.nombre && (
              <div className="text-red-600 pb-4 sm:w-[95%]">{errors.nombre}</div>
            )}

            <label className="form-label pt-2 text-base sm:pl-2">Your Email</label>
            <input
              type="email"
              className="form-control border h-12 hover:bg-sky-200 pl-2 outline-none w-full sm:w-[95%] hover:outline-orange-500"
              name="correo"
              value={form.correo}
              onChange={handleChange}
            />
            {errors.correo && (
              <div className="text-red-600 pb-4 sm:w-[95%]">{errors.correo}</div>
            )}

            <label className="form-label pt-2  text-base sm:pl-2">Your Subject</label>
            <input
              type="text"
              className="form-control border h-12 hover:bg-sky-200 pl-2 w-full sm:w-[95%] outline-none hover:outline-orange-500"
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
            />
            {errors.asunto && (
              <div className="text-red-600 pb-4 sm:w-[95%]">{errors.asunto}</div>
            )}

           
            <label className="form-label pt-2 text-base sm:pl-2">Your Message</label>
            <textarea
              className="form-control border h-32 hover:bg-sky-200 pl-2 w-full outline-none sm:w-[95%] hover:outline-orange-500"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              cols="40"
              rows="6"
            />
            {errors.mensaje && (
              <div className="text-red-600 pb-4 sm:w-[95%]">{errors.mensaje}</div>
            )}

            <div className="w-[20%] sm:m-auto sm:pt-4">
              <motion.button
                className="text-white py-4 px-2 rounded-full  text-sm bg-orange-500  sm:rounded-md sm:py-1 sm:w-[95%]"
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.9 }}
              >
                {loading ? "Enviando..." : "Send Message"}
              </motion.button>
            </div>
          </form>
      </div>
    </section>
    </>
  )
}
