<template>
    <div>
        <fitness-home />
    </div>
</template>

<script>
import FitnessHome from '~/components/fitness/FitnessHome.vue';

export default {
    components: { FitnessHome },
    name:'fitness',
}
</script>

<style>
.fitness-main {
    background-color: #161818;
    min-height: calc(100vh - 64px);
    width: 100%;
    color: white;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.fitness-bmi {
    width: 80%;
    height: 250px;
    background-color: #9C23D7;
    border-radius: 30px;
    margin-top: 30px;
    display: flex;
    padding: 5px 20px;
}

</style>