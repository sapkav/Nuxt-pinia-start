<template>
    <div>
        <div class="text-center text-4xl pt-1">
            <h1 class="text-green-600">5 Words</h1>
            <div class="grid grid-cols-5 w-[280px] my-2 mx-auto">
                <div v-for="item in arr" :key="item.id">
                    <div class="border-2 border-gray-400 w-[52px] h-[52px] m-[2px] rounded pt-[4px]" :style = "{ backgroundColor: item.color, color: item.color ? 'white' : 'black'}">
                        {{ item.value }}
                    </div>
                </div>
            </div>
            <div class="flex w-[450px] my-2 mx-auto pt-4">
                <div v-for="item in firstRow" :key="item.id">
                    <div class="key-style" @click="addLetter(item)" :style="{ backgroundColor: colorsObj[item] ? colorsObj[item] : '', color: colorsObj[item] ? 'white' : 'black'}">
                        {{ item }}
                    </div>
                </div>
            </div>
            <div class="flex w-[400px] my-2 mx-auto">
                <div v-for="item in secondRow" :key="item.id">
                    <div class="key-style" @click="addLetter(item)" :style="{ backgroundColor: colorsObj[item] ? colorsObj[item] : '', color: colorsObj[item] ? 'white' : 'black'}">
                        {{ item }}
                    </div>
                </div>
            </div>
            <div class="flex w-[450px] my-2 mx-auto">
                <div v-for="item in thirdRow" :key="item.id">
                    <div class="key-style key-style-enter" v-if="item === 'ENTER'" @click="checkWord">
                        {{ item }}
                    </div>
                    <div class="key-style key-style-delete" v-else-if="item === 'DELETE'" @click="deleteLetter">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" class="game-icon" data-testid="icon-backspace">
                            <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                        </svg>
                    </div>
                    <div class="key-style" v-else @click="addLetter(item)" :style="{ backgroundColor: colorsObj[item] ? colorsObj[item] : '', color: colorsObj[item] ? 'white' : 'black'}">
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { wordsStore } from '~/store'

export default {
    name: 'words',
    data() {
        return {
            arr: [],
            colorsObj: {},
        }
    },
    created() {
        const gameStore = wordsStore();
        this.allWordsArr = gameStore.words.slice(0);
        this.letterCount = 0;
        this.isReady = false;
        this.firstRow = ['Q','W','E','R','T','Y','U','I','O','P'];
        this.secondRow = ['A','S','D','F','G','H','J','K','L'];
        this.thirdRow = ['ENTER','Z','X','C','V','B','N','M','DELETE'];
        this.word = this.allWordsArr[this.getRandomArbitrary(0, this.allWordsArr.length - 1)].toUpperCase();
        for (let i = 0; i < 25; i++) {
            this.arr.push({value: '', color: ''});
        }
    },
    methods: {
        checkWord() {
            if (!this.isReady) {
                return;
            }
            let rightCount = 0;
            if (!this.allWordsArr.includes(this.word.toLowerCase())) {
                alert('Введи норм слово дурак');
                return;
            }
            for (let i = this.letterCount - 5; i < this.letterCount; i++) {
                if (!this.word.includes(this.arr[i].value)) {
                    this.arr[i].color = '#797c7e';
                    this.colorsObj[this.arr[i].value] = '#797c7e';
                    continue;
                }
                let indexes = [];
                this.word.split('').forEach((value, index) => {
                    if (value === this.arr[i].value) {
                        indexes.push(index)
                    }
                })
                if (indexes.includes(i % 5)) {
                    this.arr[i].color = '#79a86b';
                    this.colorsObj[this.arr[i].value] = '#79a86b';
                    rightCount++
                } else {
                    this.arr[i].color = '#c6b566';
                    if (this.colorsObj[this.arr[i].value]) {
                        if (this.colorsObj[this.arr[i].value] !== '#79a86b') {
                            this.colorsObj[this.arr[i].value] = '#c6b566';
                        }
                    } else {
                        this.colorsObj[this.arr[i].value] = '#c6b566';
                    }
                }
            }
            if (this.letterCount === 25) {
                alert(this.word);
            }
            this.isReady = false;
            if (rightCount === 5) {
                setTimeout(() => {
                    alert('krasava chel');
                    this.refreshGame();
                }, 100);
            }
        },
        addLetter(letter) {
            if (this.isReady || this.letterCount >= 25) {
                return;
            }
            this.arr[this.letterCount].value = letter;
            this.letterCount++;
            if (this.letterCount % 5 === 0) {
                this.isReady = true;
            }
        },
        deleteLetter() {
            // if (this.letterCount % 5 === 0) {
            //     return;
            // }
            if (this.isReady) {
                this.isReady = false;
            }
            this.arr[this.letterCount - 1].value = '';
            this.letterCount--;
        },
        refreshGame() {
            this.letterCount = 0;
            this.isReady = false;
            this.colorsObj = {};
            this.arr.forEach(item => {
                item.value = '';
                item.color = '';
            })
            this.word = this.allWordsArr[this.getRandomArbitrary(0, this.allWordsArr.length - 1)].toUpperCase();
        },
        getRandomArbitrary(min, max) {
            return Math.ceil(Math.random() * (max - min) + min);
        }
    }
}
</script>

<style>
.key-style {
    width: 40px;
    height: 50px;
    margin: 2px;
    border-radius: 5px;
    font-size: 24px;
    padding-top: 7px;
    cursor: pointer;
    background-color: rgb(229 231 235);
    user-select: none;
}

.key-style-enter {
    width: 65px;
    font-size: 17px;
    padding-top: 6px;
}

.key-style-delete {
    width: 65px;
    padding-left: 20px;
    font-size: 17px;
    padding-top: 14px;
}
</style>