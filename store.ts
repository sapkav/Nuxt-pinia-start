import axios from 'axios'
import { defineStore } from 'pinia'

export const useFriendsStore = defineStore({
    id: 'friends-store',
    state: () => {
        return {
            characters: [{
                name: 'Vanya',
                line: 'maybe'
            },
            {
                name: 'Damir',
                line: 'test'
            }]
        }
    },

    actions: {
        addCharacter(name: string, line: string) {
            this.characters.push({
                name,
                line
            })
        }
    },

    getters: {
        getItemByName: (state) => {
            return (name: string) => state.characters.find(c => c.name === name)
        }
    }
})

export const useGamesStore = defineStore({
    id: 'games-store',
    state: () => ({
        games: [],
        loading: false,
    }),

    getters: {
        // doubleCount: (state) => {
        //     return function(count: number) {
        //         let final = state.counters.find(a => a.count === count);
        //         return final ? final.count * 2 : 'nea';
        //     }
        // }
    },

    actions: {
        async getGames() {
            this.loading = true;
            this.games = (await axios('http://localhost:3004/games')).data.slice(0);
            this.loading = false;
        }
        // increment(count: number) {
        //     this.counters.forEach(item => {
        //         if (item.count === count) {
        //             item.count = 23;
        //         }
        //     })
        // },
    },
})

export const useCityStore = defineStore({
    id: 'city-store',
    state: () => ({
        citys: ['Zelenograd', 'Moscow', 'London', 'Ufa', 'New York', 'Kosovo'],
    }),

    getters: {
    },

    actions: {
    },
})