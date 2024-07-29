import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">PassiveIncome</div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link></li>
              <li><Link to="/register" className="text-gray-600 hover:text-gray-900">Register</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Generate Passive Income with a Single Click</h1>
            <p className="text-xl mb-8">Unlock multiple streams of income through our AI-powered platform</p>
            <Button size="lg" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Affiliate Marketing", "Advertising Revenue", "E-commerce", "Subscription Services", "Online Courses", "Automated Investments"].map((feature) => (
                <div key={feature} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                  <p className="text-gray-600">Leverage AI and blockchain technology to maximize your {feature.toLowerCase()} potential.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "John Doe", text: "This platform has revolutionized my passive income strategy!" },
                { name: "Jane Smith", text: "The AI-driven insights have been game-changing for my investments." },
                { name: "Mike Johnson", text: "I've seen a 200% increase in my affiliate marketing revenue." }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">© 2023 PassiveIncome. All rights reserved.</div>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;