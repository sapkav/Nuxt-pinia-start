<template>
    <div>
        <div class="text-center text-4xl pt-1">
            <h1 class="text-green-600">5 БУКВ</h1>
            <div class="grid grid-cols-5 w-[300px] my-2 mx-auto">
                <div v-for="item in arr" :key="item.id">
                    <div class="border-2 border-gray-400 w-[52px] h-[52px] m-[2px] rounded pt-[4px]">
                        {{ item }}
                    </div>
                </div>
            </div>
            <div class="flex w-[450px] my-2 mx-auto pt-12">
                <div v-for="item in firstRow" :key="item.id">
                    <div class="key-style" @click="addLetter(item)">
                        {{ item }}
                    </div>
                </div>
            </div>
            <div class="flex w-[400px] my-2 mx-auto">
                <div v-for="item in secondRow" :key="item.id">
                    <div class="key-style" @click="addLetter(item)">
                        {{ item }}
                    </div>
                </div>
            </div>
            <div class="flex w-[450px] my-2 mx-auto">
                <div v-for="item in thirdRow" :key="item.id">
                    <div class="key-style key-style-enter" v-if="item === 'ENTER'">
                        {{ item }}
                    </div>
                    <div class="key-style key-style-delete" v-else-if="item === 'DELETE'">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" class="game-icon" data-testid="icon-backspace">
                            <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                        </svg>
                    </div>
                    <div class="key-style" v-else @click="addLetter(item)">
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'words',
    data() {
        return {
            arr: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
            word: 'smoke',
        }
    },
    created() {
        this.letterCount = 0;
        this.firstRow = ['Q','W','E','R','T','Y','U','I','O','P'];
        this.secondRow = ['A','S','D','F','G','H','J','K','L'];
        this.thirdRow = ['ENTER','Z','X','C','V','B','N','M','DELETE'];
    },
    methods: {
        addLetter(letter) {
            console.log(letter);
            this.arr[this.letterCount] = letter;
            this.letterCount++;
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