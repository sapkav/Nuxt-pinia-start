<template>
    <div class="fitness-osnova">
        <h1>top</h1>
        <div class="fitness-bmi">
            <div>
                <h1>BMI (Body Mass Index)</h1>
                <div>You have a normal weight</div>
                <button>View more</button>
            </div>
            <div>
                <GChart
                    type="PieChart"
                    :data="chartData"
                    :options="chartOptions"
                    />
            </div>
        </div>
        <h1>activity</h1>
        <fitness-activity />
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
    name:'FitnessHome',
    components: {
        GChart,
    },
    data() {
        return {
            chartOptions: {
                pieSliceTex: 'value',
                is3D: true,
                pieStartAngle: 80,
                tooltip: { ignoreBounds: false },
                backgroundColor: 'transparent',
                legend: {
                    position: 'none',
                    alignment: 'end',
                    maxLines: 10,
                },
                slices: { 
                    0: { offset: 0.15, color: 'gray' },
                    1: { color: 'purple' },
                },
            },
            chartData: [
                ['1','2'],
                ['test', 80],
                ['test2', 20],
            ]
        }
    }
}
</script>

<style>
.fitness-osnova {
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
    justify-content: space-between;
}

</style>