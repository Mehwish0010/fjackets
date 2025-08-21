import Head from 'next/head';

export default function Footer() {
  return (
    <div className="min-h-16 bg-blue-950 text-white font-sans">
      <Head>
        <title>FJockets - Leather Jackets, Coats, Blazers & Outerwear</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">LeftOver Jackets</h1>
          <div className="flex text-yellow-400 my-2">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </header>

        {/* Payment Methods */}
        <section className="mb-8">
          <h2 className="font-bold mb-4">PAYMENT METHODS WE ACCEPT</h2>
          <div className="flex space-x-4">
            <span className="font-semibold">PayPal</span>
            <span className="font-semibold">VISA</span>
          </div>
        </section>

        {/* Navigation */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-2  text-red-700">FOR MEN</h3>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-red-700">FOR WOMEN</h3>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-red-700">CARE & MAINTENANCE</h3>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-red-700">ABOUT US</h3>
          </div>
        </section>

        {/* Customer Care */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-2">CUSTOMER CARE</h3>
            <ul className="space-y-1">
              <li>Track Order</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
              <li>Privacy Policy</li>
              <li>Size Guide</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Need Assistance */}
          <div>
            <h3 className="font-bold mb-2">NEED ASSISTANCE?</h3>
            <ul className="space-y-1">
              <li>Contact Us</li>
              <li>chat with us</li>
              <li>support@fjockets.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-2">LET'S STAY IN TOUCH</h3>
            <p className="mb-2">Be the first to know about new products, promos, & exclusive sales.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="border border-gray-300 bg-white text-black px-3 py-2 flex-grow"
              />
              <button className="bg-black text-white px-4 py-2 ml-2">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-4">
          <p className="text-sm">All prices are in USD. Copyright 2025 LeftoverJackets. Sitemap</p>
        </footer>
      </main>
    </div>
  );
}