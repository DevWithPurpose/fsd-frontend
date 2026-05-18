import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-5xl p-6">
        <section className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-300/20">
          <h1 className="mb-4 text-3xl font-semibold">Contact Us</h1>
          <p className="mb-6 text-sm text-slate-600">
            Have a question or need help? Send us a message and we&apos;ll get back to you soon.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 p-4">
              <h2 className="font-semibold text-slate-900">Email</h2>
              <p className="text-sm text-slate-600">support@example.com</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <h2 className="font-semibold text-slate-900">Phone</h2>
              <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ContactUs
