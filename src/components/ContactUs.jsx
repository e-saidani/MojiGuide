import React from 'react'



function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "78041c75-900f-4cd1-8bc4-792f93601e58");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Email sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div id="contact" className="flex flex-col gap-4">
      <div>
        <h1 className="text-4xl mt-20 ml-10 text-orange-500 font-semibold">
          Contact Us
        </h1>
        <p className="text-xl text-slate-700 mt-2  ml-10">
          Feel free to express yourself! We are eagerly awaiting your feedback.
        </p>
      </div>
      <form
        className="bg-orange-400 flex flex-col gap-4 pt-10 pl-10 pb-10 justify-start"
        onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
          aria-label="email"
          className="w-2/6 p-2 rounded shadow-lg focus:outline-zinc-200 focus:outline-1"
        />

        <textarea
          name="message"
          id="message"
          placeholder="Leave us a message"
          required
          aria-label="message"
          className="w-3/6 p-2 rounded shadow-lg focus:outline-zinc-200 focus:outline-1"
          rows={6}
        />

        <button
          type="submit"
          className="w-32 bg-amber-600 text-white p-2 rounded-full hover:scale-110 hover:shadow-xl">
          Submit Form
        </button>
        <input
          type="hidden"
          name="access_key"
          value="78041c75-900f-4cd1-8bc4-792f93601e58"
        />
      </form>
    </div>
  );
}

export default ContactUs;