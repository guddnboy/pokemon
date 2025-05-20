import { Pokedex } from './components/Pokedex';

const App = () => {
  return (
    <>
      <header className="bg-primary-dark-blue py-6 flex justify-center items-center shadow-md">
        <h1 className="text-primary-bright-yellow text-4xl font-bold tracking-widest">
          POKEDEX
        </h1>
      </header>
      <Pokedex />
      <footer>
        <div className="font-pokemon-solid text-center py-4 text-primary-bright-blue text-sm leading-relaxed">
          <div>
            <a
              href="https://github.com/guddnboy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-bright-blue hover:text-primary-dark-yellow transition-colors ml-2"
              aria-label="GitHub Repository"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="inline-block"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.334-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.922.43.37.813 1.096.813 2.21 0 1.595-.014 2.88-.014 3.27 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GUDDNBOY.
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
