"use client"

const CENTILIO_EMAIL = "team@centilio.com"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">
                <a
                  href={`mailto:${CENTILIO_EMAIL}`}
                  className="text-blue-700 hover:underline"
                >
                  {CENTILIO_EMAIL}
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Company</h3>
              <p className="text-gray-600">Centilio, Inc.</p>
            </div>
            <p className="text-sm text-gray-500 pt-4">
              Prefer to write directly? Email us anytime — we&apos;ll respond within
              one business day.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          {/*
            Form posts to mailto: so submissions open the user's mail client
            with all fields pre-filled. No backend required — matches the
            email-only contact policy approved on 2026-04-26.
          */}
          <form
            action={`mailto:${CENTILIO_EMAIL}`}
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="Message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
