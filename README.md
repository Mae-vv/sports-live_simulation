Sports Live Simulation

A web application to follow simulated tennis, Formula 1 and running events in real time, built with Node.js, Express, Socket.IO and Tailwind CSS.

Table of contents


Description

Features

Technologies used

Installation

How to use

Problems solved

Contribute

License

About me


Description

Sports Live Simulation is my first web development project, created to learn how to use WebSockets and real-time updates. It displays simulated data for :

Tennis: Game scores (e.g. "40-Adv") and stats like aces.

Formula 1: Race leader and lap time (for example, "47.123s").

Running: Event name, runner and pace (e.g. "4.43 min/km").


Features

Sports data updated every 5 seconds via Socket.IO.

Modern user interface with Tailwind CSS.

Alerts for key events (match point, overtaking, refueling).

Modular code for adding other sports.


Technologies used

Node.js and Express: Server backend.

Socket.IO: Real-time communication.

Tailwind CSS: Interface styles.

JavaScript/HTML: Interactive frontend.


Installation

Clone the :

git clone https://github.com/Mae-vv/sports-live_simulation.git
cd sports-live_simulation

Install dependencies :

npm install

Start the server :

node server.js


Use

Open your browser at http://localhost:3000.

The Tennis, Formula 1 and Running sections are displayed with real-time updates.

Alerts appear for key moments, such as a match point or overtaking.


Problems solved

Corrected a typo (race.name → event.name) that prevented the Run section from being displayed.

Resolved the ReferenceError: Can't find variable: Adv error by correcting the quotation marks for ‘40-Adv’.

Resolved a divergent branches error by merging remote modifications (README, .gitignore) with the local repository.

Resolved a problem with the vi editor when finalizing the merge manually.

Solved a GitHub confidentiality error by correcting email commits with rebase.

Ignored node_modules files when updating .gitignore.


Contribute

Contributions are welcome! To contribute :

Forke the repository.

Create a branch: git checkout -b my-new-feature.

Commit your changes: git commit -m “Add my feature”.

Push your branch: git push origin my-new-feature.

Create a Pull Request on GitHub.


License

This project is licensed under the MIT License.


About me

I'm a junior developer, I'm working in data sector. This project is my first experience with Node.js and Socket.IO! Follow me on GitHub to see my future projects. There are many more to come.