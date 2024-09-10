import React from 'react';
import './app.css'
import {AppHeader} from './components/app-header.component';
import { Game } from './components/game.component';


export const App = () => {

    return (
        <div>
            <AppHeader title="Tic Tac Toe" slogan="Let the game begin..." />
            <Game/>
        </div>
    );
};


