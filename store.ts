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

export const useCounterStore = defineStore({
    id: 'counter-store',
    state: () => {
        return {
            counters: [{
                name: 'Vanya',
                count: 0,
            }]
        }
    },

    getters: {
        doubleCount: (state) => {
            return function(count: number) {
                let final = state.counters.find(a => a.count === count);
                return final ? final.count * 2 : 'nea';
            }
        }
    },

    actions: {
        increment(count: number) {
            this.counters.forEach(item => {
                if (item.count === count) {
                    item.count = 23;
                }
            })
        },
    },
})