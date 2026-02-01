export default function Badminton() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Badminton</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Badminton</h2>
        <p className="text-gray-700 mb-4">
          Badminton is a racquet sport played by either two players (singles) or
          four players (doubles), in which players hit a shuttlecock across a
          net. The sport demands speed, agility, and precision.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Deutscher Badminton Verband (DBV)
        </h2>
        <p className="text-gray-700 mb-4">
          The Deutscher Badminton Verband is the governing body for badminton in
          Germany, responsible for organizing tournaments, training athletes,
          and promoting the sport.
        </p>

        <div className="space-y-3">
          <p>
            <a
              href="https://www.badminton.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Official Website: www.badminton.de
            </a>
          </p>
          <p>
            <a
              href="https://www.badminton.de/tournaments"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Tournaments & Events
            </a>
          </p>
          <p>
            <a
              href="https://www.badminton.de/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              About DBV
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
