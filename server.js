// Node.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir le fichier index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Simuler des mises à jour en temps réel
setInterval(() => {
    // Points de jeu possibles pour le tennis
    const gamePoints = ['0', '15', '30', '40', '40-Adv'];
    const getRandomGamePoint = () => gamePoints[Math.floor(Math.random() * gamePoints.length)];
    // Données simulées pour le tennis
    const tennisUpdate = {
        player1 : 'Alcaraz',
        player2 : 'Rune',
        score:  `6-4, ${Math.floor(Math.random() * 7)}-${Math.floor(Math.random() * 7)}`,
        stats : { aces: Math.floor(Math.random() * 10)},
    };

    // Données simulée pour la F1
    const f1Update = {
        name : 'Monaco GP',
        leader : Math.random() > 0.5 ? 'Verstappen' : 'Hamilton',
        fastestLap : `${Math.floor(Math.random() * 60)}.${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}s`,
    };
    
    // Données simulées pour la course à pied
    const runningUpdate = {
        name : 'Paris marathon',
        runner : 'Kipchoge',
        pace : `${Math.floor(Math.random() * 5) + 3}.${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    };

    // Envoyer les mises à jour aux clients (sur le frontend)
    console.log('Envoi des données:', { tennisUpdate, f1Update, runningUpdate });
    io.emit('tennisUpdate', tennisUpdate);
    io.emit('f1Update', f1Update);
    io.emit('runningUpdate', runningUpdate);
}, 5000); // Mise à jour toutes les 5 secondes

    // Vérifier les connexions Socket.IO
    io.on('connection', (socket) => {
        console.log('Un client est connecté:', socket.id);
        socket.on('disconnect', () => {
            console.log('Client déconnecté:', socket.id);
        });
    });   

// Démarrer le serveur
server.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
