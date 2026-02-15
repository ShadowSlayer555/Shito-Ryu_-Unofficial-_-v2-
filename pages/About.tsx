import React, { useState } from 'react';
import { Mail, Info, User } from 'lucide-react';

const About: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from Satokai Portal: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AAge: ${formData.age}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Open default mail client
    window.location.href = `mailto:julianlee555.ca@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-3 mb-8">
        <Info className="text-karate-red" size={32} />
        <h1 className="text-3xl font-bold text-gray-900">About & Contact</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Creation Story */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">The Creation of This Portal</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This website was created to serve as a centralized, easy-to-access resource for Shito-Ryu Karate practitioners. 
              Recognizing the need for an organized library of Katas, Kumite drills, and terminology, this portal aims to help 
              students of all belt levels practice effectively outside of the dojo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By consolidating high-quality demonstration videos from respected instructors into a single platform, 
              we hope to support your journey on the path of Karate-do.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
             <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <User size={20} />
                Contact Owner
             </h3>
             <p className="text-sm text-blue-800 mb-2">
                Questions? Suggestions? Feel free to reach out directly via email.
             </p>
             <p className="text-sm font-mono bg-white inline-block px-2 py-1 rounded border border-blue-200 text-blue-600">
                julianlee555.ca@gmail.com
             </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-karate-red">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Mail className="text-karate-red" />
            Send a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-karate-red focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-karate-red focus:border-transparent outline-none transition-all"
                  placeholder="25"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-karate-red focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-karate-red focus:border-transparent outline-none transition-all resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-karate-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-md flex justify-center items-center gap-2"
            >
              Email Me <Mail size={18} />
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              This will open your default email client.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;