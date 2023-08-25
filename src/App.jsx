import { useState } from "react";

export default function App() {
  return (
    <main className="hero min-h-screen bg-gradient-to-t from-white-grad to-white-grad text-desaturated-red">
      <Hero>
        <ImageHero />
        <div className="">
          <TitleHero />
          <Form />
        </div>
      </Hero>
    </main>
  );
}

function Hero({ children }) {
  return (
    <div className="hero-content max-h-screen grid-cols-3">{children}</div>
  );
}

function ImageHero() {
  return (
    <img
      src="src/assets/images/hero-desktop.jpg"
      alt=""
      className="max-h-screen rounded-lg shadow-2xl lg:order-last lg:col-span-2"
    />
  );
}

function TitleHero() {
  return (
    <>
      <h1 className="text-5xl font-bold">We're coming soon</h1>
      <p className="py-6">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
    </>
  );
}

function Form() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setIsError(true);
    }

    console.log(email);
    setEmail("");
  }

  function handleClick() {
    if (!email) {
      setIsError(true);
    }

    if (email) {
      setIsError(false);
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    if (email) setIsError(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex relative">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered w-full"
          value={email}
          onChange={handleEmail}
        />
        {isError && (
          <span className="w-4 h-4 absolute top-3 right-28">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g fill="none" fill-rule="evenodd">
                <circle cx="12" cy="12" r="12" fill="#F96464" />
                <path
                  fill="#FFF"
                  fill-rule="nonzero"
                  d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
                />
              </g>
            </svg>
          </span>
        )}

        <button
          type="submit"
          onClick={handleClick}
          className="btn px-8 absolute right-0 shadow-xl bg-soft-red"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

// We're coming soon

// Hello fellow shoppers! We're currently building our new fashion store.
// Add your email below to stay up-to-date with announcements and our launch deals.

// Email Address
