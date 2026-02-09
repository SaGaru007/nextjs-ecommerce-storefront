export default function Signup() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-md w-80 space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input className="w-full border p-2 rounded" placeholder="Name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <input type="password" className="w-full border p-2 rounded" placeholder="Password" />
        <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">Create Account</button>
      </form>
    </main>
  );
}
