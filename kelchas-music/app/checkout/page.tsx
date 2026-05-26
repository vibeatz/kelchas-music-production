export default function Checkout() {
  return (
    <div className="min-h-screen p-6 bg-black">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-zinc-100 mb-4">Checkout (Demo)</h1>
        <div className="glass-card p-6 rounded-lg">
          <p className="text-zinc-400">This is a demo checkout page. Integrate Stripe or another payment provider for production.</p>
          <div className="mt-4">
            <button className="px-4 py-2 rounded bg-amber-400 text-black">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
