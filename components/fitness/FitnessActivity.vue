<template>
    <div class="fitness-activity">
        <div>
            <h1>Heart rate</h1>
            <div>78 BPM</div>
        </div>
        <div>
            <GChart
                type="LineChart"
                :data="chartData"
                :options="chartOptions"
                />
        </div>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
    name: 'FitnessActivity',
    components: {
        GChart,
    },
    data() {
        return {
            chartOptions: {
                curveType: 'function',
                width: '600',
                height: 140,
                backgroundColor: {
                    fill: 'transparent',
                    stroke: 'transparent',
                }
            },
            chartData: [
                ['Year', 'Sales'],
                ['2004', 1000],
                ['2005', 1170],
                ['2006', 660],
                ['2007', 1030],
            ]
        }
    }
}
</script>

<style>
.fitness-activity {
    width: 80%;
    height: 250px;
    background: linear-gradient(#633c6a, #2E2D3A);
    border-radius: 30px;
    margin-top: 30px;
    display: grid;
    padding: 5px 20px;
    justify-content: space-between;
}
</style>