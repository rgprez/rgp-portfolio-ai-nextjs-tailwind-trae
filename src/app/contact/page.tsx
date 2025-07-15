const ContactPage = () => {
  return (
    <div className="container mx-auto p-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Contact Me</h1>
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 text-center mb-6">
          I'm always open to new opportunities, collaborations, and interesting projects. 
          Feel free to reach out using the form below or connect with me on social media.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-700">Or find me on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;