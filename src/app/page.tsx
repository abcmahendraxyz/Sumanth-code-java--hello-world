import Link from "next/link";
import Promise from "../common/promise";

// Reusable PortfolioItem component
const PortfolioItem = ({ title, description, linkText, href }: any) => (
  <div className="bg-white p-8 rounded-lg shadow-md m-4">
    <h1 className="text-2xl font-semibold m-4">{title}</h1>
    <p className="text-lg m-4">{description}</p>
    <Link href={href}>
      <div className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg inline-block">
        {linkText}
      </div>
    </Link>
  </div>
);

// Home component using the PortfolioItem component
const Home = () => (
  <main className="bg-gray-100 min-h-screen flex flex-col items-center ">
    <h1 className="text-3xl font-semibold m-6">Portfolio Work</h1>
    <div className="flex flex-wrap ">
      <Promise />
      <PortfolioItem
        title="Slider App"
        description="Get started by clicking the link below:"
        linkText="Go to Slider App"
        href="/slider"
      />

      <PortfolioItem
        title="searchInput App"
        description="Get started by clicking the link below:"
        linkText="Go to searchInput App"
        href="/search-input"
      />

      <PortfolioItem
        title="pagination App"
        description="Get started by clicking the link below:"
        linkText="Go to pagination App"
        href="/pagination"
      />

      <PortfolioItem
        title="Tic-Tok-Toe game App"
        description="Get started by clicking the link below:"
        linkText="Go to pagination App"
        href="/ticTokToe"
      />

      <PortfolioItem
        title="Accodian App"
        description="Get started by clicking the link below:"
        linkText="Go to Accodian App"
        href="/accordian"
      />

      <PortfolioItem
        title="Analog App"
        description="Get started by clicking the link below:"
        linkText="Go to Analog App"
        href="/analog"
      />

      <PortfolioItem
        title="star rating App"
        description="Get started by clicking the link below:"
        linkText="Go to star rating App"
        href="/star-rating"
      />

      <PortfolioItem
        title="progressBar App"
        description="Get started by clicking the link below:"
        linkText="Go to progressBar App"
        href="/progress-bar"
      />

      <PortfolioItem
        title="tabs App"
        description="Get started by clicking the link below:"
        linkText="Go to tabs App"
        href="/tabs"
      />

      <PortfolioItem
        title="multi-step-form"
        description="Get started by clicking the link below:"
        linkText="Go to multi-step-form"
        href="/multi-step-form"
      />

      <PortfolioItem
        title="Emi calculator"
        description="Get started by clicking the link below:"
        linkText="Go to Emi calculator"
        href="/emi-calculator"
      />

      <PortfolioItem
        title="Modal App"
        description="Get started by clicking the link below:"
        linkText="Go to Modal App"
        href="/modal"
      />
    </div>
  </main>
);

export default Home;
