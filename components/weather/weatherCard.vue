<template>
    <div class="p-3" v-if="isLoading">
        <div class="rounded h-[240px] w-[300px] border-gray-400 border-2 p-1 text-gray-100" :style="{background: `url(${bgUrl})`}">
            <h2 class="text-center">{{ city }} {{weather.condition.text}}</h2>
            <div>Погода сейчас: {{ weather.feelslike_c }}°</div>
            <div class="flex">
                <div class="pt-5">{{ weather.condition.text }}</div>
                <img width="64" :src="`https:${weather.condition.icon}`">
            </div>
            <div class="flex">
                Качество воздуха: {{ weather.air_quality['us-epa-index']}}
                ({{airQuailty[weather.air_quality['us-epa-index']]}})
            </div>
            <div>Скорость ветра: {{ weather.wind_kph }} км/ч ~ {{ mlToKm }} м/c</div>
            <div>Давление: {{ mbToMm }} мм рт. ст.</div>
            <div>Влажность: {{ weather.humidity }} %</div>
        </div>
        <!-- <div>{{ weather }}</div> -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "weatherCard",
    data() {
        return {
            weather: '',
            isLoading: false,
        }
    },
    created() {
        this.airQuailty = {
            1: 'Хороший',
            2: 'Умеренный',
            3: 'Вредный для чувствительной группы',
            4: 'Нездоровый',
            5: 'Очень вредный для здоровья',
            6: 'Опасный',
        };
        this.bgUrl = 'https://i.pinimg.com/originals/7c/fa/4a/7cfa4a5203ff965e1c7e83d700391b54.jpg';
        this.bgObj - [
            {
                "code" : 1000,
                "day" : "https://top-fon.com/uploads/posts/2023-02/1675215204_top-fon-com-p-solnechnii-fon-dlya-prezentatsii-7.jpg",
                "night" : "Clear",
            },
            {
                "code" : 1003,
                "day" : "Partly cloudy",
                "night" : "Partly cloudy",
                "icon" : 116
            },
            {
                "code" : 1006,
                "day" : "Cloudy",
                "night" : "Cloudy",
                "icon" : 119
            },
            {
                "code" : 1009,
                "day" : "Overcast",
                "night" : "Overcast",
                "icon" : 122
            },
            {
                "code" : 1030,
                "day" : "Mist",
                "night" : "Mist",
                "icon" : 143
            },
            {
                "code" : 1063,
                "day" : "Patchy rain possible",
                "night" : "Patchy rain possible",
                "icon" : 176
            },
            {
                "code" : 1066,
                "day" : "Patchy snow possible",
                "night" : "Patchy snow possible",
                "icon" : 179
            },
            {
                "code" : 1069,
                "day" : "Patchy sleet possible",
                "night" : "Patchy sleet possible",
                "icon" : 182
            },
            {
                "code" : 1072,
                "day" : "Patchy freezing drizzle possible",
                "night" : "Patchy freezing drizzle possible",
                "icon" : 185
            },
            {
                "code" : 1087,
                "day" : "Thundery outbreaks possible",
                "night" : "Thundery outbreaks possible",
                "icon" : 200
            },
            {
                "code" : 1114,
                "day" : "Blowing snow",
                "night" : "Blowing snow",
                "icon" : 227
            },
            {
                "code" : 1117,
                "day" : "Blizzard",
                "night" : "Blizzard",
                "icon" : 230
            },
            {
                "code" : 1135,
                "day" : "Fog",
                "night" : "Fog",
                "icon" : 248
            },
            {
                "code" : 1147,
                "day" : "Freezing fog",
                "night" : "Freezing fog",
                "icon" : 260
            },
            {
                "code" : 1150,
                "day" : "Patchy light drizzle",
                "night" : "Patchy light drizzle",
                "icon" : 263
            },
            {
                "code" : 1153,
                "day" : "Light drizzle",
                "night" : "Light drizzle",
                "icon" : 266
            },
            {
                "code" : 1168,
                "day" : "Freezing drizzle",
                "night" : "Freezing drizzle",
                "icon" : 281
            },
            {
                "code" : 1171,
                "day" : "Heavy freezing drizzle",
                "night" : "Heavy freezing drizzle",
                "icon" : 284
            },
            {
                "code" : 1180,
                "day" : "Patchy light rain",
                "night" : "Patchy light rain",
                "icon" : 293
            },
            {
                "code" : 1183,
                "day" : "Light rain",
                "night" : "Light rain",
                "icon" : 296
            },
            {
                "code" : 1186,
                "day" : "Moderate rain at times",
                "night" : "Moderate rain at times",
                "icon" : 299
            },
            {
                "code" : 1189,
                "day" : "Moderate rain",
                "night" : "Moderate rain",
                "icon" : 302
            },
            {
                "code" : 1192,
                "day" : "Heavy rain at times",
                "night" : "Heavy rain at times",
                "icon" : 305
            },
            {
                "code" : 1195,
                "day" : "Heavy rain",
                "night" : "Heavy rain",
                "icon" : 308
            },
            {
                "code" : 1198,
                "day" : "Light freezing rain",
                "night" : "Light freezing rain",
                "icon" : 311
            },
            {
                "code" : 1201,
                "day" : "Moderate or heavy freezing rain",
                "night" : "Moderate or heavy freezing rain",
                "icon" : 314
            },
            {
                "code" : 1204,
                "day" : "Light sleet",
                "night" : "Light sleet",
                "icon" : 317
            },
            {
                "code" : 1207,
                "day" : "Moderate or heavy sleet",
                "night" : "Moderate or heavy sleet",
                "icon" : 320
            },
            {
                "code" : 1210,
                "day" : "Patchy light snow",
                "night" : "Patchy light snow",
                "icon" : 323
            },
            {
                "code" : 1213,
                "day" : "Light snow",
                "night" : "Light snow",
                "icon" : 326
            },
            {
                "code" : 1216,
                "day" : "Patchy moderate snow",
                "night" : "Patchy moderate snow",
                "icon" : 329
            },
            {
                "code" : 1219,
                "day" : "Moderate snow",
                "night" : "Moderate snow",
                "icon" : 332
            },
            {
                "code" : 1222,
                "day" : "Patchy heavy snow",
                "night" : "Patchy heavy snow",
                "icon" : 335
            },
            {
                "code" : 1225,
                "day" : "Heavy snow",
                "night" : "Heavy snow",
                "icon" : 338
            },
            {
                "code" : 1237,
                "day" : "Ice pellets",
                "night" : "Ice pellets",
                "icon" : 350
            },
            {
                "code" : 1240,
                "day" : "Light rain shower",
                "night" : "Light rain shower",
                "icon" : 353
            },
            {
                "code" : 1243,
                "day" : "Moderate or heavy rain shower",
                "night" : "Moderate or heavy rain shower",
                "icon" : 356
            },
            {
                "code" : 1246,
                "day" : "Torrential rain shower",
                "night" : "Torrential rain shower",
                "icon" : 359
            },
            {
                "code" : 1249,
                "day" : "Light sleet showers",
                "night" : "Light sleet showers",
                "icon" : 362
            },
            {
                "code" : 1252,
                "day" : "Moderate or heavy sleet showers",
                "night" : "Moderate or heavy sleet showers",
                "icon" : 365
            },
            {
                "code" : 1255,
                "day" : "Light snow showers",
                "night" : "Light snow showers",
                "icon" : 368
            },
            {
                "code" : 1258,
                "day" : "Moderate or heavy snow showers",
                "night" : "Moderate or heavy snow showers",
                "icon" : 371
            },
            {
                "code" : 1261,
                "day" : "Light showers of ice pellets",
                "night" : "Light showers of ice pellets",
                "icon" : 374
            },
            {
                "code" : 1264,
                "day" : "Moderate or heavy showers of ice pellets",
                "night" : "Moderate or heavy showers of ice pellets",
                "icon" : 377
            },
            {
                "code" : 1273,
                "day" : "Patchy light rain with thunder",
                "night" : "Patchy light rain with thunder",
                "icon" : 386
            },
            {
                "code" : 1276,
                "day" : "Moderate or heavy rain with thunder",
                "night" : "Moderate or heavy rain with thunder",
                "icon" : 389
            },
            {
                "code" : 1279,
                "day" : "Patchy light snow with thunder",
                "night" : "Patchy light snow with thunder",
                "icon" : 392
            },
            {
                "code" : 1282,
                "day" : "Moderate or heavy snow with thunder",
                "night" : "Moderate or heavy snow with thunder",
                "icon" : 395
            }
        ]
    },
    async mounted() {
        const token = '7609a460cf7a453f8b2115143240801';
        const response = (await axios.get(`http://api.weatherapi.com/v1/current.json?key=${token}&q=${this.city}&lang=ru&days=3&aqi=yes&alerts=yes&dt=2024-01-08`));
        this.weather = await Object.assign(response.data.location, response.data.current);
        this.isLoading = true;
    },
    computed: {
        mlToKm() {
            return (this.weather.wind_kph * 0.2778).toFixed(1);
        },
        mbToMm() {
            return (this.weather.pressure_mb * 0.75).toFixed(0);
        }
    },
    props: {
        city: {
            type: String,
            default: '',
        }
    }
};
</script>

<style>

</style>