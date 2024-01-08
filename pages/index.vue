<template>
    <div class="text-4xl font-bold text-black-700 p-10 flex justify-center items-center bg-gray-700" style="height: calc(100vh - 64px)">
        <div class="absolute left-[100px] top-[100px]">Просто схожу с ума</div>
        <img src="../assets/img/rocket.png" class='w-[100px] rocket-animate'>
        <div class="scale-150 text-blue-700">Репа</div> <div class="rotate-90 pl-5">для</div>
        <div class="translate-y-6 text-amber-600">теста</div> <div class="skew-y-12 text-red-600">фич</div>
        и <div class="m-2 underline decoration-4 text-green-400">всяких</div>
        <div class="word-rotate flex relative">
            <div>п</div>
            <div>р</div>
            <div>и</div>
            <div>к</div>
            <div>о</div>
            <div>л</div>
            <div>ь</div>
            <div>н</div>
            <div>ы</div>
            <div>х</div>
        </div>
        штук.
        <div class="relative" style="min-width: 40px; height: 40px">
            <img src="@/assets/img/raindrop.png" class="absolute raindrop">
            <div class="raindrop-bottom"></div>
            <img src="@/assets/img/cliac.png" class="cliac">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.rocket-animate {
    position: absolute;
    animation: rocket-animate 4s ease-in 0s infinite;
}

@keyframes rocket-animate {
    0% {left: -100px; top: 25%; transform: rotate(80deg);}
    2.5% {left: -50px; top: 24%; transform: rotate(80deg);}
    5% {left: 0px; top: 23%; transform: rotate(80deg);}
    7.5% {left: 2.5%; top: 22%; transform: rotate(80deg);}
    10% {left: 5%; top: 21%; transform: rotate(80deg);}
    12.5% {left: 7.5%; top: 20%; transform: rotate(80deg);}
    15% {left: 10%; top: 19%; transform: rotate(80deg);}
    17.5% {left: 12.5%; top: 18%; transform: rotate(80deg);}
    20% {left: 15%; top: 17%; transform: rotate(80deg);}
    22.5% {left: 17.5%; top: 16%; transform: rotate(80deg);}
    25% {left: 20%; top: 15%; transform: rotate(80deg);}
    27.5% {left: 23%; top: 14%; transform: rotate(80deg);}
    30% {left: 26%; top: 13%; transform: rotate(85deg);}
    32.5% {left: 29%; top: 12%; transform: rotate(85deg);}
    35% {left: 32%; top: 11%; transform: rotate(86deg);}
    37.5% {left: 35%; top: 10%; transform: rotate(86deg);}
    40% {left: 38%; top: 9%; transform: rotate(87deg);}
    42.5% {left: 41%; top: 8%; transform: rotate(87deg);}
    45% {left: 44%; top: 7%; transform: rotate(90deg);}
    47.5% {left: 47%; top: 6%; transform: rotate(90deg);}
    50% {left: 50%; top: 5%; transform: rotate(90deg);}
    52.5% {left: 53%; top: 6%; transform: rotate(90deg);}
    55% {left: 56%; top: 7%; transform: rotate(90deg);}
    57.5% {left: 59%; top: 8%; transform: rotate(91deg);}
    60% {left: 62%; top: 9%; transform: rotate(91deg);}
    62.5% {left: 65%; top: 10%; transform: rotate(92deg);}
    65% {left: 68%; top: 11%; transform: rotate(93deg);}
    67.5% {left: 71%; top: 12%; transform: rotate(94deg);}
    70% {left: 74%; top: 13%; transform: rotate(95deg);}
    72.5% {left: 77%; top: 14%; transform: rotate(96deg);}
    75% {left: 80%; top: 15%; transform: rotate(96deg);}
    77.5% {left: 82%; top: 16%; transform: rotate(97deg);}
    80% {left: 84%; top: 17%; transform: rotate(97deg);}
    82.5% {left: 87%; top: 18%; transform: rotate(98deg);}
    85% {left: 89%; top: 19%; transform: rotate(98deg);}
    87.5% {left: 91%; top: 20%; transform: rotate(99deg);}
    90% {left: 93%; top: 21%; transform: rotate(99deg);}
    92.5% {left: 95%; top: 22%; transform: rotate(100deg);}
    95% {left: 98%; top: 23%; transform: rotate(100deg);}
    97.5% {left: 100%; top: 24%; transform: rotate(100deg);}
    100% {right: 100px; top: 25%; transform: rotate(100deg);}
}
</style>