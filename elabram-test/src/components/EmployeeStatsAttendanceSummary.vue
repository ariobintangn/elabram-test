<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
    data() {
        return {
            cards: [
                {
                    header: 'Total Working Days',
                    content: '237',
                    color: 'bg-primary-350'
                },
                {
                    header: 'Actual Working Hours',
                    content: '2126 hr 14 min',
                    color: 'bg-primary-350'
                },
                {
                    header: 'Total Working Hours',
                    content: '2930 hr 26 min',
                    color: 'bg-primary-350'
                },
                {
                    header: 'Total Late Coming',
                    content: '0',
                    color: 'bg-error'
                }
            ],
            chartData: {
                labels: [ 'January', 'February', 'March', "April", "May", "June", "July", "August", "September", "November", "December" ],
                datasets: [
                    { 
                        data: [40, 20, 12, 10, 89, 12, 77, 11, 67, 65, 86, 10],
                        label: 'Label 1',
                        backgroundColor: '#E53935',
                    },
                    { 
                        data: [20, 40, 22, 90, 71, 45, 23, 12, 42, 72, 65, 10],
                        label: 'Label 2',
                        backgroundColor: '#0796E5',
                    }
                ]
            },
            chartOptions: {
                responsive:true,
                maintainAspectRatio: false,      
                plugins: {
                    legend: {
                        display: false,
                    },
                }
            }
        }
    },
    components: {
        Bar
    }
}
</script>

<template>
    <div
        class="p-[16px] my-[16px] bg-white flex flex-col items-center border border-primary-border shadow-sm rounded-md">
        <div class="w-full flex justify-between items-center pb-4">
            <h1 class="font-bold text-primary-gray-4">Attendance Summary</h1>
        </div>
        <div class="w-full">
            <!-- <img src="../assets/home/graph1.png" class="lg:h-[291px] lg:w-full"> -->
            <Bar
                id="chart-1"
                :options="chartOptions"
                :data="chartData"
                class="h-80"
            />
        </div>
        <div class="flex justify-center gap-2 xl:gap-7 w-full flex-wrap lg:flex-nowrap">
                <!-- item 1 -->
                <div
                    class="h-[91px] w-[150px] p-[12px] my-[12px] bg-white flex flex-row items-left border border-primary-border shadow-sm rounded-md relative lg:h-[107px] lg:w-[252px] xl:p-[26px] whitespace-nowrap"
                    v-for="(card, index) in cards"
                    :key="index"
                >
                    <div class="w-[5px] h-full absolute top-0 left-0  rounded-l-md" :class="card.color"></div>
                    <div class="flex flex-col justify-between ">
                        <h1 class="text-primary-gray-3 text-xs mb-[12px] lg:pr-[12px]">{{ card.header }}</h1>
                        <h1 class="text-black font-bold">{{ card.content }}</h1>
                    </div>
                    <img src="../assets/home/Info.svg" alt="info svg" class="h-[14px]">
                </div>

        </div>
    </div>
</template>
