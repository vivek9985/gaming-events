import contact from "../../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="w-10/12 mx-auto my-52 md:my-32">
      <h2 className="text-4xl text-center font-semibold mb-14">
        Contact with us
      </h2>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        <div className="p-5 lg:p-10 bg-fuchsia-50 rounded-2xl">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full py-3 px-5 mb-6 bg-white rounded-full focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full py-3 px-5 mb-6 bg-white rounded-full focus:outline-none"
          />
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Your message here ..."
            className="w-full py-3 px-5 mb-8 bg-white rounded-2xl focus:outline-none"
          ></textarea>
          <button className="bg-purple-300 py-2 px-6 rounded-full mb-2 font-bold uppercase">
            Submit
          </button>
        </div>
        <div className="flex items-center justify-center rounded-2xl overflow-hidden">
          <img src={contact} alt="image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
