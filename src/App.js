import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App h-screen flex bg-gray-200">
      <div className="flex flex-col bg-white m-auto max-w-2xl rounded-lg overflow-hidden shadow-lg">
        <div className="p-10">
          <h2 className="text-2xl font-bold text-app-1">Join our community</h2>
          <h3 className="text-md mt-6 font-semibold text-app-3"> 30-day, hassle-free money back guarantee</h3>
          <p className="mr-4 mt-4 text-md text-gray-500">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills</p>
        </div>
        <div className="relative flex flex-col sm:flex-row">
          <div className="flex flex-col bg-app-1 w-full sm:w-1/2 p-10">
            <h4 className="text-white font-medium tracking-wide">Monthly Subscription</h4>
            <div className="mt-2 flex items-center text-white text-3xl">$29 <span className="ml-3 font-normal text-sm opacity-50">per month</span></div>
            <p className="mt-2 flex-1 text-white font-light opacity-75">Full access for less than $1 a day</p>
            <button className="block mt-8 text-white bg-app-3 w-full py-3 rounded-md shadow-lg">Sign Up</button>
          </div>
          <div className="bg-app-2 w-full sm:w-1/2 p-10">
            <h4 className="text-white font-medium tracking-wide">Why Us</h4>
            <a href="#" className="mt-4 block text-xs leading-5 text-white opacity-75">Tutorials by industry experts </a>
            <a href="#" className="block text-xs leading-5 text-white opacity-75">Peer & expert code review </a>
            <a href="#" className="block text-xs leading-5 text-white opacity-75">Coding exercises </a>
            <a href="#" className="block text-xs leading-5 text-white opacity-75">Access to our GitHub repos </a>
            <a href="#" className="block text-xs leading-5 text-white opacity-75">Community forum </a>
            <a href="#" className="block text-xs leading-5 text-white opacity-75">Flashcard decks </a>
            <a href="#" className="block text-xs leading-5 text-white opacity-75">New videos every week</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
